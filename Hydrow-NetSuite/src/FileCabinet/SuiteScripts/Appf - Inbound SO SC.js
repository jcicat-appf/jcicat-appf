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

    // Mandatory Script Parameters
    var SPARAM_CONCONFIG = 'custscript_appf_sparam_conconfigurator';
    var SPARAM_FLOWCONFIG = 'custscript_appf_sparam_flowconfig';

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

    //Call Method
    var CALLMETHOD_RECTYPE = 'customlist_appf_conf_call_method'; //'customlist227';

    //Callback Scheduled Script
    var SPARAM_CALLBACK_SCHEDULEDSCRIPT = 'custscript_appf_sparam_scheduledscript';
    var SPARAM_CALLBACK_SCHEDYLEDDEPLOY = 'custscript_appf_sparam_scheduleddeploy';

    //Dynamic Date Parameter
    var SPARAM_DATE = 'custscript_appf_sparam_inbounddate';
    var SPARAM_DATE_UNTIL = 'custscript_appf_sparam_inbounddate_until';

    // API RETRY LOGIC
    var SUCCESS_RESPONSE_CODES = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];
}

//Functions for Retry Logic
function fibonacci(n) {
    return n < 1 ? 0 :
        n <= 2 ? 1 :
        fibonacci(n - 1) + fibonacci(n - 2)
}

function wait(ms) {
    nlapiLogExecution("DEBUG", "WAIT", "Waiting for " + ms / 1000 + " seconds... " + new Date());
    /*var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }*/

    //setTimeout(function(){nlapiLogExecution("DEBUG", "WAIT", "Done Waiting " + new Date());}, ms)

    var date = new Date();
    date.setMilliseconds(date.getMilliseconds() + ms);
    while (new Date() < date) {}

    nlapiLogExecution("DEBUG", "WAIT", "Done Waiting " + new Date());
}


function schedule_inboundSO(type) {
    var context = nlapiGetContext();
    var conconfig_id = context.getSetting('SCRIPT', SPARAM_CONCONFIG);
    var flowconfig_id = context.getSetting('SCRIPT', SPARAM_FLOWCONFIG);

    var conconfig_info = nlapiLookupField(CONCONFIG_RECTYPE, conconfig_id,
        [
            CONCONFIG_FLD_NAME, CONCONFIG_FLD_SYSTEM,
            CONCONFIG_FLD_ACCESSTOKEN, CONCONFIG_FLD_SECRETKEY,
            CONCONFIG_FLD_API
        ]);

    var flowconfig_info = nlapiLookupField(FLOWCONFIG_RECTYPE, flowconfig_id,
        [
            FLOWCONFIG_FLD_ENDPOINT, FLOWCONFIG_FLD_CALLMETHOD, FLOWCONFIG_FLD_ORDERINFO_ENDPOINT
        ]);

    if (conconfig_info) {
        var call_method__name = nlapiLookupField(CALLMETHOD_RECTYPE, flowconfig_info[FLOWCONFIG_FLD_CALLMETHOD], 'name');
        //
        //  Ware2Go
        //
        if (conconfig_info[CONCONFIG_FLD_SYSTEM] == 'Ware2Go') {
            inboundSO__ware2Go(
                call_method__name, flowconfig_info[FLOWCONFIG_FLD_ENDPOINT], flowconfig_info[FLOWCONFIG_FLD_ORDERINFO_ENDPOINT],
                conconfig_info[CONCONFIG_FLD_ACCESSTOKEN], conconfig_info[CONCONFIG_FLD_SECRETKEY],
                flowconfig_id, context
            );
        }

        //
        // Superior
        //
        else if (conconfig_info[CONCONFIG_FLD_SYSTEM] == 'Superior') {
            inboundSO_superior(call_method__name, flowconfig_info[FLOWCONFIG_FLD_ENDPOINT],
                flowconfig_info[FLOWCONFIG_FLD_ORDERINFO_ENDPOINT], conconfig_info[CONCONFIG_FLD_API],
                flowconfig_id, context
            );
        }

        //Callback Scheduled Script
        var callback_script = context.getSetting('SCRIPT', SPARAM_CALLBACK_SCHEDULEDSCRIPT);
        var callback_deploy = context.getSetting('SCRIPT', SPARAM_CALLBACK_SCHEDYLEDDEPLOY);
        if (!isNullOrEmpty(callback_script) && !isNullOrEmpty(callback_deploy)) {
            nlapiScheduleScript(callback_script, callback_deploy);
        }
    }

}

function getYesterday() {
    var dt = new Date();
    var dtPrev = new Date(dt.setDate(dt.getDate() - 1));
    return dtPrev;
}

function inboundSO__ware2Go(call_method, endpoint, order_info_endpoint, access_token, secret_key, flowconfig_id, context) {

    try {
        var authorization_code = Base64.encode(access_token + ':' + secret_key);
        nlapiLogExecution('DEBUG', 'Auth Code', authorization_code);
        nlapiLogExecution('DEBUG', 'Endpoint', endpoint);

        /*
        if (endpoint.indexOf('date__') >=0) {
            var date_regex = /{date__+[YMD-]{1,}}/im;
            var regex_result = date_regex.exec(endpoint);
            if (regex_result && regex_result.length > 0) {
                regex_result = regex_result[0]; // sample result: {date__YYYY-MM-DD}
                var regex_result__as_arr = regex_result.split('__'); // [date__, YYYY-MM-DD]
                if (regex_result__as_arr.length >= 2) {
                    var date_regex_format = regex_result__as_arr[1];
                    endpoint = endpoint.replace(regex_result, formatDate(new Date(), date_regex_format));
                }
            }
        }
        */

        var dtCtx = nlapiGetContext().getSetting('SCRIPT', SPARAM_DATE);
        nlapiLogExecution('DEBUG', 'inboundSO__ware2Go', dtCtx);
        var dt = (dtCtx == '' || dtCtx == null || dtCtx == undefined) ? getYesterday() : new Date(dtCtx);

        var dtCtxUntil = nlapiGetContext().getSetting('SCRIPT', SPARAM_DATE_UNTIL);
        nlapiLogExecution('DEBUG', 'inboundSO__ware2Go', dtCtxUntil);
        var dtUntil = (dtCtxUntil == '' || dtCtxUntil == null || dtCtxUntil == undefined) ? new Date() : new Date(dtCtxUntil);

        nlapiLogExecution('DEBUG', 'inboundSO__ware2Go', dtUntil);
        var url = endpoint.replace('{date}', formatDate(dt, 'YYYY-MM-DD')).replace('{dateuntil}', formatDate(dtUntil, 'YYYY-MM-DD'));

        nlapiLogExecution('DEBUG', 'Ware2Go Endpoint', url);
        nlapiLogExecution('DEBUG', 'Ware2Go Method', call_method);

        var response = nlapiRequestURL(url, null, {
            'Authorization': 'Basic ' + authorization_code,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)'
        }, call_method);

        nlapiLogExecution('DEBUG', 'Ware2Go Response', JSON.stringify(response));
        var response_json;
        if (SUCCESS_RESPONSE_CODES.indexOf(response.getCode()) > -1) {
            try {
                response_json = JSON.parse(response.getBody());

            } catch (err) {
                nlapiLogExecution('DEBUG', 'Error parsing response', err.name + ' : ' + err.message);
            }
        } else if (SUCCESS_RESPONSE_CODES.indexOf(response.getCode()) == -1) {
            var retryCount = 1;
            try {

                while (retryCount <= 5) {
                    nlapiLogExecution("DEBUG", "Retrying...", retryCount);
                    wait(60000 * fibonacci(retryCount));

                    response = nlapiRequestURL(url, null, {
                        'Authorization': 'Basic ' + authorization_code,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)'
                    }, call_method);

                    if (SUCCESS_RESPONSE_CODES.indexOf(response.getCode()) > -1) {

                        nlapiLogExecution("DEBUG", "RESPONSE - STRINGIFY", JSON.stringify(response));
                        response_json = JSON.parse(response.getBody());
                        break;
                    }
                    nlapiLogExecution("DEBUG", "order_response code inside", response.getCode());
                    retryCount++;
                }
                nlapiLogExecution("DEBUG", "End of retry", retryCount);



            } catch (err) {
                nlapiLogExecution('DEBUG', 'Error parsing response', err.name + ' : ' + err.message);
            }
        }

        response_json = JSON.parse(response.getBody());
        nlapiLogExecution('DEBUG', 'Response body', response.getBody());
        nlapiLogExecution('DEBUG', 'Orders Count', response_json.orders ? response_json.orders.length : 0);
        // nlapiLogExecution('DEBUG', 'Orders Count', Object.keys(response_json).length); // There will always be a "meta" key in successful responses

        //return;
        //On each order, call API to get more order details
        if (response_json.orders && response_json.orders.length > 0) {
            // if (Object.keys(response_json).length > 0) {
            var orders = response_json.orders;
            for (var i = 0; i < orders.length; i++) {
                // for (var i in response_json) {
                // if (response_json.hasOwnProperty(i) == true && i != 'meta') {
                // nlapiLogExecution('DEBUG', 'key = ' + i, JSON.stringify(response_json[i]));
                var order = orders[i];
                // var order = response_json[i];
                // Init Integration Log
                var log_record = nlapiCreateRecord(INTEGLOG_RECTYPE, {
                    recordmode: 'dynamic'
                });
                log_record.setFieldValue(INTEGLOG_FLD_FLOWNAME, flowconfig_id);
                nlapiLogExecution('DEBUG', 'Datetimetz', nlapiDateToString(new Date(), 'datetimetz'));
                log_record.setFieldValue(INTEGLOG_FLD_REQUESTDATETIME, nlapiDateToString(new Date(), 'datetimetz'));

                var order_url = order_info_endpoint.replace('{order_id}', order.orderId);
                // var order_url = order_info_endpoint.replace('{order_id}', order.salesOrderNumber);

                nlapiLogExecution('DEBUG', 'Order Url', order_url);

                var order_response = nlapiRequestURL(order_url, {}, {
                    'Authorization': 'Basic ' + authorization_code,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }, call_method);

                log_record.setFieldValue(INTEGLOG_FLD_RESPONSEDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                var integLogStatus = 'FAIL';
                nlapiLogExecution("DEBUG", "FIRST Request Sent Ware2Go", order_response.getCode());
                if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {
                    integLogStatus = 'SUCCESS';
                } else {
                    var orderRetryCount = 1;
                    while (orderRetryCount <= 5) {
                        nlapiLogExecution("DEBUG", "Retrying...", orderRetryCount);
                        wait(60000 * fibonacci(orderRetryCount));

                        order_response = nlapiRequestURL(order_url, {}, {
                            'Authorization': 'Basic ' + authorization_code,
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }, call_method);

                        if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {

                            integLogStatus = 'SUCCESS';
                            break;
                        }
                        nlapiLogExecution("DEBUG", "order_response code inside", order_response.getCode());
                        retryCount++;
                    }

                }
                log_record.setFieldValue(INTEGLOG_FLD_INTEGLOGSTATUS, integLogStatus);
                log_record.setFieldValue(INTEGLOG_FLD_RESPONSEMESSAGE, order_response.getBody());
                log_record.setFieldValue(INTEGLOG_FLD_INTEGSUCCESSDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                var log_id = nlapiSubmitRecord(log_record, true, true);
                nlapiLogExecution('DEBUG', 'Integration Log ID Created: ', log_id);

                // Reschedule when usage is about to consume
                if (context.getRemainingUsage() < 1000) {
                    nlapiYieldScript();
                }
                // }

            }
        }
    } catch (outsideerr) {
        nlapiLogExecution('ERROR', outsideerr.message);
    }
}

function inboundSO_superior(call_method, endpoint, order_info_endpoint, api_key, flowconfig_id, context) {
    try {
        var url = endpoint.replace('{api_key}', api_key);
        if (url.indexOf('{date}') >= 0) {
            var dtCtx = nlapiGetContext().getSetting('SCRIPT', SPARAM_DATE);
            nlapiLogExecution('DEBUG', 'inboundSO_superior', dtCtx);
            var dt = (dtCtx == '' || dtCtx == null || dtCtx == undefined) ? new Date() : new Date(dtCtx);
            nlapiLogExecution('DEBUG', 'inboundSO_superior', dt);
            url = url.replace('{date}', formatDate(dt, 'YYYY-MM-DD TIME'));
        }

        nlapiLogExecution('DEBUG', 'Superior Endpoint', url);

        var response = nlapiRequestURL(url, {}, {}, call_method);
        nlapiLogExecution('DEBUG', 'Superior Endpoint Response', JSON.stringify(response));

        var response_json;
        
        if (SUCCESS_RESPONSE_CODES.indexOf(response.getCode()) > -1) {
            try {
                response_json = JSON.parse(response.getBody());

            } catch (err) {
                nlapiLogExecution('DEBUG', 'Error parsing response', err.name + ' : ' + err.message);
            }
        } else if (SUCCESS_RESPONSE_CODES.indexOf(response.getCode()) == -1) {
            var retryCount = 1;
            try {

                while (retryCount <= 5) {
                    nlapiLogExecution("DEBUG", "Retrying...", retryCount);
                    wait(60000 * fibonacci(retryCount));

                    response = nlapiRequestURL(url, {}, {}, call_method);

                    if (SUCCESS_RESPONSE_CODES.indexOf(response.getCode()) > -1) {

                        nlapiLogExecution("DEBUG", "RESPONSE - STRINGIFY", JSON.stringify(response));
                        response_json = JSON.parse(response.getBody());
                        break;
                    }
                    nlapiLogExecution("DEBUG", "order_response code inside", response.getCode());
                    retryCount++;
                }
                nlapiLogExecution("DEBUG", "End of retry", retryCount);



            } catch (err) {
                nlapiLogExecution('DEBUG', 'Error parsing response', err.name + ' : ' + err.message);
            }

        }

        response_json = JSON.parse(response.getBody());


        nlapiLogExecution('DEBUG', 'Orders Count', response_json.BusinessTransactionResponse.Orders ? JSON.stringify(response_json.BusinessTransactionResponse.Orders) : 0);
        //On each order, call API to get more order details
        if (response_json.BusinessTransactionResponse.Orders) {
            var orders = response_json.BusinessTransactionResponse.Orders;
            if (orders instanceof Array && orders.length > 0) {
                for (var i = 0; i < orders.length; i++) {
                    var order = orders[i];
                    var order_id = order.OrderId || order.OrderID;
                    nlapiLogExecution('DEBUG', 'Order Id', order_id);
                    if (order_id) {
                        // Init Integration Log
                        var log_record = nlapiCreateRecord(INTEGLOG_RECTYPE, {
                            recordmode: 'dynamic'
                        });
                        log_record.setFieldValue(INTEGLOG_FLD_FLOWNAME, flowconfig_id);
                        log_record.setFieldValue(INTEGLOG_FLD_REQUESTDATETIME, nlapiDateToString(new Date(), 'datetimetz'));

                        var order_url = order_info_endpoint.replace('{order_id}', order_id).replace('{api_key}', api_key);

                        nlapiLogExecution('DEBUG', 'Order Url', order_url);

                        var order_response = nlapiRequestURL(order_url, {}, {}, call_method);

                        log_record.setFieldValue(INTEGLOG_FLD_RESPONSEDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                        var integLogStatus = 'FAIL';
                        nlapiLogExecution("DEBUG", "FIRST Request Sent Superior 1", order_response.getCode());
                        if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {
                            integLogStatus = 'SUCCESS';
                        } else {
                            var orderRetryCount = 1;
                            while (orderRetryCount <= 5) {
                                nlapiLogExecution("DEBUG", "Retrying...", orderRetryCount);
                                wait(60000 * fibonacci(orderRetryCount));

                                order_response = nlapiRequestURL(order_url, {}, {}, call_method);

                                if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {

                                    integLogStatus = 'SUCCESS';
                                    break;
                                }
                                nlapiLogExecution("DEBUG", "order_response code inside", order_response.getCode());
                                retryCount++;
                            }

                        }
                        log_record.setFieldValue(INTEGLOG_FLD_INTEGLOGSTATUS, integLogStatus);
                        nlapiLogExecution('DEBUG', 'integLogStatus', integLogStatus);
                        log_record.setFieldValue(INTEGLOG_FLD_RESPONSEMESSAGE, order_response.getBody());
                        log_record.setFieldValue(INTEGLOG_FLD_INTEGSUCCESSDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                        var log_id = nlapiSubmitRecord(log_record, true, true);
                        nlapiLogExecution('DEBUG', 'Integration Log ID Created: ', log_id);
                    }

                    // Reschedule when usage is about to consume
                    if (context.getRemainingUsage() < 1000) {
                        nlapiYieldScript();
                    }
                }
            } else if (orders instanceof Object && orders['OrderID']) {
                order = orders['OrderID'];
                if (order) {
                    // Init Integration Log
                    var log_record = nlapiCreateRecord(INTEGLOG_RECTYPE, {
                        recordmode: 'dynamic'
                    });
                    log_record.setFieldValue(INTEGLOG_FLD_FLOWNAME, flowconfig_id);
                    log_record.setFieldValue(INTEGLOG_FLD_REQUESTDATETIME, nlapiDateToString(new Date(), 'datetimetz'));

                    var order_url = order_info_endpoint.replace('{order_id}', order).replace('{api_key}', api_key);

                    nlapiLogExecution('DEBUG', 'Order Url', order_url);

                    var order_response = nlapiRequestURL(order_url, {}, {}, call_method);

                    log_record.setFieldValue(INTEGLOG_FLD_RESPONSEDATETIME, nlapiDateToString(new Date(), 'datetimetz'));

                    var integLogStatus = 'FAIL';
                    nlapiLogExecution("DEBUG", "FIRST Request Sent Superior 2", order_response.getCode());
                    if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {
                        integLogStatus = 'SUCCESS';
                    } else {
                        var orderRetryCount = 1;
                        while (orderRetryCount <= 5) {
                            nlapiLogExecution("DEBUG", "Retrying...", orderRetryCount);
                            wait(60000 * fibonacci(orderRetryCount));

                            order_response = nlapiRequestURL(order_url, {}, {}, call_method);

                            if (SUCCESS_RESPONSE_CODES.indexOf(order_response.getCode()) > -1) {

                                integLogStatus = 'SUCCESS';
                                break;
                            }
                            nlapiLogExecution("DEBUG", "order_response code inside", order_response.getCode());
                            retryCount++;
                        }

                    }
                    log_record.setFieldValue(INTEGLOG_FLD_INTEGLOGSTATUS, integLogStatus);
                    nlapiLogExecution('DEBUG', 'integLogStatus', integLogStatus);
                    log_record.setFieldValue(INTEGLOG_FLD_RESPONSEMESSAGE, order_response.getBody());
                    log_record.setFieldValue(INTEGLOG_FLD_INTEGSUCCESSDATETIME, nlapiDateToString(new Date(), 'datetimetz'));
                    var log_id = nlapiSubmitRecord(log_record, true, true);
                    nlapiLogExecution('DEBUG', 'Integration Log ID Created: ', log_id);

                    // Reschedule when usage is about to consume
                    if (context.getRemainingUsage() < 1000) {
                        nlapiYieldScript();
                    }
                }
            }


        }
    } catch (outsideerr) {
        nlapiLogExecution('ERROR', 'Error', outsideerr.message);
    }
}

function formatDate(date_obj, format) {
    nlapiLogExecution('DEBUG', 'formatDate', format);
    // 11/12/2020 - Marlon Villarama
    // Patch to make sure the date regex format does not contain any trailing brace.
    // START
    if (format[format.length - 1] == '}') {
        format = format.substring(0, format.length - 1);
    }
    // END

    var _year, _month, _date, _time;
    if (format.indexOf('YYYY') >= 0) {
        _year = date_obj.getFullYear();
    } else {
        _year = date_obj.getFullYear() - 2000;
    }

    _month = (date_obj.getMonth() + 1) + '';
    if (format.indexOf('MM') >= 0 && _month.length < 2) {
        _month = '0' + _month;
    }

    _date = date_obj.getDate() + '';
    if (format.indexOf('DD') >= 0 && _date.length < 2) {
        _date = '0' + _date;
    }

    // Default to 11:59 PM (only applicable to Vodigy/Superior because their API retrieves the last 24 hours from the specified time
    _time = "11:59 PM";

    return format.replace('YYYY', _year).replace('MM', _month).replace('DD', _date).replace('TIME', _time);
}

function isNullOrEmpty(data) {
    return (data == null || data == '');
}