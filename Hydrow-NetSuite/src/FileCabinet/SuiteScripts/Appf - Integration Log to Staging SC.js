/**
**      Version     Date            Author              Description
**      1.1         09/30/2020      MJ De Asis          Added isArray to FieldMapping
**      1.2         12/16/2020      MJ De Asis          Added IsItem and itemFieldLookup to FieldMapping
**      1.3         12/16/2020      MJ De Asis          Added Search via Sales Order Number or Purchase Order Number and Item
**      1.4         01/28/2021      Marlon Villarama    Expanded staging record creation to accept multi-line cutover orders
**      1.5         02/02/2021      Marlon Villarama    FIX: Split serial numbers across multiple lines; changed Serial Number field type to Long Text (Staging)/Text Area (IF line)
**/
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

    //Field Config
    var FLDCONFIG_RECTYPE = 'customrecord_appf_config_field';
    var FLDCONFIG_FLD_FLOWNAME = 'custrecord_appf_field_flowname';
    var FLDCONFIG_FLD_ENDPOINT = 'custrecord_appf_field_endpoint';
    var FLDCONFIG_FLD_NETSUITE = 'custrecord_appf_field_ns';
    var FLDCONFIG_FLD_STAGING = 'custrecord_appf_field_staging';
    var FLDCONFIG_FLD_ISARRAY = 'custrecord_appf_field_isarray';
    var FLDCONFIG_FLD_ISITEM = 'custrecord_appf_field_isitem';
    var FLDCONFIG_FLD_ITEMFLDLOOKUP = 'custrecord_appf_field_itemfldlookup';
    var ITEM_W2G_NAME = 'custitem_w2gitemname';

    //Inbound Transaction
    var INBOUND_RECTYPE = 'customrecord_appf_intgr_inbound_trans';
    var INBOUND_FLD_FLOW = 'custrecord_appf_inb_trans_flow';
    var INBOUND_FLD_REFERENCENUM = 'custrecord_appf_inb_trans_refid';
    var INBOUND_FLD_CLIENT = 'custrecord_appf_inb_trans_client';
    var INBOUND_FLD_STATUS = 'custrecord_appf_inb_trans_status';
    var INBOUND_FLD_CURRENCY = 'custrecord_appf_inb_trans_currency';
    var INBOUND_FLD_DATE = 'custrecord_appf_inb_trans_date';
    var INBOUND_FLD_ITEM = 'custrecord_appf_inb_trans_item';
    var INBOUND_FLD_MEMO = 'custrecord_appf_inb_trans_memo';
    var INBOUND_FLD_TERMS = 'custrecord_appf_inb_trans_terms';
    var INBOUND_FLD_SHIPADDR1 = 'custrecord_appf_inb_trans_shipaddr1';
    var INBOUND_FLD_SHIPADDR2 = 'custrecord_appf_inb_trans_shipaddr2';
    var INBOUND_FLD_SHIPCITY = 'custrecord_appf_inb_trans_shipaddrcity';
    var INBOUND_FLD_SHIPCOUNTRY = 'custrecord_appf_inb_trans_shipaddrcntry';
    var INBOUND_FLD_SHIPZIP = 'custrecord_appf_inb_trans_shipaddrzip';
    var INBOUND_FLD_SHIPSTATE = 'custrecord_appf_inb_trans_shipaddrstate';
    var INBOUND_FLD_BILLADDR1 = 'custrecord_appf_inb_trans_billaddr';
    var INBOUND_FLD_BILLADDR2 = 'custrecord_appf_inb_trans_billaddr2';
    var INBOUND_FLD_BILLCITY = 'custrecord_appf_inb_trans_billaddrcity';
    var INBOUND_FLD_BILLCOUNTRY = 'custrecord_appf_inb_trans_billaddrctry';
    var INBOUND_FLD_BILLZIP = 'custrecord_appf_inb_trans_billaddrzip';
    var INBOUND_FLD_BILLSTATE = 'custrecord_appf_inb_trans_billaddrstate';
    var INBOUND_FLD_QUANTITY = 'custrecord_appf_inb_trans_quantity';
    var INBOUND_FLD_RATE = 'custrecord_appf_inb_trans_rate';
    var INBOUND_FLD_PROCESSINGSTATUS = 'custrecord_appf_inb_trans_processingstat';
    var INBOUND_FLD_PROCESSLOG = 'custrecord_appf_inb_trans_processinglog';
    var INBOUND_FLD_SOURCETRANSACTION = 'custrecord_appf_inb_trans_source';
    var INBOUND_FLD_TRACKINGNUMBER = 'custrecord_appf_inb_trans_tracking';
    var INBOUND_FLD_TRANSACTIONLINEID = 'custrecord_appf_inb_trans_line_id';
    var INBOUND_FLD_PACKAGEWEIGHT = 'custrecord_appf_inb_packageweight';
    var INBOUND_FLD_SERIALNUMBER = 'custrecord_appf_inb_serialnum';
    var INBOUND_FLD_SALESORDERNUMBER = 'custrecord_appf_inb_trans_sonumber';
    var INBOUND_FLD_PURCHASEORDERNUMBER = 'custrecord_appf_inb_trans_ponumber';

    var SPARAM_SAVEDSEARCH = 'custscript_appf_sparam_intlogsavedsearch';
    var SPARAM_INBOUNDFLOW_WARETOGO = 'custscript_appf_sparam_inflow_ware2go';
    var SPARAM_INBOUNDFLOW_SUPERIOR = 'custscript_appf_sparam_inflow_superior';
    var SPARAM_INBOUNDFLOW_SUPERIORNV = 'custscript_appf_sparam_inflow_superiornv';
    var SPARAM_INBOUNDFLOW_SUPERIORNASHVILLE = 'custscript_appf_sparam_inflow_superiorna';
    var SPARAM_INBOUNDFLOW_SUPERIORCA = 'custscript_appf_sparam_inflow_superiorca';
    var SPARAM_INBOUNDFLOW_AIT = 'custscript_appf_sparam_inflow_ait';
    var SPARAM_INBOUNDFLOW_RHENUS = 'custscript_appf_sparam_inflow_rhenus';

    //Calback Scheduled Script
    var SPARAM_CALLBACK_SCRIPT = 'custscript_appf_sparam_callbackscript';
    var SPARAM_CALLBACK_DEPLOY = 'custscript_appf_sparam_callbackdeploy';
    
    var scriptContext = nlapiGetContext();
    var AIT_FLOW_ID = scriptContext.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_AIT);
}

function schedule_integrationToStaging(type) {
    var context = nlapiGetContext();
    var logsearch_id = context.getSetting('SCRIPT', SPARAM_SAVEDSEARCH);

    //Mapping
    var ware2go_id = context.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_WARETOGO);
    var superior_id = context.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_SUPERIOR);
    var superiornv_id = context.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_SUPERIORNV);
    var superiornashville_id = context.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_SUPERIORNASHVILLE);
    var superiorca_id = context.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_SUPERIORCA);
    var ait_id = context.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_AIT);
    var rhenus_id = context.getSetting('SCRIPT', SPARAM_INBOUNDFLOW_RHENUS);
    
    var mapping_ware2go = getFlowMapping(ware2go_id);
    var mapping_superior = getFlowMapping(superior_id);
    var mapping_superiornv = getFlowMapping(superiornv_id);
    var mapping_superiornashville = getFlowMapping(superiornashville_id);
    var mapping_superiorca = getFlowMapping(superiorca_id);
    var mapping_ait = getFlowMapping(ait_id);
    var mapping_rhenus = getFlowMapping(rhenus_id);

    if (!isNullOrEmpty(logsearch_id)) {
        var logsearch_resultset = nlapiLoadSearch(null, logsearch_id).runSearch();
        logsearch_resultset.forEachResult(function(result) {
            var _id = result.getId();
            nlapiLogExecution('debug', '_id', _id);

            var _response = result.getValue(INTEGLOG_FLD_RESPONSEMESSAGE);
            var _flow = result.getValue(INTEGLOG_FLD_FLOWNAME);

            try {
                _response = JSON.parse(_response);
                nlapiLogExecution('debug', '_response', JSON.stringify(_response));
                // var staging_rec = nlapiCreateRecord(INBOUND_RECTYPE);
                // staging_rec.setFieldValue(INBOUND_FLD_FLOW, _flow);
                //
                // Ware2Go
                //
                var resp, staging_recs = [], line_ids = [];
                nlapiLogExecution("debug",  "_flow",  _flow);
                if (_flow == ware2go_id) {
                    // 1.4
                    resp = createStagingRecords(_response, mapping_ware2go, ware2go_id);
                    
                    if (resp.staging_rec) {
                        staging_recs.push(resp.staging_rec);
                    }
                    
                    if (resp.line_id) {
                        line_ids.push(resp.line_id);
                    }

                    /* var staging_rec = nlapiCreateRecord(INBOUND_RECTYPE);
                    staging_rec.setFieldValue(INBOUND_FLD_FLOW, _flow);
                    
                    for (var key in mapping_ware2go) {
                        var endpoint_id = mapping_ware2go[key];
                        var staging_id = key;
                        var staging_value = null;

                        if (endpoint_id.isItem && !isNullOrEmpty(endpoint_id.itemFieldLookup)) {
                            staging_value = dig(_response, endpoint_id.name);
                            nlapiLogExecution('DEBUG', 'Item Search Name:', staging_value);
                            staging_value = searchItem(staging_value, endpoint_id.itemFieldLookup);
                            nlapiLogExecution('DEBUG', 'Item Search ID:', staging_value);
                        }
                        else if (endpoint_id.isArray && endpoint_id.name.indexOf(':') > 0) {
                            var endpoint_ids = endpoint_id.name.split(':');
                            var values_in_arr = extractFromObj(_response, endpoint_ids[0], endpoint_ids[1]);
                            staging_value = values_in_arr ? values_in_arr.join(',') : '';
                        }
                        else {
                            staging_value = dig(_response, endpoint_id.name);
                        }

                        nlapiLogExecution('DEBUG', staging_id, staging_value);

                        var fld = staging_rec.getField(staging_id);
                        //nlapiLogExecution('DEBUG', staging_id, fld.getType());
                        if (fld.getType() == 'select' && typeof(staging_value) == 'string') {
                            staging_rec.setFieldText(staging_id, staging_value);
                        }
                        else {
                            staging_rec.setFieldValue(staging_id, staging_value);
                        }
                    } */
                    // 1.4
                }
                //
                // Superior
                //
                else if (_flow == superior_id || _flow == superiornv_id || _flow == superiornashville_id  || _flow == superiorca_id) {
                    // 1.4
                    var lineDetails = _response.BusinessTransactionResponse.ASNResponse.LineDetails;
                    
                    // We use the MN mapping as the default
                    var _flow_id = superior_id;
                    var _map = mapping_superior;
                    
                    if (_flow == superiornv_id) {
                        _flow_id = superiornv_id;
                        _map = mapping_superiornv;
                    }
                    if (_flow == superiornashville_id) {
                        _flow_id = superiornashville_id;
                        _map = mapping_superiornashville;
                    }
                    if (_flow == superiorca_id) {
                        _flow_id = superiorca_id
                        _map = mapping_superiorca;
                    }
                    
                    nlapiLogExecution("debug", "_flow_id", _flow_id);
                    nlapiLogExecution("debug", "_map", _map)
                    if (isThisAnArray(lineDetails)) {
                        nlapiLogExecution('debug', 'lineDetails', lineDetails.length);
                        
                        // var resp, staging_recs = [], line_ids = ;
                        for (var i=0, n=lineDetails.length; i<n; i++) {
                            resp = createStagingRecords(_response, _map, _flow_id, i);
                            nlapiLogExecution('DEBUG', 'createStagingRecords response', JSON.stringify(resp));
                            if (resp.staging_rec) {
                                staging_recs.push(resp.staging_rec);
                            }
                            
                            if (resp.line_id) {
                                line_ids.push(resp.line_id);
                            }
                            /* staging_rec = nlapiCreateRecord(INBOUND_RECTYPE);
                            staging_rec.setFieldValue(INBOUND_FLD_FLOW, _flow);
                            
                            for (var key in mapping_superior) {
                                var endpoint_id = mapping_superior[key];
                                var staging_id = key;
                                var staging_value = null;

                                if (endpoint_id.isItem && !isNullOrEmpty(endpoint_id.itemFieldLookup)) {
                                    staging_value = dig(_response, endpoint_id.name);
                                    nlapiLogExecution('DEBUG', 'Item Search Name:', staging_value);
                                    staging_value = searchItem(staging_value, endpoint_id.itemFieldLookup);
                                    nlapiLogExecution('DEBUG', 'Item Search ID:', staging_value);
                                }
                                else if (endpoint_id.isArray && endpoint_id.name.indexOf(':') > 0) {
                                    var endpoint_ids = endpoint_id.name.split(':');
                                    var values_in_arr = extractFromObj(_response, endpoint_ids[0], endpoint_ids[1]);
                                    staging_value = values_in_arr ? values_in_arr.join(',') : '';
                                }
                                else {
                                    staging_value = dig(_response, endpoint_id.name);
                                }

                                nlapiLogExecution('DEBUG', staging_id, staging_value);

                                var fld = staging_rec.getField(staging_id);
                                //nlapiLogExecution('DEBUG', staging_id, fld.getType());
                                if (fld.getType() == 'select' && typeof(staging_value) == 'string') {
                                    staging_rec.setFieldText(staging_id, staging_value);
                                }
                                else {
                                    staging_rec.setFieldValue(staging_id, staging_value);
                                }
                            }
                            
                            ref_number = staging_rec.getFieldValue(INBOUND_FLD_REFERENCENUM); */
                        }
                    }
                    else {
                        resp = createStagingRecords(_response, _map, _flow_id);
                        
                        if (resp.staging_rec) {
                            staging_recs.push(resp.staging_rec);
                        }
                        
                        if (resp.line_id) {
                            line_ids.push(resp.line_id);
                        }
                    }
                    // 1.4
                }
              
              
              
              
              // AIT
              else if (_flow == ait_id || _flow == rhenus_id) {
                    var mapping = _flow == ait_id ? mapping_ait : mapping_rhenus;
                    nlapiLogExecution('AUDIT', 'mapping', mapping)
                    resp = createStagingRecords(_response, mapping, _flow);
                    
                    if (resp.staging_rec) {
                        staging_recs.push(resp.staging_rec);
                    }
                    
                    if (resp.line_id) {
                        line_ids.push(resp.line_id);
                    }
              }
              

                // 1.4
                /* var ref_number = staging_rec.getFieldValue(INBOUND_FLD_REFERENCENUM);
                var line_id = null;
                var transaction_id = null;
                if (!isNullOrEmpty(ref_number)) {
                    var transaction_info = searchTransactionLine(ref_number);
                    if (transaction_info) {
                        staging_rec.setFieldValue(INBOUND_FLD_SOURCETRANSACTION, transaction_info.id);
                        staging_rec.setFieldValue(INBOUND_FLD_TRANSACTIONLINEID, transaction_info.line_id);

                        transaction_id = transaction_info.id;
                        line_id = transaction_info.line_id;
                    }
                }

                /// v1.3
                var salesorder_num = staging_rec.getFieldValue(INBOUND_FLD_SALESORDERNUMBER);
                var purchaseorder_num = staging_rec.getFieldValue(INBOUND_FLD_PURCHASEORDERNUMBER);
                if (isNullOrEmpty(transaction_id) && (!isNullOrEmpty(salesorder_num) || !isNullOrEmpty(purchaseorder_num))) {
                    transaction_id = searchTransactionLineByOrderNum(salesorder_num, purchaseorder_num);
                    staging_rec.setFieldValue(INBOUND_FLD_SOURCETRANSACTION, transaction_id);
                }


                var staging_rec_id = nlapiSubmitRecord(staging_rec, false, true);
                nlapiLogExecution('DEBUG', 'Inbound Transaction', staging_rec_id);
                */
                // 1.4
                //Backlink
                nlapiLogExecution('DEBUG', 'Backlinking to ' + INTEGLOG_RECTYPE + ', id = ' +  _id, JSON.stringify([INTEGLOG_FLD_INBOUNDTRANS, INTEGLOG_FLD_SCRIPTPROCESSSTATUS]) + ', values = ' + JSON.stringify([staging_recs, 'SUCCESS']));
                nlapiLogExecution('DEBUG', 'line_ids', JSON.stringify(line_ids));
                
                nlapiSubmitField(INTEGLOG_RECTYPE, _id,
                    // [INTEGLOG_FLD_INBOUNDTRANS, INTEGLOG_FLD_SCRIPTPROCESSSTATUS],
                    [INTEGLOG_FLD_INBOUNDTRANS, INTEGLOG_FLD_SCRIPTPROCESSSTATUS, INTEGLOG_FLD_TRANSLINEID],
                    // [staging_recs, 'SUCCESS', line_ids]);
                    // [staging_recs, 'SUCCESS']);
                    [staging_recs, 'SUCCESS', line_ids]);
            }
            catch (err) {
                nlapiLogExecution('DEBUG', 'Error' + err.name, err.message);
                nlapiSubmitField(INTEGLOG_RECTYPE, _id, [INTEGLOG_FLD_SCRIPTPROCESSSTATUS], ['FAIL']);
            }

            //nlapiLogExecution('DEBUG', 'Log Id', _id);
            //nlapiLogExecution('DEBUG', 'Log Response', _response);
            //nlapiLogExecution('DEBUG', 'Flow', _flow);
            var context = nlapiGetContext();
            // Reschedule when usage is about to consume
            if (context.getRemainingUsage() < 2000) {
                // ISSUE: Script stops with FAILED status because yielding only works for Scheduled deployments
                // FIX: Replace nlapiYieldScript with nlapiScheduleScript()
                // nlapiYieldScript();
                nlapiScheduleScript(context.getScriptId(), nlapiGetContext().getDeploymentId());
                return false;
            }
            if (context.getRemainingUsage() == 2000) {
                // ISSUE: Script stops with FAILED status because yielding only works for Scheduled deployments
                // FIX: Replace nlapiYieldScript with nlapiScheduleScript()
                // nlapiYieldScript();
                nlapiScheduleScript(context.getScriptId(), nlapiGetContext().getDeploymentId());
                return false;
            }

            return true;
        });

        //Callback Scheduled Script
        var callback_script = context.getSetting('SCRIPT', SPARAM_CALLBACK_SCRIPT);
        var callback_deploy = context.getSetting('SCRIPT', SPARAM_CALLBACK_DEPLOY);
        if (!isNullOrEmpty(callback_script) && !isNullOrEmpty(callback_deploy)) {
            nlapiScheduleScript(callback_script, callback_deploy);
        }
    }
}

// 1.4
function createStagingRecords(response, mapping, flow, line) {
    var resp = {};
    var staging_rec = nlapiCreateRecord(INBOUND_RECTYPE);
    staging_rec.setFieldValue(INBOUND_FLD_FLOW, flow);
    
    var LOG_TITLE = 'createStagingRecords';
    nlapiLogExecution('DEBUG', LOG_TITLE, ' *** START ***');
    nlapiLogExecution('DEBUG', 'Flow :', flow);
    
    for (var key in mapping) {
        var endpoint_id = mapping[key];
        var staging_id = key;
        var staging_value = null;

        nlapiLogExecution('DEBUG', LOG_TITLE + ': ' + staging_id,
            'isItem = ' + endpoint_id.isItem +
            ', itemFieldLookup = ' + endpoint_id.itemFieldLookup +
            ', line = ' + line +
            ', endpoint_id.name = ' + endpoint_id.name +
            ', endpoint_id.isArray = ' + endpoint_id.isArray +
            ', endpoint_id.name = ' + endpoint_id.name
        );
            
        if (endpoint_id.isItem && !isNullOrEmpty(endpoint_id.itemFieldLookup)) {
            if (line != null && line != undefined) {
                staging_value = dig(response, endpoint_id.name, line);
            }
            else {
                staging_value = dig(response, endpoint_id.name);
            }
            nlapiLogExecution('DEBUG', 'Item Search Name:', staging_value);
            
            // FIX: W2G issue of removing spaces from item names - mostly affecting TARAH PRO shipments
            if (staging_value.indexOf('TARAHPRO') >= 0) {
                staging_value = searchItem(staging_value, ITEM_W2G_NAME);
            }
            else {
                staging_value = searchItem(staging_value, endpoint_id.itemFieldLookup);
            }
            nlapiLogExecution('DEBUG', 'Item Search ID:', staging_value);
        }
        else if (endpoint_id.isArray && endpoint_id.name.indexOf(':') > 0) {
            var endpoint_ids = endpoint_id.name.split(':');
            var values_in_arr = extractFromObj(response, endpoint_ids[0], endpoint_ids[1]);
            staging_value = values_in_arr ? values_in_arr.join(',') : '';
        }
        else {
            if (line != null && line != undefined) {
            //  if (staging_id == INBOUND_FLD_TRACKINGNUMBER || staging_id == INBOUND_FLD_QUANTITY || staging_id == INBOUND_FLD_PACKAGEWEIGHT) {
              if (staging_id == INBOUND_FLD_TRACKINGNUMBER) {
                staging_value = dig(response, endpoint_id.name, 0);
              }
              else {
                staging_value = dig(response, endpoint_id.name, line);
              }
            }
            else {
                staging_value = dig(response, endpoint_id.name);
            }
            // staging_value = dig(response, endpoint_id.name, line);
        }

        nlapiLogExecution('DEBUG', staging_id, staging_value);

        var fld = staging_rec.getField(staging_id);
        //nlapiLogExecution('DEBUG', staging_id, fld.getType());
        
        if (fld.getType() == 'date') {
            nlapiLogExecution('DEBUG', LOG_TITLE + ': ' + staging_id, 'Setting text: ' + staging_id + ' = ' + staging_value);
            staging_value = staging_value.toString().split(' ')[0];
            nlapiLogExecution('DEBUG', '##staging_value = ', staging_value);
            staging_rec.setFieldValue(staging_id, staging_value);
        }
        else if (fld.getType() == 'select' && typeof(staging_value) == 'string') {
            nlapiLogExecution('DEBUG', LOG_TITLE + ': ' + staging_id, 'Setting text: ' + staging_id + ' = ' + staging_value);
            staging_rec.setFieldText(staging_id, staging_value);
        }
        else {
            // 1.5 START
            var arrVal = staging_value.toString().split('\u0005');
            if (arrVal.length > 1) {
                nlapiLogExecution('DEBUG', LOG_TITLE + ': ' + staging_id, 'Setting array: ' + staging_id + ' = ' + arrVal.join('\n'));
                staging_rec.setFieldValue(staging_id, arrVal.join('\n'));
            }
            else {
                nlapiLogExecution('DEBUG', LOG_TITLE + ': ' + staging_id, 'Setting value: ' + staging_id + ' = ' + staging_value);
                staging_rec.setFieldValue(staging_id, staging_value);
            }
            // 1.5 END
        }
    }
    
    // var ref_number = staging_rec.getFieldValue(INBOUND_FLD_REFERENCENUM);
    var ref_number = staging_rec.getFieldValue(INBOUND_FLD_REFERENCENUM);
    var line_id = null;
    var transaction_id = null;
    if (!isNullOrEmpty(ref_number)) {
        var transaction_info = searchTransactionLine(ref_number);
        if (transaction_info) {
            staging_rec.setFieldValue(INBOUND_FLD_SOURCETRANSACTION, transaction_info.id);
            staging_rec.setFieldValue(INBOUND_FLD_TRANSACTIONLINEID, transaction_info.line_id);

            transaction_id = transaction_info.id;
            line_id = transaction_info.line_id;
        }
    }

    /// v1.3
    var salesorder_num = staging_rec.getFieldValue(INBOUND_FLD_SALESORDERNUMBER);
    var purchaseorder_num = flow != AIT_FLOW_ID ? staging_rec.getFieldValue(INBOUND_FLD_PURCHASEORDERNUMBER) : null;
    if (isNullOrEmpty(transaction_id) && (!isNullOrEmpty(salesorder_num) || !isNullOrEmpty(purchaseorder_num))) {
        transaction_id = searchTransactionLineByOrderNum(salesorder_num, purchaseorder_num);
        staging_rec.setFieldValue(INBOUND_FLD_SOURCETRANSACTION, transaction_id);
    }

    var staging_rec_id = nlapiSubmitRecord(staging_rec, false, true);
    nlapiLogExecution('DEBUG', 'Inbound Transaction', staging_rec_id);
    
    nlapiLogExecution('DEBUG', 'createStagingRecords', ' *** END ***');
    
    return {
        staging_rec: staging_rec_id,
        line_id: line_id
    };
}
// 1.4

function searchItem(search_key, item_field) {
    var rs = nlapiSearchRecord('item', null,
                [
                    new nlobjSearchFilter(item_field, null, 'startswith', search_key)
                ], []) || [];
    if (rs.length > 0) {
        return parseInt(rs[0].getId());
    }
    return null;
}

function searchTransactionLineByOrderNum(salesorder_num, purchaseorder_num) {
    var subfilters = [];
    if (!isNullOrEmpty(salesorder_num)) {
        subfilters.push(['formulatext: {tranid}', 'is', salesorder_num]);
        subfilters.push('OR');
        subfilters.push(['formulatext: {otherrefnum}', 'is', salesorder_num]);
    }
    if (!isNullOrEmpty(purchaseorder_num)) {
        if (subfilters.length > 0) {
            subfilters.push('OR');
        }
        subfilters.push(['formulatext: {tranid}', 'is', purchaseorder_num]);
        subfilters.push('OR');
        subfilters.push(['formulatext: {otherrefnum}', 'is', purchaseorder_num]);
    }
    var rs = nlapiSearchRecord('salesorder', null,
                [
                    ['mainline', 'is', 'T'], 'AND',
                    [
                        subfilters
                    ]
                ],
                []) || [];
    if (rs.length > 0) {
        return rs[0].getId();
    }
    return null;
}

function searchTransactionLine(ref_number) {
    var rs = nlapiSearchRecord('salesorder', null,
                [
                    new nlobjSearchFilter('mainline', null, 'is', 'F'),
                    new nlobjSearchFilter('idtext', 'custcol_appf_tran_line_id', 'is', ref_number),
                ],
                [
                    new nlobjSearchColumn('custcol_appf_tran_line_id'),
                ]) || [];
    if (rs.length > 0) {
        return {
            id: rs[0].getId(),
            line_id: rs[0].getValue('custcol_appf_tran_line_id')
        };
    }
    return null;
}

function getFlowMapping(flow_id) {
    var mapping = {};
    if (!isNullOrEmpty(flow_id)) {
        var rs = nlapiSearchRecord(FLDCONFIG_RECTYPE, null,
                [
                    new nlobjSearchFilter(FLDCONFIG_FLD_FLOWNAME, null, 'is', flow_id),
                    new nlobjSearchFilter('isinactive', null, 'is', 'F')
                ],
                [
                    new nlobjSearchColumn(FLDCONFIG_FLD_STAGING),
                    new nlobjSearchColumn(FLDCONFIG_FLD_ENDPOINT),
                    new nlobjSearchColumn(FLDCONFIG_FLD_ISARRAY),
                    new nlobjSearchColumn(FLDCONFIG_FLD_ISITEM),
                    new nlobjSearchColumn(FLDCONFIG_FLD_ITEMFLDLOOKUP)
                    //new nlobjSearchColumn(FLDCONFIG_FLD_NETSUITE),
                ]) || [];
        for (var i=0; i<rs.length; i++) {
            var _this = rs[i];
            /// v1.1
            //mapping[_this.getValue(FLDCONFIG_FLD_STAGING)] = _this.getValue(FLDCONFIG_FLD_ENDPOINT);
            mapping[_this.getValue(FLDCONFIG_FLD_STAGING)] = {
                name: _this.getValue(FLDCONFIG_FLD_ENDPOINT),
                isArray: _this.getValue(FLDCONFIG_FLD_ISARRAY) == 'T',
                isItem: _this.getValue(FLDCONFIG_FLD_ISITEM) == 'T',
                itemFieldLookup: _this.getValue(FLDCONFIG_FLD_ITEMFLDLOOKUP)
            };
        }
    }
    return mapping;
}

function extractFromObj(obj, parent_key, keys) {
    //Return null when not an object, no parent key or child key
    if (!obj || isNullOrEmpty(parent_key) || isNullOrEmpty(keys)) {
        return null;
    }
    //Return null when Parent key is an empty array
    var key_count = obj[parent_key].length;
    if (key_count.length == 0) {
        return null;
    }
    obj = obj[parent_key];
    keys = keys.split('.');
    var key_index = 0;
    var values = [];

    for (var key_index=0; key_index<key_count; key_index++) {
        var item = obj[key_index];
        for (var i=0;i<keys.length;i++) {
            item = item[keys[i]];
        }
        values.push(item);
    }
    return values;
}

// function dig(list_obj, keyids) {
function dig(list_obj, keyids, index) {
    keyids = keyids.split('.');
    var value = '';
    var list_clone = JSON.parse(JSON.stringify(list_obj));
    for (var i=0; i<keyids.length; i++) {
        var _id = keyids[i];
        value = list_clone[_id];
        if ((list_clone[_id] instanceof Array) && (list_clone[_id].length > 0)) {
            //get the first element only
            // list_clone = list_clone[_id][0];
            
            if (index != null && index != undefined) {
                list_clone = list_clone[_id][index];
            }
            else {
                list_clone = list_clone[_id][0];
            }
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

function isThisAnArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}


function isNullOrEmpty(data) {
    return (data == null || data == '');
}