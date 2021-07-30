function AJAX(options) {
    options = options || {};
    options.method = (options.method).toLowerCase() || 'GET';
    options.responseType = options.responseType || 'json';

    let xhr = getXmlHttpRequest();

    if (options.type === 'GET') {
        get(xhr , options.url , formatParams(options.data));
    } else {
        post(xhr , options.url , options.data);
    }

    xhr.onreadystatechange = () => {
        if (requestSuccess(xhr)) {
            options.success(xhr.responseText);
        } else {
            options.fail(xhr.status);
        }
    }
}

function getXmlHttpRequest() {
    return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MicroSoft.XMLHTTP");
}

function formatParams(data) {
    let params = '?'
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            params += `${key}=${data[key]}&`;
        }
    }
    return params.slice(0 , -1);
}

function get(xhr , url , query) {
    xhr.open('GET' , url+query , true);
    xhr.send(null);
}

function post(xhr , url , data) {
    xhr.open('POST' , url , true);
    xhr.setRequestHeader('Content-Type' , 'x-www-form-urlencoded');
    xhr.send(data);
}

function requestSuccess(xhr) {
    return xhr.readyState === 4 && xhr.status === 200;
}

(function () {
    AJAX({
        method: 'GET',
        url: 'https://www.fastmock.site/mock/0389c8c939a91c51f559609775cae4a7/ajax_test/test',
        data: {
            name: 'tzw',
            age: '22'
        },
        success(res) {
            console.log(res);
        },
        fail(res) {
            console.log(res);
        }
    })
})();