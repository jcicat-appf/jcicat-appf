{
    // Integration Logs
    var INTEGLOG_RECTYPE = 'customrecord_appf_integration_logs';
    var INTEGLOG_FLD_MESSAGE = 'custrecord_appf_log_message_content';
    var INTEGLOG_FLD_LINKEDTRANS = 'custrecord_appf_log_transaction';
    var INTEGLOG_FLD_INTEGLOGSTATUS = 'custrecord_appf_log_status';
    var INTEGLOG_FLD_RESPONSEMESSAGE = 'custrecord_appf_log_response';
    var INTEGLOG_FLD_SCRIPTPROCESSSTATUS = 'custrecord_appf_log_processing_status';
    var INTEGLOG_FLD_FLOWNAME = 'custrecord_appf_log_flow_name';
    var INTEGLOG_FLD_REQUESTDATETIME = 'custrecord_appf_log_requestcreate_dt';
    var INTEGLOG_FLD_INTEGSUCCESSDATETIME = 'custrecord_appf_logs_integ_success_dt';
    var INTEGLOG_FLD_RESPONSEDATETIME = 'custrecord_appf_logs_response_received';
    var INTEGLOG_FLD_INBOUNDTRANS = 'custrecord_appf_inbound_trans';
    var INTEGLOG_FLD_TRANSLINEID = 'custrecord_appf_log_transaction_line_id';
    var INTEGLOG_FLD_HASBACKLINKED = 'custrecord_appf_log_hasbacklinked';

    // Flow Configurator
    var FLOWCONFIG_RECTYPE = 'customrecord_appf_config_flow';
    var FLOWCONFIG_FLD_ENDPOINT = 'custrecord_appf_flow_endpoint_url';
    var FLOWCONFIG_FLD_CALLMETHOD = 'custrecord_appf_flow_callmethod';
    var FLOWCONFIG_FLD_SYSTEM = 'custrecord_appf_flow_system';
    var FLOWCONFIG_FLD_ORDERINFO_ENDPOINT = 'custrecord_appf_flow_orderinfo_endpoint';
    var FLOWCONFIG_FLD_SAMPLESTRUCTURE = 'custrecord_appf_flow_sample_structure';

    //Field Config
    var FLDCONFIG_RECTYPE = 'customrecord_appf_config_field';
    var FLDCONFIG_FLD_FLOWNAME = 'custrecord_appf_field_flowname';
    var FLDCONFIG_FLD_ENDPOINT = 'custrecord_appf_field_endpoint';
    var FLDCONFIG_FLD_NETSUITE = 'custrecord_appf_field_ns';
    var FLDCONFIG_FLD_STAGING = 'custrecord_appf_field_staging';
    var FLDCONFIG_FLD_ISARRAY = 'custrecord_appf_field_isarray';
    var FLDCONFIG_FLD_ISTEXT = 'custrecord_appf_field_istext';
    var FLDCONFIG_FLD_UPDATEONOUTBOUND = 'custrecord_appf_field_updateonoutbound';

    // Response Mapping
    var RESPONSEMAP_RECTYPE = 'customrecord_appf_config_response_field';
    var RESPONSEMAP_FLD_FLOWNAME = 'custrecord_appf_resfield_flowname';
    var RESPONSEMAP_FLD_ENDPOINT = 'custrecord_appf_resfield_endpoint';
    var RESPONSEMAP_FLD_NETSUITE = 'custrecord_appf_resfield_ns';

    // Transaction
    var TRANS_LINEITEM = 'item';
    var TRANS_LINEITEM_TRANSLINE = 'custcol_appf_tran_line_id';

    var SPARAM_BACKLINK_SAVEDSEARCH = 'custscript_appf_sparam_backlinkob_ss';
    var SPARAM_BACKLINK_FLOWCONFIG = 'custscript_appf_sparam_backlinkob_flow';
}

function schedule_backlinkOutboundResponse(type) {
    var context = nlapiGetContext();
    var savedsearch_id = context.getSetting('SCRIPT', SPARAM_BACKLINK_SAVEDSEARCH);
    var flowconfig_id = context.getSetting('SCRIPT', SPARAM_BACKLINK_FLOWCONFIG);

    if (!isNullOrEmpty(savedsearch_id) && !isNullOrEmpty(flowconfig_id)) {
        var mapping = getFlowMapping(flowconfig_id);
        var savedsearch_resultset = nlapiLoadSearch(null, savedsearch_id).runSearch();
        savedsearch_resultset.forEachResult(function(result) {
            try {
                var response = result.getValue(INTEGLOG_FLD_RESPONSEMESSAGE);
                var response_json = JSON.parse(response);

                var transaction_id = result.getValue(INTEGLOG_FLD_LINKEDTRANS);
                var transaction_lineid = result.getValue(INTEGLOG_FLD_TRANSLINEID);
                var transaction_rectype = nlapiLookupField('transaction', transaction_id, 'recordtype');
                var transaction_rec = nlapiLoadRecord(transaction_rectype, transaction_id);
                var transaction_lineid_index = transaction_rec.findLineItemValue(TRANS_LINEITEM, TRANS_LINEITEM_TRANSLINE, transaction_lineid);

                nlapiLogExecution('DEBUG', 'transaction_lineid', transaction_lineid_index);
                if (transaction_lineid_index > 0) {
                    for (var key in mapping) {
                        var netsuite_field = key;
                        var endpoint_field = mapping[key];
                        var endpoint_value = dig(response_json, endpoint_field.name);

                        if (key.indexOf('.') > 0) {
                            var keys = key.split('.');
                            if (keys.length >= 2) {
                                // if (endpoint_field.isText) {
                                //     transaction_rec.setLineItemText(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                // }
                                // else {
                                //     transaction_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                // }
                                transaction_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                            }
                        }
                        else {
                            // if (endpoint_field.isText) {
                            //     transaction_rec.setFieldText(endpoint_value);
                            // }
                            // else {
                            //     transaction_rec.setFieldValue(endpoint_value);
                            // }
                            transaction_rec.setFieldValue(endpoint_value);
                        }

                        nlapiLogExecution('DEBUG', 'NS Field', netsuite_field);
                        nlapiLogExecution('DEBUG', endpoint_field.name, endpoint_value);
                    }

                    if (nlapiSubmitRecord(transaction_rec)) {
                        // Transaction Line Id is only made available to SO but not in Item Fmt
                        var created_id = result.getValue('createdfrom', INTEGLOG_FLD_LINKEDTRANS);
                        if (!isNullOrEmpty(created_id)) {
                            var created_rectype = nlapiLookupField('transaction', created_id, 'recordtype');
                            var created_rec = nlapiLoadRecord(created_rectype, created_id, {recordmode: 'dynamic'});

                            for (var key in mapping) {
                                var netsuite_field = key;
                                var endpoint_field = mapping[key];
                                var endpoint_value = dig(response_json, endpoint_field.name);

                                nlapiLogExecution('DEBUG', 'NS Field', netsuite_field);
                                nlapiLogExecution('DEBUG', endpoint_field.name, endpoint_value);

                                if (key.indexOf('.') > 0) {
                                    var keys = key.split('.');
                                    if (keys.length >= 2) {
                                        //if (endpoint_field.isText) {
                                        //    created_rec.setLineItemText(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                        //}
                                        //else {
                                        //    created_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                        //}
                                         created_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                    }
                                }
                                else {
                                    // if (endpoint_field.isText) {
                                    //     created_rec.setFieldText(endpoint_value);
                                    // }
                                    // else {
                                    //     created_rec.setFieldValue(endpoint_value);
                                    // }
                                    created_rec.setFieldValue(endpoint_value);
                                }
                            }

                            // Save created from transaction
                            if (nlapiSubmitRecord(created_rec)) {
                                // Update the Integration Log as it has been backlinked successfully.
                                nlapiSubmitField(result.getRecordType(), result.getId(), INTEGLOG_FLD_HASBACKLINKED, 'T');
                            }
                        }
                    }
                }

            }
            catch (err) {
                nlapiLogExecution('DEBUG', 'Unable to Backlink Outbound Response', err.name + ' : ' + err.message);
            }

            // Reschedule when usage is about to consume
            if (context.getRemainingUsage() < 1000) {
                nlapiYieldScript();
            }

            return true;
        });
    }

}

function dig(list_obj, keyids) {
    keyids = keyids.split('.');
    var value = '';
    var list_clone = JSON.parse(JSON.stringify(list_obj));
    for (var i=0; i<keyids.length; i++) {
        var _id = keyids[i];
        value = list_clone[_id];
        if ((list_clone[_id] instanceof Array) && (list_clone[_id].length > 0)) {
            //get the first element only
            list_clone = list_clone[_id][0];
        }
        else {
            list_clone = list_clone[_id];
        }
        // Break when list become unavailable
        if (!list_clone) {
            value = '';
            break;
        }
    }
    return value;
}

function getFlowMapping(flow_id) {
    var mapping = {};
    if (!isNullOrEmpty(flow_id)) {
        var rs = nlapiSearchRecord(RESPONSEMAP_RECTYPE, null,
                    [
                        new nlobjSearchFilter(RESPONSEMAP_FLD_FLOWNAME, null, 'is', flow_id),
                        new nlobjSearchFilter('isinactive', null, 'is', 'F')
                    ],
                    [
                        new nlobjSearchColumn(RESPONSEMAP_FLD_ENDPOINT),
                        new nlobjSearchColumn(RESPONSEMAP_FLD_NETSUITE)
                    ]) || [];
        for (var i=0; i<rs.length; i++) {
            var _this = rs[i];
            mapping[_this.getValue(RESPONSEMAP_FLD_NETSUITE)] = {
                name: _this.getValue(RESPONSEMAP_FLD_ENDPOINT)
            };
        }
    }
    return mapping;
}

function isNullOrEmpty(data) {
    return (data == null || data == '');
}
