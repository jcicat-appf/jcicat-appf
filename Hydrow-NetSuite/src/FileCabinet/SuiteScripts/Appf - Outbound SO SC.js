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

    //Connection Configurator
    var CONCONFIG_RECTYPE = 'customrecord_appf_config_connector';
    var CONCONFIG_FLD_NAME = 'name';
    var CONCONFIG_FLD_SYSTEM = 'custrecord_appf_conn_system';
    var CONCONFIG_FLD_ACCESSTOKEN = 'custrecord_appf_conn_access_token';
    var CONCONFIG_FLD_SECRETKEY = 'custrecord_appf_conn_secret_key';
    var CONCONFIG_FLD_API = 'custrecord_appf_conn_api';

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
    var FLDCONFIG_FLD_ISINTEGER = 'custrecord_appf_field_isinteger';
    var FLDCONFIG_FLD_UPDATEONOUTBOUND = 'custrecord_appf_field_updateonoutbound';
    var FLDCONFIG_FLD_LOOKUPTYPE = 'custrecord_appf_field_lookup_rectype';
    var FLDCONFIG_FLD_LOOKUPFLD = 'custrecord_appf_field_lookup_recfld';
    
    // ETL Mapping Record
    var ETLMAP_RECTYPE = 'customrecord_appf_etl_mapping';
    var ETLMAP_FLD_SOSHIPMETHOD = 'custrecord_appf_shipping_method';
    var ETLMAP_FLD_AITCODE = 'custrecord_appf_ait_code';
    var ETLMAP_FLD_ITEMTYPE = 'custrecord_appf_order_item_type';
    var ETLMAP_FLD_IFSHIPMETHOD = 'custrecord_appf_if_ship_method';
    
    // Item Type List
    var LIST_ITEMTYPE = 'customlist_appf_item_type';
    
    // Shipping Methods
    /* var SM_WHITEGLOVE = '248';
    var SM_STANDARD = '245';
    var SM_ROOMOFCHOICE = '815';
    var SM_LTL = '240';
    var SM_CUSTPICKUP = '190';
    var SM_CUSTROUTED = '191';
    var SM_UPS2DAY = '765';
    var SM_UPSNEXTDAY = '109'; */
    
    //Call Method
    // var CALLMETHOD_RECTYPE = 'customlist227';
    var CALLMETHOD_RECTYPE = 'customlist_appf_conf_call_method';

    //Country Code
    var COUNTRYCODE_RECTYPE = 'customrecord_appf_country_codes';
    var COUNTRYCODE_FLD_NAME = 'name';
    var COUNTRYCODE_FLD_2DIGITCODE = 'custrecord_appf_cc_2digitcode';
    var COUNTRYCODE_FLD_3DIGITCODE = 'custrecord_appf_cc_3digitcode';

    //Transaction Field
    var TRANS_FLD_INTEGRATIONSTATUS = 'custbody_appf_integration_release';
    var TRANS_LINEITEM_TRANSLINE = 'custcol_appf_tran_line_id';
    var TRANS_LINEITEM_SENDTO3PL = 'custcol_appf_3pl_send';
    var TRANS_LINEITEM_LINE = 'line'; //linesequencenumber
    var TRANS_LINEITEM_LINESEQ = 'linesequencenumber';
    var VAL_INTEGRATIONSTATUS_RELEASED = '2';
    var TRANS_LINEITEM = 'item';

    // Response Mapping
    var RESPONSEMAP_RECTYPE = 'customrecord_appf_config_response_field';
    var RESPONSEMAP_FLD_FLOWNAME = 'custrecord_appf_resfield_flowname';
    var RESPONSEMAP_FLD_ENDPOINT = 'custrecord_appf_resfield_endpoint';
    var RESPONSEMAP_FLD_NETSUITE = 'custrecord_appf_resfield_ns';

    var SPARAM_OUTBOUND_SAVEDSEARCH = 'custscript_appf_sparam_obsavedsearch';
    var SPARAM_OUTBOUND_CONCONFIG = 'custscript_appf_sparam_obconfigurator';
    var SPARAM_OUTBOUND_FLOWCONFIG = 'custscript_appf_sparam_obflowconfig';
    var SPARAM_OUTBOUND_SENDTO3PL = 'custscript_appf_sparam_obsend';

    var SPARAM_CALLBACK_SCRIPT = 'custscript_appf_sparam_obcallback_script';
    var SPARAM_CALLBACK_DEPLOY = 'custscript_appf_sparam_obcallback_deploy';

    // API RETRY LOGIC
    var SUCCESS_RESPONSE_CODES = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];
}

function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
}

function schedule_OutboundSO(type) {
    var context = nlapiGetContext();
    var outboundsearch_id = context.getSetting('SCRIPT', SPARAM_OUTBOUND_SAVEDSEARCH);
    var conconfig_id = context.getSetting('SCRIPT', SPARAM_OUTBOUND_CONCONFIG);
    var flowconfig_id = context.getSetting('SCRIPT', SPARAM_OUTBOUND_FLOWCONFIG);
    var sendto3pl = context.getSetting('SCRIPT', SPARAM_OUTBOUND_SENDTO3PL);
    nlapiLogExecution('DEBUG', 'sendto3pl', sendto3pl);

    var callback_script = context.getSetting('SCRIPT', SPARAM_CALLBACK_SCRIPT);
    var callback_deploy = context.getSetting('SCRIPT', SPARAM_CALLBACK_DEPLOY);

    var conconfig_info = nlapiLookupField(CONCONFIG_RECTYPE, conconfig_id,
        [
            CONCONFIG_FLD_NAME, CONCONFIG_FLD_SYSTEM,
            CONCONFIG_FLD_ACCESSTOKEN, CONCONFIG_FLD_SECRETKEY,
            CONCONFIG_FLD_API
        ]);

    var flowconfig_info = nlapiLookupField(FLOWCONFIG_RECTYPE, flowconfig_id,
        [
            FLOWCONFIG_FLD_ENDPOINT, FLOWCONFIG_FLD_CALLMETHOD,
            FLOWCONFIG_FLD_ORDERINFO_ENDPOINT, FLOWCONFIG_FLD_SAMPLESTRUCTURE
        ]);

    if (conconfig_info) {
        var call_method__name = nlapiLookupField(CALLMETHOD_RECTYPE, flowconfig_info[FLOWCONFIG_FLD_CALLMETHOD], 'name');
        var mapping = getFlowMapping(flowconfig_id);
        var etlmap = getETLMapping();
        var itemtypes = getItemTypes();
        var response_mapping = getResponseMapping(flowconfig_id);
        
        // return;
        //
        //  Ware2Go
        //
        if (conconfig_info[CONCONFIG_FLD_SYSTEM] == 'Ware2Go') {
            if (!isNullOrEmpty(outboundsearch_id)) {
                var outboundsearch_resultset = nlapiLoadSearch(null, outboundsearch_id).runSearch();
                var authorization_code = Base64.encode(conconfig_info[CONCONFIG_FLD_ACCESSTOKEN] + ':' + conconfig_info[CONCONFIG_FLD_SECRETKEY]);

                //outboundsearch_resultset.forEachResult(function(result) {

                var searchResultCount = 0;
                var resultSlice = null;
                var searchResult = [];

                do {
                    resultSlice = outboundsearch_resultset.getResults(searchResultCount,
                            searchResultCount + 1000);

                    if (resultSlice) {

                        resultSlice.forEach(function(result) {

                            searchResult.push(result);
                            searchResultCount++;
                        });
                    }
                } while (isArrayNotEmpty(resultSlice) && resultSlice.length >= 1000);
                nlapiLogExecution('DEBUG', 'searchResult =', searchResult.length);
                nlapiLogExecution('DEBUG', 'Result', JSON.stringify(result));
                for(var i = 0 ; i<searchResult.length ; i++)
                {
                    var result = searchResult[i];
                    var transaction_lineid = result.getValue(TRANS_LINEITEM_TRANSLINE);
                    var transaction_line = result.getValue(TRANS_LINEITEM_LINESEQ) || 1;
                    var outbound_request = reconstructJSONRequest(flowconfig_info[FLOWCONFIG_FLD_SAMPLESTRUCTURE], result.getRecordType(), result.getId(), transaction_line, mapping);
                    nlapiLogExecution('DEBUG', 'Ware2Go Outbound Request', JSON.stringify(outbound_request));

                    if (sendto3pl != 'T') {
                        nlapiLogExecution('DEBUG', 'Exiting...', 'Send to 3PL == FALSE');
                        return true;
                    }
                    
                    var log_record = nlapiCreateRecord(INTEGLOG_RECTYPE, {recordmode: 'dynamic'});
                    log_record.setFieldValue(INTEGLOG_FLD_FLOWNAME, flowconfig_id);
                    log_record.setFieldValue(INTEGLOG_FLD_REQUESTDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                    log_record.setFieldValue(INTEGLOG_FLD_MESSAGE, JSON.stringify(outbound_request));
                    log_record.setFieldValue(INTEGLOG_FLD_LINKEDTRANS, result.getId());
                    log_record.setFieldValue(INTEGLOG_FLD_TRANSLINEID, transaction_lineid);

                    var order_response = nlapiRequestURL(flowconfig_info[FLOWCONFIG_FLD_ENDPOINT], JSON.stringify(outbound_request), {
                        'Authorization': 'Basic '+ authorization_code,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }, call_method__name);
                    nlapiLogExecution('DEBUG', 'Outbound Response', JSON.stringify(order_response.getBody()));

                    log_record.setFieldValue(INTEGLOG_FLD_RESPONSEDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                    log_record.setFieldValue(INTEGLOG_FLD_INTEGLOGSTATUS, 'SUCCESS');
                    var script_status = 'FAIL';

                    if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1 ) {
                        var order_response_json = JSON.parse(order_response.getBody());
                        if (order_response_json && order_response_json.purchaseOrderNumber) {
                            script_status = 'SUCCESS';
                        }
                    }

                    //RETRY: If Response Code is not any of 2XX
                    if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) == -1) {
                        var retryCount = 1;

                        while(retryCount <= 5){
                            nlapiLogExecution("DEBUG", "Retrying...", retryCount);
                            wait(60000*fibonacci(retryCount));
                            var order_response;

                            var order_response = nlapiRequestURL(flowconfig_info[FLOWCONFIG_FLD_ENDPOINT], JSON.stringify(outbound_request), {
                                'Authorization': 'Basic '+ authorization_code,
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            }, call_method__name);
                       
                            if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {
                                
                                nlapiLogExecution("DEBUG", "RESPONSE - STRINGIFY", JSON.stringify(order_response));
                                var order_response_json = JSON.parse(order_response.getBody());
                                if (order_response_json && order_response_json.purchaseOrderNumber) {
                                    script_status = 'SUCCESS';
                                }
                                break;
                            }
                            nlapiLogExecution("DEBUG", "order_response code inside", order_response.getCode());
                            retryCount++;
                        }
                        nlapiLogExecution("DEBUG", "End of retry", retryCount);
                    }
                    /*if (order_response.getCode() == 200) {
                        log_record.setFieldValue(INTEGLOG_FLD_SCRIPTPROCESSSTATUS, 'SUCCESS');
                    }
                    else {
                        log_record.setFieldValue(INTEGLOG_FLD_SCRIPTPROCESSSTATUS, 'FAIL');
                    }*/

                    log_record.setFieldValue(INTEGLOG_FLD_SCRIPTPROCESSSTATUS, script_status);
                    log_record.setFieldValue(INTEGLOG_FLD_RESPONSEMESSAGE, order_response.getBody());
                    log_record.setFieldValue(INTEGLOG_FLD_INTEGSUCCESSDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                    var log_id = nlapiSubmitRecord(log_record, true, true);
                    if (log_id) {
                        nlapiLogExecution('DEBUG', 'Integration Log ID Created: ', log_id);
                        var transaction_id = result.getId();
                        var transaction_rectype = nlapiLookupField('transaction', transaction_id, 'recordtype');
                        var transaction_rec = nlapiLoadRecord(transaction_rectype, transaction_id);
                        var transaction_lineid_index = transaction_rec.findLineItemValue(TRANS_LINEITEM, TRANS_LINEITEM_TRANSLINE, transaction_lineid);
                        try {
                            if (transaction_lineid_index > 0) {
                                var response_json = JSON.parse(order_response.getBody());
                                for (var key in response_mapping) {
                                    var netsuite_field = key;
                                    var endpoint_field = response_mapping[key];
                                    var endpoint_value = dig(response_json, endpoint_field.name);

                                    if (key.indexOf('.') > 0) {
                                        var keys = key.split('.');
                                        if (keys.length >= 2) {
                                            nlapiLogExecution('DEBUG', 'Setting response line field', keys[1] + ' = ' + endpoint_value);
                                            if (keys[1] == 'custcol_senttowarehouse') {
                                                endpoint_value = nlapiDateToString(new Date(endpoint_value));
                                            }
                                            transaction_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                        }
                                    }
                                    else {
                                        nlapiLogExecution('DEBUG', 'Setting response line field', keys[1] + ' = ' + endpoint_value);
                                        transaction_rec.setFieldValue(key, endpoint_value);
                                    }
                                }

                                if (nlapiSubmitRecord(transaction_rec)) {
                                    // Transaction Line Id is only made available to SO but not in Item Fmt
                                    var created_id = transaction_rec.getFieldValue('createdfrom');
                                    if (!isNullOrEmpty(created_id)) {
                                        var created_rectype = nlapiLookupField('transaction', created_id, 'recordtype');
                                        var created_rec = nlapiLoadRecord(created_rectype, created_id, {recordmode: 'dynamic'});

                                        for (var key in response_mapping) {
                                            var netsuite_field = key;
                                            var endpoint_field = response_mapping[key];
                                            var endpoint_value = dig(response_json, endpoint_field.name);

                                            if (key.indexOf('.') > 0) {
                                                var keys = key.split('.');
                                                if (keys.length >= 2) {
                                                    nlapiLogExecution('DEBUG', 'Setting response line field', keys[1] + ' = ' + endpoint_value);
                                                    if (keys[1] == 'custcol_senttowarehouse') {
                                                        endpoint_value = nlapiDateToString(new Date(endpoint_value));
                                                    }
                                                    created_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                                }
                                            }
                                            else {
                                                created_rec.setFieldValue(key, endpoint_value);
                                            }
                                        }

                                        // Save created from transaction
                                        if (nlapiSubmitRecord(created_rec)) {
                                            // Update the Integration Log as it has been backlinked successfully.
                                            nlapiSubmitField(INTEGLOG_RECTYPE, log_id, INTEGLOG_FLD_HASBACKLINKED, 'T');
                                        }
                                    }
                                }
                            }
                        }
                        catch (err) {
                            nlapiLogExecution('DEBUG', 'Unable to Backlink Outbound Response', err.name + ' : ' + err.message);
                        }
                    }

                    var context = nlapiGetContext();
                    // Reschedule when usage is about to consume
                    nlapiLogExecution('DEBUG', 'context.getRemainingUsage() = ', context.getRemainingUsage());
                    if (context.getRemainingUsage() < 1000) 
                    {
                        nlapiLogExecution('DEBUG', 'before Yield Script = ');
                        nlapiYieldScript();
                    }
                }
                    //return true;
                //});

            }
        }
        //
        //  Superior
        //
        else if (conconfig_info[CONCONFIG_FLD_SYSTEM].indexOf('Superior') >= 0) {
            if (!isNullOrEmpty(outboundsearch_id)) {
                var outboundsearch_resultset = nlapiLoadSearch(null, outboundsearch_id).runSearch();

                //outboundsearch_resultset.forEachResult(function(result) {
                var searchResultCount = 0;
                var resultSlice = null;
                var searchResult = [];

                do {
                    resultSlice = outboundsearch_resultset.getResults(searchResultCount,
                            searchResultCount + 1000);

                    if (resultSlice) {

                        resultSlice.forEach(function(result) {

                            searchResult.push(result);
                            searchResultCount++;
                        });
                    }
                } while (isArrayNotEmpty(resultSlice) && resultSlice.length >= 1000);
                nlapiLogExecution('DEBUG', 'searchResult =', searchResult.length);
                nlapiLogExecution('DEBUG', 'Result', JSON.stringify(result));
                for(var i = 0 ; i<searchResult.length ; i++)
                {
                    var result = searchResult[i];
                    var transaction_lineid = result.getValue(TRANS_LINEITEM_TRANSLINE);
                    var transaction_line = result.getValue(TRANS_LINEITEM_LINESEQ) || 1;
                    var outbound_request = reconstructXMLRequest(flowconfig_info[FLOWCONFIG_FLD_SAMPLESTRUCTURE], result.getRecordType(), result.getId(), transaction_line, mapping, etlmap, itemtypes, conconfig_info);
                    nlapiLogExecution('DEBUG', 'Superior Outbound Request', outbound_request);

                    if (sendto3pl != 'T') {
                        nlapiLogExecution('DEBUG', 'Exiting...', 'Send to 3PL == FALSE');
                        return true;
                    }

                    var log_record = nlapiCreateRecord(INTEGLOG_RECTYPE, {recordmode: 'dynamic'});
                    log_record.setFieldValue(INTEGLOG_FLD_FLOWNAME, flowconfig_id);
                    log_record.setFieldValue(INTEGLOG_FLD_REQUESTDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                    //Compress outbound_request by removing spaces and new lines
                    outbound_request = outbound_request.replace(/\r?\n|\r|\n/gm, '').replace(/[\s+|\s+$]{2,}/gm, '');
                    log_record.setFieldValue(INTEGLOG_FLD_MESSAGE, outbound_request);
                    log_record.setFieldValue(INTEGLOG_FLD_LINKEDTRANS, result.getId());
                    log_record.setFieldValue(INTEGLOG_FLD_TRANSLINEID, transaction_lineid);

                    var order_response = nlapiRequestURL(flowconfig_info[FLOWCONFIG_FLD_ENDPOINT], outbound_request, {
                        'Content-Type': 'application/xml'
                    }, call_method__name);

                    log_record.setFieldValue(INTEGLOG_FLD_RESPONSEDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                    log_record.setFieldValue(INTEGLOG_FLD_INTEGLOGSTATUS, 'SUCCESS');

                    var script_status = 'FAIL';
                    nlapiLogExecution("DEBUG", "FIRST Request Sent", order_response.getCode());
                    /*if (order_response.getCode() == 200) {
                        var order_response_json = JSON.parse(order_response.getBody());
                        if (order_response_json && order_response_json.BusinessTransactionResponse && order_response_json.BusinessTransactionResponse.OrderID) {
                            script_status = 'SUCCESS';
                        }
                    }*/
                    if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1 ) {
                        var order_response_json = JSON.parse(order_response.getBody());
                        nlapiLogExecution("DEBUG", "RESPONSE - STRINGIFY", JSON.stringify(order_response));
                        if (order_response_json && order_response_json.BusinessTransactionResponse && order_response_json.BusinessTransactionResponse.OrderID) {
                            script_status = 'SUCCESS';
                        }
                    }

                    //RETRY: If Response Code is not any of 2XX
                    if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) == -1) {
                        var retryCount = 1;

                        while(retryCount <= 5){
                            nlapiLogExecution("DEBUG", "Retrying...", retryCount);
                            wait(60000*fibonacci(retryCount));
                            var order_response;

                            order_response = nlapiRequestURL(flowconfig_info[FLOWCONFIG_FLD_ENDPOINT], outbound_request, {
                                'Content-Type': 'application/xml'
                            }, call_method__name);
                       
                            if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {
                                
                                nlapiLogExecution("DEBUG", "RESPONSE - STRINGIFY", JSON.stringify(order_response));
                                var order_response_json = JSON.parse(order_response.getBody());
                                if (order_response_json && order_response_json.BusinessTransactionResponse && order_response_json.BusinessTransactionResponse.OrderID) {
                                    script_status = 'SUCCESS';
                                }
                                break;
                            }
                            nlapiLogExecution("DEBUG", "order_response code inside", order_response.getCode());
                            retryCount++;
                        }
                        nlapiLogExecution("DEBUG", "End of retry", retryCount);
                    }

                    log_record.setFieldValue(INTEGLOG_FLD_SCRIPTPROCESSSTATUS, script_status);

                    log_record.setFieldValue(INTEGLOG_FLD_RESPONSEMESSAGE, order_response.getBody());
                    log_record.setFieldValue(INTEGLOG_FLD_INTEGSUCCESSDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                    var log_id = nlapiSubmitRecord(log_record, true, true);
                    if (log_id) {
                        nlapiLogExecution('DEBUG', 'Integration Log ID Created: ', log_id);
                        var transaction_id = result.getId();
                        var transaction_rectype = nlapiLookupField('transaction', transaction_id, 'recordtype');
                        var transaction_rec = nlapiLoadRecord(transaction_rectype, transaction_id);
                        var transaction_lineid_index = transaction_rec.findLineItemValue(TRANS_LINEITEM, TRANS_LINEITEM_TRANSLINE, transaction_lineid);
                        try {
                            if (transaction_lineid_index > 0) {
                                var response_json = JSON.parse(order_response.getBody());
                                for (var key in response_mapping) {
                                    var netsuite_field = key;
                                    var endpoint_field = response_mapping[key];
                                    var endpoint_value = dig(response_json, endpoint_field.name);

                                    if (key.indexOf('.') > 0) {
                                        var keys = key.split('.');
                                        if (keys.length >= 2) {
                                            nlapiLogExecution('DEBUG', 'Setting response line field', keys[1] + ' = ' + endpoint_value);
                                            if (keys[1] == 'custcol_senttowarehouse') {
                                                endpoint_value = nlapiDateToString(new Date());
                                            }
                                            transaction_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                        }
                                    }
                                    else {
                                        transaction_rec.setFieldValue(endpoint_value);
                                    }
                                }

                                if (nlapiSubmitRecord(transaction_rec)) {
                                    // Transaction Line Id is only made available to SO but not in Item Fmt
                                    var created_id = transaction_rec.getFieldValue('createdfrom');
                                    if (!isNullOrEmpty(created_id)) {
                                        var created_rectype = nlapiLookupField('transaction', created_id, 'recordtype');
                                        var created_rec = nlapiLoadRecord(created_rectype, created_id, {recordmode: 'dynamic'});

                                        for (var key in response_mapping) {
                                            var netsuite_field = key;
                                            var endpoint_field = response_mapping[key];
                                            var endpoint_value = dig(response_json, endpoint_field.name);

                                            if (key.indexOf('.') > 0) {
                                                var keys = key.split('.');
                                                if (keys.length >= 2) {
                                                    nlapiLogExecution('DEBUG', 'Setting response line field', keys[1] + ' = ' + endpoint_value);
                                                    if (keys[1] == 'custcol_senttowarehouse') {
                                                        endpoint_value = nlapiDateToString(new Date());
                                                    }
                                                    created_rec.setLineItemValue(keys[0], keys[1], transaction_lineid_index, endpoint_value);
                                                }
                                            }
                                            else {
                                                created_rec.setFieldValue(endpoint_value);
                                            }
                                        }

                                        // Save created from transaction
                                        if (nlapiSubmitRecord(created_rec)) {
                                            // Update the Integration Log as it has been backlinked successfully.
                                            nlapiSubmitField(INTEGLOG_RECTYPE, log_id, INTEGLOG_FLD_HASBACKLINKED, 'T');
                                        }
                                    }
                                }
                            }
                        }
                        catch (err) {
                            nlapiLogExecution('DEBUG', 'Unable to Backlink Outbound Response', err.name + ' : ' + err.message);
                        }
                    }

                    var context = nlapiGetContext();
                    // Reschedule when usage is about to consume
                    nlapiLogExecution('DEBUG', 'context.getRemainingUsage() = ', context.getRemainingUsage());
                    if (context.getRemainingUsage() < 1000) 
                    {
                        nlapiLogExecution('DEBUG', 'before Yield Script = ');
                        nlapiYieldScript();
                    }

                }    //return true;
                //});

            }
        }

        // Execute Callback Backlink
        if (!isNullOrEmpty(callback_script) && !isNullOrEmpty(callback_deploy)) {
            nlapiScheduleScript(callback_script, callback_deploy);
        }
    }
}

function wait(ms){
    nlapiLogExecution("DEBUG", "WAIT", "Waiting for " + ms/1000 + " seconds... " + new Date());
    /*var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }*/

    //setTimeout(function(){nlapiLogExecution("DEBUG", "WAIT", "Done Waiting " + new Date());}, ms)
 
        var date = new Date();
        date.setMilliseconds(date.getMilliseconds() + ms);
        while(new Date() < date){
        }
        
        nlapiLogExecution("DEBUG", "WAIT", "Done Waiting " + new Date());
}

function reconstructXMLRequest(request, record_type, record_id, line, mapping, etlmap, itemtypes, conconfig_info) {
    var request_xml = nlapiStringToXML(request);
    var record_obj = nlapiLoadRecord(record_type, record_id);
    for (var key in mapping) {
        var endpoint_field = mapping[key];
        var endpoint_value = '';
        
        nlapiLogExecution('debug', 'key', key);

        if (key.indexOf('___') > 0) {
            var keys = key.split('___');
            if (keys.length >= 2) {
                var rec_value = null;
                var rec_keys = keys[0];
                var subrec_keys = keys[1];
                if (rec_keys.indexOf('.') > 0) {
                    rec_keys = rec_keys.split('.');
                    rec_value = record_obj.getLineItemValue(rec_keys[0], rec_keys[1], line);
                }
                else {
                    rec_value = record_obj.getFieldValue(rec_keys);
                }

                if (!isNullOrEmpty(rec_value) && subrec_keys.indexOf('.') > 0) {
                    subrec_keys = subrec_keys.split('.');
                    endpoint_value = nlapiLookupField(subrec_keys[0], rec_value, subrec_keys[1], endpoint_field.isText);
                }
            }
        }
        else if (key.indexOf('.') > 0) {
            var keys = key.split('.');
            if (keys.length >= 2) {
                if (endpoint_field.isText) {
                    endpoint_value = record_obj.getLineItemText(keys[0], keys[1], line); // Get only the first line item
                }
                else if (endpoint_field.isInteger) {
                    endpoint_value = record_obj.getLineItemValue(keys[0], keys[1], line); // Get only the first line item
                    if (!isNullOrEmpty(endpoint_value)) {
                        endpoint_value = parseInt(endpoint_value);
                    }
                }
                else {
                    endpoint_value = record_obj.getLineItemValue(keys[0], keys[1], line); // Get only the first line item
                }
            }
        }
        else {
            endpoint_value = record_obj.getFieldValue(key);
            
            // FIX: Superior ETL Mapping for Shipping Methods
            nlapiLogExecution('DEBUG', 'Retrieving...', 'conn = ' + conconfig_info[CONCONFIG_FLD_SYSTEM] + ', key = ' + key + ', line = ' + line + ', val = ' + endpoint_value + ', map = ' + JSON.stringify(mapping[key]));
            if (key == 'shipmethod' && conconfig_info[CONCONFIG_FLD_SYSTEM].indexOf('Superior') >= 0) {
                nlapiLogExecution('DEBUG', 'Inside ETL Map logic', 'shipmethod = ' + mapping[key] + ', line = ' + line);
                
                // Get Item Type Internal ID from item (OPTIMIZATION CANDIDATE)
                var itemTypeId = nlapiLookupField('item', record_obj.getLineItemValue('item', 'item', line), 'custitem_appf_item_type');
                // var itemTypeText = nlapiLookupField('item', record_obj.getLineItemValue('item', 'item', line), 'custitem_appf_item_type');
                // var itemTypeText = record_obj.getLineItemText('item', 'custcol_appf_itemtype', line);
                // nlapiLogExecution('DEBUG', 'itemTypeText', itemTypeText);
                // var itemTypes = itemtypes.filter(function (x) {
                    // return x.name == itemTypeText;
                // });
                
                // var itemTypeId = -1;
                // if (itemTypes.length > 0) {
                    // itemTypeId = itemTypes[0].id;
                // }
                nlapiLogExecution('DEBUG', 'itemTypeId', itemTypeId);
                
                // Get ETL Mapping for item type and shipping method
                for (var j=0, jlen=etlmap.length; j<jlen; j++) {
                    var x = etlmap[j];
                    nlapiLogExecution('DEBUG', 'x', JSON.stringify(x));
                    if (x.soShip == endpoint_value &&
                        x.itemType == itemTypeId) {
                        endpoint_value = x.ifShipName;
                        break;
                    }
                }
                
                /* var arrETL = etlmap.filter(function (x) {
                    nlapiLogExecution('DEBUG', 'x', JSON.stringify(x));
                    return
                        x.soShip == endpoint_value.toString() &&
                        x.itemType == itemTypeId.toString();
                });
                nlapiLogExecution('DEBUG', 'arrETL', JSON.stringify(arrETL));
                
                if (arrETL.length > 0) {
                    endpoint_value = arrETL[0].fShipName;
                } */
                nlapiLogExecution('DEBUG', 'endpoint_value', endpoint_value);
            }
            else {
                if (endpoint_field.isText) {
                    endpoint_value = record_obj.getFieldText(key);
                }
                else if (endpoint_field.isInteger) {
                    if (!isNullOrEmpty(endpoint_value)) {
                        endpoint_value = parseInt(endpoint_value);
                    }
                }
                else {
                    endpoint_value = record_obj.getFieldValue(key);
                }
            }
        }
        
        nlapiLogExecution('debug', 'endpoint_value', endpoint_value);
        xml__setter(request_xml, endpoint_field.name, nlapiEscapeXML(endpoint_value));

        //Add exception here
    }
    
    
    return nlapiXMLToString(request_xml);
}

function xml__setter(xml, keys, value) {
    var keys__in_arr = keys.split('.');
    if (keys__in_arr.length < 2) {
        nlapiLogExecution('DEBUG', 'Error setting xml value. At least two keys are required.', keys);
    }
    else {
        nlapiLogExecution('debug', 'xml', xml);
        var parent = null;
        var parent_xpath = [];
        var child = null;
        var child_xpath = keys__in_arr[keys__in_arr.length - 1];
        for (var i=0; i<keys__in_arr.length - 1; i++) {
            parent_xpath.push(keys__in_arr[i]);
        }
        
        nlapiLogExecution('debug', 'xml__setter : parent_xpath', parent_xpath.join('/'));
        nlapiLogExecution('debug', 'xml__setter : child_xpath', child_xpath);
        nlapiLogExecution('debug', 'xml__setter : value', value);
        
        parent = nlapiSelectNode(xml, parent_xpath.join('/'));
        if (parent) {
            nlapiLogExecution('debug', 'parent exists...');
            child = nlapiSelectNode(parent, child_xpath);
            if (child && !isNullOrEmpty(value)) {
                nlapiLogExecution('debug', 'child exists...');
                parent.removeChild(child);
                var child_node = xml.createElement(child_xpath);
                var child_value = xml.createTextNode(value);
                nlapiLogExecution('debug', 'xml__setter : child_value', child_value);
                child_node.appendChild(child_value);
                parent.appendChild(child_node);
            }
        }
    }
}

function reconstructJSONRequest(request, record_type, record_id, line, mapping) {
    var request_obj = JSON.parse(request);
    var record_obj = nlapiLoadRecord(record_type, record_id);
    for (var key in mapping) {
        var endpoint_field = mapping[key];
        var endpoint_value = '';

        // FIX: ETL Mapping
        if (key.indexOf('___') > 0) {
            var keys = key.split('___');
            if (keys.length >= 2) {
                var rec_value = null;
                var rec_keys = keys[0];
                var subrec_keys = keys[1];
                if (rec_keys.indexOf('.') > 0) {
                    rec_keys = rec_keys.split('.');
                    rec_value = record_obj.getLineItemValue(rec_keys[0], rec_keys[1], line);
                }
                else {
                    rec_value = record_obj.getFieldValue(rec_keys);
                }

                if (!isNullOrEmpty(rec_value) && subrec_keys.indexOf('.') > 0) {
                    subrec_keys = subrec_keys.split('.');
                    endpoint_value = nlapiLookupField(subrec_keys[0], rec_value, subrec_keys[1], endpoint_field.isText);
                }
                
                // Check for field type - START
                if (endpoint_field.isInteger) {
                    endpoint_value = parseInt(endpoint_value);
                }
                // Check for field type - END
            }
        }
        else if (key.indexOf('.') > 0) {
            var keys = key.split('.');
            if (keys.length >= 2) {
                if (endpoint_field.isText) {
                    endpoint_value = record_obj.getLineItemText(keys[0], keys[1], line); // Get only the first line item
                }
                else if (endpoint_field.isInteger) {
                    endpoint_value = record_obj.getLineItemValue(keys[0], keys[1], line); // Get only the first line item
                    if (!isNullOrEmpty(endpoint_value)) {
                        endpoint_value = parseInt(endpoint_value);
                    }
                }
                else {
                    endpoint_value = record_obj.getLineItemValue(keys[0], keys[1], line); // Get only the first line item
                }
            }
        }
        else {
            if (endpoint_field.isText) {
                endpoint_value = record_obj.getFieldText(key);
            }
            else if (endpoint_field.isInteger) {
                endpoint_value = record_obj.getFieldValue(key);
                if (!isNullOrEmpty(endpoint_value)) {
                    endpoint_value = parseInt(endpoint_value);
                }
            }
            else {
                endpoint_value = record_obj.getFieldValue(key);
            }
        }
        object_setter(request_obj, endpoint_field.name, endpoint_value);

        //Add exception here
        if (endpoint_field.name == 'country') {
            var country_code = get3DigitCountryCode(endpoint_value);
            if (country_code) {
                object_setter(request_obj, endpoint_field.name, country_code);
            }
        }
    }
    return request_obj;
}

function get3DigitCountryCode(country_2digitcode) {
    if (!isNullOrEmpty(country_2digitcode)) {
        var rs = nlapiSearchRecord(COUNTRYCODE_RECTYPE, null,
                    [
                        new nlobjSearchFilter('isinactive', null, 'is', 'F'),
                        new nlobjSearchFilter(COUNTRYCODE_FLD_2DIGITCODE, null, 'is', country_2digitcode)
                    ],
                    [
                        new nlobjSearchColumn(COUNTRYCODE_FLD_3DIGITCODE)
                    ]) || [];
        if (rs.length > 0) {
            return rs[0].getValue(COUNTRYCODE_FLD_3DIGITCODE);
        }
    }
    return null;
}



function object_setter(obj, keys, value) {
    var LOG_TITLE = 'object_setter - ';
    keys = keys.split('.');
    var clone = obj;
    for (var i=0;i<keys.length - 1; i++) {
        clone = clone[keys[i]] ? clone[keys[i]] : null;
    }
    if (clone) {
        var last_key = keys.length > 1 ? keys[keys.length - 1]: null;
        if (last_key) {
            if (clone instanceof Array) {
                clone[0][last_key] = value; // last key of first array
            }
            else {
                clone[last_key] = value; // last key
            }
        }
        else {
            clone[keys] = value;
        }
    }
}

function outboundSO__ware2Go(call_method, endpoint, authorization_code, request) {
    var response = null;
    try {
        response = nlapiRequestURL(endpoint, JSON.stringify(request), {
            'Authorization': 'Basic '+ authorization_code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, call_method);
        nlapiLogExecution('DEBUG', 'Outbound Response Code', response.getCode());
        nlapiLogExecution('DEBUG', 'Outbound Response Body', response.getBody());
    }
    catch (err) {
        nlapiLogExecution('DEBUG', 'Error sending outbound order', err.name + ' : ' + err.message);
        nlapiLogExecution('DEBUG', 'Outbound response', response ? response.getBody() : '');
    }
}

function getFlowMapping(flow_id) {
    var mapping = {};
    if (!isNullOrEmpty(flow_id)) {
        var rs = nlapiSearchRecord(FLDCONFIG_RECTYPE, null,
                [
                    new nlobjSearchFilter(FLDCONFIG_FLD_FLOWNAME, null, 'is', flow_id),
                    new nlobjSearchFilter('isinactive', null, 'is', 'F')
                    //new nlobjSearchFilter(FLDCONFIG_FLD_UPDATEONOUTBOUND, null, 'is', 'F')
                ],
                [
                    new nlobjSearchColumn(FLDCONFIG_FLD_ENDPOINT),
                    new nlobjSearchColumn(FLDCONFIG_FLD_NETSUITE),
                    new nlobjSearchColumn(FLDCONFIG_FLD_ISARRAY),
                    new nlobjSearchColumn(FLDCONFIG_FLD_ISTEXT),
                    new nlobjSearchColumn(FLDCONFIG_FLD_ISINTEGER)
                    // new nlobjSearchColumn(FLDCONFIG_FLD_LOOKUPTYPE),
                    // new nlobjSearchColumn(FLDCONFIG_FLD_LOOKUPFLD)
                ]) || [];
        for (var i=0; i<rs.length; i++) {
            var _this = rs[i];
            /// v1.1
            //mapping[_this.getValue(FLDCONFIG_FLD_STAGING)] = _this.getValue(FLDCONFIG_FLD_ENDPOINT);
            mapping[_this.getValue(FLDCONFIG_FLD_NETSUITE)] = {
                flow: flow_id,
                name: _this.getValue(FLDCONFIG_FLD_ENDPOINT),
                isArray: _this.getValue(FLDCONFIG_FLD_ISARRAY) == 'T',
                isText: _this.getValue(FLDCONFIG_FLD_ISTEXT) == 'T',
                isInteger: _this.getValue(FLDCONFIG_FLD_ISINTEGER) == 'T'
                // lookupRec: _this.getValue(FLDCONFIG_FLD_LOOKUPTYPE),
                // lookupFld: _this.getValue(FLDCONFIG_FLD_LOOKUPFLD)
            };
        }
    }
    return mapping;
}

function getETLMapping() {
    var mapping = [];
    
    var rs = nlapiSearchRecord(ETLMAP_RECTYPE, null,
        [
            new nlobjSearchFilter('isinactive', null, 'is', 'F')
        ],
        [
            new nlobjSearchColumn(ETLMAP_FLD_SOSHIPMETHOD),
            new nlobjSearchColumn(ETLMAP_FLD_AITCODE),
            new nlobjSearchColumn(ETLMAP_FLD_ITEMTYPE),
            new nlobjSearchColumn(ETLMAP_FLD_IFSHIPMETHOD)
        ]) || [];
    
    for (var i=0, n=rs.length; i<n; i++) {
        var _this = rs[i];
        /// v1.1
        //mapping[_this.getValue(FLDCONFIG_FLD_STAGING)] = _this.getValue(FLDCONFIG_FLD_ENDPOINT);
        var arrItemType = _this.getValue(ETLMAP_FLD_ITEMTYPE).split(',');
        for (var j=0, jlen=arrItemType.length; j<jlen; j++) {
            mapping.push({
                soShip: _this.getValue(ETLMAP_FLD_SOSHIPMETHOD),
                soShipName: _this.getText(ETLMAP_FLD_SOSHIPMETHOD),
                ait: _this.getValue(ETLMAP_FLD_AITCODE),
                itemType: arrItemType[j],
                ifShip: _this.getValue(ETLMAP_FLD_IFSHIPMETHOD),
                ifShipName: _this.getText(ETLMAP_FLD_IFSHIPMETHOD)
            });
        }
    }
    
    nlapiLogExecution('DEBUG', 'getETLMapping', JSON.stringify(mapping));
    return mapping;
}

function getItemTypes() {
    var map = [];
    
    var rs = nlapiSearchRecord(LIST_ITEMTYPE, null,
        [
            new nlobjSearchFilter('isinactive', null, 'is', 'F')
        ],
        [
            new nlobjSearchColumn('name')
        ]
    ) || [];
    
    for (var i=0, n=rs.length; i<n; i++) {
        map.push({
            id: rs[i].getId(),
            name: rs[i].getValue('name')
        });
    }
    
    nlapiLogExecution('DEBUG', 'getItemTypes', JSON.stringify(map));
    return map;
}

function getResponseMapping(flow_id) {
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
    nlapiLogExecution('DEBUG', 'Response Map', JSON.stringify(mapping));
    return mapping;
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

function isNullOrEmpty(data) {
    return (data == null || data == '');
}
function isEmpty(value) 
{
    return value == null || value == "" || typeof (value) == undefined;
}

function isNotEmpty(value) 
{

    return !isEmpty(value);
}

function isArrayEmpty(argArray) 
{

    return !isArrayNotEmpty(argArray);
}

function isArrayNotEmpty(argArray) 
{
    return (isNotEmpty(argArray) && argArray.length > 0);
}