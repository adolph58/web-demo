function myAjax(method,data,url,callback){
    $.ajax({
        method: method,
        data: data,
        url: url,
        datatype: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            var returnCode = data.returnCode;
            var message = data.message;
            var code = data.code;
            if (returnCode == 'Failure') {
                $.toast(message, "cancel", function (toast) {
                    console.log(toast);
                });
                if(code == 202) { window.open(baseUrl + "/login.html", '_parent'); }
                return false;
            } else {
                if(code==202){
                    window.location.href=baseUrl + "/login.html"
                }else if(code==200){
                    callback(data);
                }
            }
        },
        error:function(data){
            $.toast("服务端数据请求失败！", "text");
        }
    });
}


function myAjax2(method, data, url, callback) {
    $.ajax({
        method: method,
        data: data,
        url: url,
        datatype: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function () {
            // $.showLoading("加载中...");
            // console.log(url)
        },
        complete: function () {
            //  $.hideLoading();
            // console.log("complete:"+url)
        },
        success: function (data) {
            console.log(data)
        },
        error: function (data) {
            $.toast("服务端数据请求失败！", "text");
        }
    });
}



function fileUpload(data, url, callback) {
    $.ajax({
        method : "post",
        data : data,
        url : url,
        datatype : "json",
        enctype : 'multipart/form-data',
        processData : false,
        contentType : false,
        cache : false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            data = JSON.parse(data);
            var returnCode = data.returnCode;
            var message = data.message;
            var code = data.code;
            if (returnCode == 'Failure') {
                $.toast(message, "cancel", function (toast) {
                    console.log(toast);
                });
                if(code == 202) { window.open(baseUrl + "/login.html", '_parent'); }
                return false;
            } else {
                if(code==202){
                    window.location.href=baseUrl + "/login.html"
                }else if(code==200){
                    callback(data);
                }
            }
        },
        error: function (data) {
            $.toast("服务端数据请求失败！", "text");
        }
    });
}


function fileUploadJsonRes(data, url, callback) {
    $.ajax({
        method : "post",
        data : data,
        url : url,
        datatype : "json",
        enctype : 'multipart/form-data',
        processData : false,
        contentType : false,
        cache : false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            var returnCode = data.returnCode;
            var message = data.message;
            var code = data.code;
            if (returnCode == 'Failure') {
                $.toast(message, "cancel", function (toast) {
                    console.log(toast);
                });
                if(code == 202) { window.open(baseUrl + "/login.html", '_parent'); }
                return false;
            } else {
                if(code==202){
                    window.location.href=baseUrl + "/login.html"
                }else if(code==200){
                    callback(data);
                }
            }
        },
        error: function (data) {
            $.toast("服务端数据请求失败！", "text");
        }
    });
}

function myAjaxTextRespond(method,data,url,callback){
    $.ajax({
        method: method,
        data: data,
        url: url,
        datatype: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            data = JSON.parse(data);
            var returnCode = data.returnCode;
            var message = data.message;
            var code = data.code;
            if (returnCode == 'Failure') {
                $.toast(message, "cancel", function (toast) {
                    console.log(toast);
                });
                if(code == 202) { window.open(baseUrl + "/login.html", '_parent'); }
                return false;
            } else {
                if(code==202){
                    window.location.href=baseUrl + "/login.html"
                }else if(code==200){
                    callback(data);
                }
            }
        },
        error:function(data){
            $.toast("服务端数据请求失败！", "text");
        }
    });
}


function getParams() {
    var url = window.location.href.split("?")[1];
    if (url == undefined) {
        return {}
    }
    var para = url.split("&");
    var len = para.length;
    var res = {};
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr = para[i].split("=");
        res[arr[0]] = arr[1];
    }
    return res;
}

var itemTypeCodesCommon = {
    "buyer": "采购",
    "seller": "销售",
    "investment": "投资",
    "financing": "融资",
    "other": "求助",
    "suggest": "建议"
}
