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
    var INBOUND_FLD_TRANSACTION = 'custrecord_appf_inb_trans_trans';
    var INBOUND_FLD_SALESORDERNUMBER = 'custrecord_appf_inb_trans_sonumber';
    var INBOUND_FLD_PURCHASEORDERNUMBER = 'custrecord_appf_inb_trans_ponumber';

    // Item Fulfillment
    var ITEMFMT_FLD_TRANSACTIONLINEID = 'custcol_appf_tran_line_id';

    var SPARAM_SAVEDSEARCH = 'custscript_appf_sparam_stagetotransearch';
    var SPARAM_INBOUNDFLOW_WARETOGO = 'custscript_appf_sparam_iflow_ware2go';
    var SPARAM_INBOUNDFLOW_SUPERIOR = 'custscript_appf_sparam_iflow_superior';
    var SPARAM_INBOUNDFLOW_SUPERIORNV = 'custscript_appf_sparam_iflow_supnv';
    var SPARAM_INBOUNDFLOW_SUPERIORNASHVILLE = 'custscript_appf_sparam_iflow_supnashvill';
    var SPARAM_INBOUNDFLOW_SUPERIORCA = 'custscript_appf_sparam_iflow_supca';
    var SPARAM_INBOUNDFLOW_AIT = 'custscript_appf_sparam_iflow_ait';
    var SPARAM_INBOUNDFLOW_RHENUS = 'custscript_appf_sparam_iflow_rhenus';
  
    var RHENUS_FLOW_ID = 7;
}
function scheduleStagingToTransaction(type) {
    var context = nlapiGetContext();
    var stagingsearch_id = context.getSetting('SCRIPT', SPARAM_SAVEDSEARCH);

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

    if (!isNullOrEmpty(stagingsearch_id)) {
        var logIFs = {};
        
        var stagingsearch_resultset = nlapiLoadSearch(null, stagingsearch_id).runSearch();
        stagingsearch_resultset.forEachResult(function(result) {
            var _id = result.getId();
            var _flow = result.getValue(INBOUND_FLD_FLOW);
            var _source = result.getValue(INBOUND_FLD_SOURCETRANSACTION);
            var _line_id = result.getValue(INBOUND_FLD_TRANSACTIONLINEID);
            var _item_id = result.getValue(INBOUND_FLD_ITEM);

            if (!isNullOrEmpty(_source) && (!isNullOrEmpty(_line_id) || !isNullOrEmpty(_item_id))) {
                try {
                    var _item_fmt_rec = nlapiTransformRecord('salesorder', _source, 'itemfulfillment');
                    if (_item_fmt_rec) {
                        
                        var _mapping;
                        switch(_flow) {
                            case ware2go_id: {
                                _mapping = mapping_ware2go;
                                break;
                            }
                            case superior_id: {
                                _mapping = mapping_superior;
                                break;
                            }
                            case superiornv_id: {
                                _mapping = mapping_superiornv;
                                break;
                            }
                            case superiornashville_id: {
                                _mapping = mapping_superiornashville;
                                break;
                            }
                            case superiorca_id: {
                                _mapping = mapping_superiorca;
                                break;
                            }
                            case ait_id: {
                                _mapping = mapping_ait;
                                break;
                            }
                            case rhenus_id: {
                                _mapping = mapping_rhenus;
                                break;
                            }
                            default: {
                                break;
                            }
                        }
                        // var _mapping = _flow == ware2go_id ? mapping_ware2go : mapping_superior;

                        // Explicitly do not fulfill all items in the order
                        var _count = _item_fmt_rec.getLineItemCount('item');
                        nlapiLogExecution('DEBUG', 'Count', _count);
                        for (var i=1; i<=_count; i++) {
                            _item_fmt_rec.selectLineItem('item', i);
                            _item_fmt_rec.setCurrentLineItemValue('item', 'itemreceive', 'F');
                            _item_fmt_rec.commitLineItem('item');
                        }

                        // Explicitly set the quantity of the line item to fulfill
                        var _quantity = result.getValue(INBOUND_FLD_QUANTITY) || 0;
                        _quantity = parseFloat(_quantity);
                        if (_quantity <= 0) {
                            throw nlapiCreateError('INVALID_QUANTITY_VALUE', 'Quantity must be a positive integer greater than zero to be able to create an item fulfillment.');
                        }
                        var _source_rec = nlapiLoadRecord('salesorder', _source);
                        if (!isNullOrEmpty(_line_id)) {
                            nlapiLogExecution('DEBUG', 'Line ID', _line_id);
                            var _index = _source_rec.findLineItemValue('item', ITEMFMT_FLD_TRANSACTIONLINEID, _line_id);
                            var _lineTrxId = _source_rec.getLineItemValue('item', ITEMFMT_FLD_TRANSACTIONLINEID, _index);
                            nlapiLogExecution('DEBUG', 'Index in Source Transaction', _index);
                            if (_index > 0) {
                                var _3pl_order_id = _source_rec.getLineItemValue('item', 'custcol_appf_3pl_orderid', _index);
                                nlapiLogExecution('DEBUG', '3PL Order ID', _3pl_order_id);
                                //_index = _item_fmt_rec.findLineItemValue('item', 'custcol_appf_3pl_orderid', _3pl_order_id);
                                _index = _item_fmt_rec.findLineItemValue('item', ITEMFMT_FLD_TRANSACTIONLINEID, _lineTrxId);
                                nlapiLogExecution('DEBUG', 'Index in Item FMT', _index);
                                nlapiLogExecution('DEBUG', 'Quantity', _quantity);
                                if (_index > 0 && _quantity > 0) {
                                    _item_fmt_rec.selectLineItem('item', _index);
                                    _item_fmt_rec.setCurrentLineItemValue('item', 'quantity', _quantity);
                                    _item_fmt_rec.setCurrentLineItemValue('item', 'itemreceive', 'T');
                                    _item_fmt_rec.commitLineItem('item');
                                }
                                else {
                                    throw nlapiCreateError('TRANSACTIONLINEID_NOT_FOUND', 'Cannot find transaction line id to be fulfilled in item fulfillment: ' + _3pl_order_id);
                                }
                            }
                            else {
                                throw nlapiCreateError('TRANSACTIONLINEID_NOT_FOUND', 'Cannot find transaction line id to be fulfilled from sales order: ' + _line_id);
                            }
                        }
                        else if (!isNullOrEmpty(_item_id)) {
                            nlapiLogExecution('DEBUG', 'Item ID', _item_id);
                            var _index = _item_fmt_rec.findLineItemValue('item', 'item', _item_id);
                            nlapiLogExecution('DEBUG', 'Index in Item Fulfillment', _index);
                            if (_index > 0 && _quantity > 0) {
                                _item_fmt_rec.selectLineItem('item', _index);
                                _item_fmt_rec.setCurrentLineItemValue('item', 'quantity', _quantity);
                                _item_fmt_rec.setCurrentLineItemValue('item', 'itemreceive', 'T');
                                _item_fmt_rec.commitLineItem('item');
                            }
                            else {
                                throw nlapiCreateError('ITEM_NOT_FOUND', 'Cannot find item to be fulfilled in item fulfillment: ' + _item_id);
                            }
                        }
                        else {
                            throw nlapiCreateError('TRANSACTIONLINEID_NOT_FOUND', 'Cannot find transaction line id to be fulfilled from sales order: ' + _line_id);
                        }

                        nlapiLogExecution('DEBUG', 'Mapping Staging to NS');
                        for (var key in _mapping) {
                            var netsuite_id = key;
                            var staging_id = _mapping[key];
                            var staging_value = result.getValue(staging_id);
                            //nlapiLogExecution('DEBUG', 'NetSuite ID', netsuite_id);
                            //nlapiLogExecution('DEBUG', 'Staging ID', staging_id);
                            //nlapiLogExecution('DEBUG', 'Staging Value', staging_value);
                            if (!isNullOrEmpty(staging_value) && (netsuite_id != 'quantity' || netsuite_id != 'package.weight')) {
                                nlapiLogExecution('DEBUG', netsuite_id, staging_value);
                                if (key.indexOf('item.') == 0 && _index > 0) {
                                    var keys = key.split('.');
                                    if (keys.length == 2) {
                                        var fld = _item_fmt_rec.getLineItemField(keys[0], keys[1]);

                                        _item_fmt_rec.selectLineItem(keys[0], _index);
                                        nlapiLogExecution('DEBUG', 'setting IF Item Field', 'sublist = "' + keys[0] + '", field = "' + keys[1] + '", staging_value = "' + staging_value + '"');
                                        if (fld && fld.getType() == 'select' && typeof(staging_value) == 'string') {
                                            _item_fmt_rec.setCurrentLineItemText(keys[0], keys[1], staging_value);
                                        }
                                        else {
                                            _item_fmt_rec.setCurrentLineItemValue(keys[0], keys[1], staging_value);
                                        }
                                        _item_fmt_rec.commitLineItem(keys[0]);
                                    }
                                }
                                else {
                                    nlapiLogExecution('DEBUG', 'setting IF Header Field', 'netsuite_id = "' + netsuite_id + '", staging_value = "' + staging_value + '"');
                                    var fld = _item_fmt_rec.getField(netsuite_id);
                                    if (fld && fld.getType() == 'select' && typeof(staging_value) == 'string') {
                                        _item_fmt_rec.setFieldText(netsuite_id, staging_value);
                                    }
                                    else {
                                        _item_fmt_rec.setFieldValue(netsuite_id, staging_value);
                                    }
                                }
                            }
                        }
                      
                    
                        
                        // Fix to back-date Ware2Go orders by one day
                        if (_flow == ware2go_id || _flow == RHENUS_FLOW_ID) {
                            _item_fmt_rec.setFieldValue('trandate', getYesterday());
                        }
                        else
                        {
                            var date = nlapiLookupField(INBOUND_RECTYPE, _id, 'custrecord_appf_inb_trans_date');
                            if(date)
                            {
                                _item_fmt_rec.setFieldValue('trandate', date);
                            }
                        }

                        if (_flow == RHENUS_FLOW_ID) { // Rhenus
                            var today = new Date();
                            var yesterday = new Date(today);
   
                            yesterday.setDate(yesterday.getDate() - 1);
                           _item_fmt_rec.setFieldValue('trandate', today);
                         }
                        
                        // Save Item Fulfillment
                        var _item_fmt_id = nlapiSubmitRecord(_item_fmt_rec, false, true);
                        nlapiLogExecution('DEBUG', 'Item Fulfillment Created', _item_fmt_id);

                        //Backlink
                        nlapiSubmitField(INBOUND_RECTYPE, _id, [INBOUND_FLD_TRANSACTION, INBOUND_FLD_PROCESSINGSTATUS, INBOUND_FLD_PROCESSLOG], [_item_fmt_id, 'SUCCESS', '']);
                        var log_id = getIntegrationLog(_line_id, _id);
                        if (log_id) {
                            // nlapiSubmitField(INTEGLOG_RECTYPE, log_id, INTEGLOG_FLD_LINKEDTRANS, _item_fmt_id);
                            if (logIFs.hasOwnProperty(log_id) == false) {
                                logIFs[log_id] = [];
                            }
                            logIFs[log_id].push(_item_fmt_id);

                            var sublist_name = '';
                            try {
                                //Load Item Fulfillment Record
                                var _item_fmt_rec = nlapiLoadRecord('itemfulfillment', _item_fmt_id, {recordmode: 'dynamic'});
                                //Set Package weight
                                nlapiLogExecution('DEBUG', 'Setting other sublist other than item.');

                                var recSpsPkg = null;
                                
                                for (var key in _mapping) {
                                    var netsuite_id = key;
                                    var staging_id = _mapping[key];
                                    var staging_value = result.getValue(staging_id);
                                    nlapiLogExecution('DEBUG', 'key | netsuite_id = ' + netsuite_id, 'staging_id = ' + staging_id + ', staging_value = ' + staging_value);

                                    if (!isNullOrEmpty(staging_value) && (netsuite_id != 'quantity') &&
                                        (netsuite_id.indexOf('.') > -1) && (netsuite_id.indexOf('item.') == -1)) {
                                        if (netsuite_id.indexOf('customrecord_sps_package.') >= 0) {
                                            nlapiLogExecution('DEBUG', 'customrecord_sps_package', 'K = ' + netsuite_id);
                                            if (recSpsPkg == null) {
                                                nlapiLogExecution('DEBUG', 'customrecord_sps_package', 'Creating SPS Package record...');
                                                recSpsPkg = nlapiCreateRecord('customrecord_sps_package');
                                            }
                                            
                                            var keys = netsuite_id.split('.');
                                            if (keys.length == 2) {
                                                nlapiLogExecution('DEBUG', 'customrecord_sps_package', 'Setting field = ' + keys[1] + ' to ' + staging_value);
                                                recSpsPkg.setFieldValue(keys[1], staging_value);
                                            }
                                        }
                                        else {
                                            nlapiLogExecution('DEBUG', 'K', netsuite_id);

                                            var keys = key.split('.');
                                            if (keys.length == 2) {
                                                sublist_name = keys[0];

                                                var fld = _item_fmt_rec.getLineItemField(keys[0], keys[1]);
                                                var count = _item_fmt_rec.getLineItemCount(keys[0]);
                                                var fld_values = staging_value.split(',');
                                                var line_index = 1;

                                                nlapiLogExecution('DEBUG', 'K Count', count);

                                                for (var k=0; k<fld_values.length; k++) {
                                                    // remove the default first line
                                                    if (count >= line_index) {
                                                        _item_fmt_rec.selectLineItem(keys[0], line_index);
                                                    }
                                                    else {
                                                        _item_fmt_rec.selectNewLineItem(keys[0]);
                                                    }

                                                    if (fld && fld.getType() == 'select' && typeof(staging_value) == 'string') {
                                                        _item_fmt_rec.setCurrentLineItemText(keys[0], keys[1], fld_values[k]);
                                                    }
                                                    else {
                                                        _item_fmt_rec.setCurrentLineItemValue(keys[0], keys[1], fld_values[k]);
                                                    }

                                                    _item_fmt_rec.commitLineItem(keys[0]);
                                                    line_index++;
                                                }
                                            }
                                        }
                                    }
                                }

                                var if_id = nlapiSubmitRecord(_item_fmt_rec);
                                
                                if (recSpsPkg != null) {
                                    nlapiLogExecution('DEBUG', 'customrecord_sps_package', 'Linking to IF = ' + if_id);
                                    recSpsPkg.setFieldValue('custrecord_sps_pack_asn', if_id);
                                    nlapiSubmitRecord(recSpsPkg);
                                }
                                
                                // Issue: NONE Processing Status
                                // Fix: Move backlinking logic from end of function to within the try/catch block
                                nlapiSubmitField(INTEGLOG_RECTYPE, log_id, INTEGLOG_FLD_LINKEDTRANS, _item_fmt_id);
                            }
                            catch (package_err) {
                                nlapiLogExecution('DEBUG', 'Error setting ' + sublist_name, package_err.name + ':' + package_err.message);
                            }
                        }

                    }
                }
                catch (err) {
                    nlapiLogExecution('DEBUG', 'Unable to transform inbound transaction: ' + _id, err.name + ' : ' + err.message);
                    nlapiSubmitField(INBOUND_RECTYPE, _id, [INBOUND_FLD_PROCESSINGSTATUS, INBOUND_FLD_PROCESSLOG], ['FAIL', (err.name + ' : ' + err.message)]);
                }
            }
            var context = nlapiGetContext();
            nlapiLogExecution('DEBUG', 'context.getRemainingUsage()=  ', context.getRemainingUsage());
            // Reschedule when usage is about to consume
            if (context.getRemainingUsage() < 2000) {
                // ISSUE: Script stops with FAILED status because yielding only works for Scheduled deployments
                // Fix: Replace yield with re-schedule API
                // nlapiYieldScript();
                nlapiScheduleScript(nlapiGetContext().getScriptId(), nlapiGetContext().getDeploymentId());
                return false;
              	// nlapiYieldScript();
            }
            if (context.getRemainingUsage() == 2000) {
                // ISSUE: Script stops with FAILED status because yielding only works for Scheduled deployments
                // Fix: Replace yield with re-schedule API
                // nlapiYieldScript();
                nlapiScheduleScript(nlapiGetContext().getScriptId(), nlapiGetContext().getDeploymentId());
                return false;
                // nlapiYieldScript();
            }

            return true;
        });
        
        // Issue: NONE Processing Status
        // Fix: Move backlinking logic from end of function to within the try/catch block
        // for (var log_id in logIFs) {
            // if (logIFs.hasOwnProperty(log_id)) {
                // nlapiSubmitField(INTEGLOG_RECTYPE, log_id, INTEGLOG_FLD_LINKEDTRANS, logIFs[log_id]);
            // }
        // }
    }
}

function getYesterday() {
    var dt = new Date();
    var dtPrev = new Date(dt.setDate(dt.getDate() - 1));
    nlapiLogExecution('debug', 'getYesterday', dtPrev);
    return dtPrev;
}

function getIntegrationLog(line_id, staging_id) {
    var filters = [new nlobjSearchFilter(INTEGLOG_FLD_INBOUNDTRANS, null, 'is', staging_id)];
    if (!isNullOrEmpty(line_id)) {
        filters.push(new nlobjSearchFilter(INTEGLOG_FLD_TRANSLINEID, null, 'is', line_id));
    }
    var rs = nlapiSearchRecord(INTEGLOG_RECTYPE, null,
                filters, []) || [];
    if (rs.length > 0) {
        return rs[0].getId();
    }
    return null;
}

function getFlowMapping(flow_id) {
    var mapping = {};
    if (!isNullOrEmpty(flow_id)) {
        var rs = nlapiSearchRecord(FLDCONFIG_RECTYPE, null,
                [
                    new nlobjSearchFilter(FLDCONFIG_FLD_FLOWNAME, null, 'is', flow_id),
                    new nlobjSearchFilter('isinactive', null, 'is', 'F'),
                    new nlobjSearchFilter(FLDCONFIG_FLD_NETSUITE, null, 'isnotempty')
                ],
                [
                    new nlobjSearchColumn(FLDCONFIG_FLD_STAGING),
                    new nlobjSearchColumn(FLDCONFIG_FLD_NETSUITE).setSort(true),
                    //new nlobjSearchColumn(FLDCONFIG_FLD_NETSUITE),
                ]) || [];
        for (var i=0; i<rs.length; i++) {
            var _this = rs[i];
            mapping[_this.getValue(FLDCONFIG_FLD_NETSUITE)] = _this.getValue(FLDCONFIG_FLD_STAGING);
        }
    }
    return mapping;
}


function isNullOrEmpty(data) {
    return (data == null || data == '');
}