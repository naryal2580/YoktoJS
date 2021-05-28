const $ = (query) => {
    const elems = document.querySelectorAll(query);
    if (elems.length === 1) {
        return elems[0];
    };
    return Array.prototype.slice.call(elems);
};
const _ = (parentSelector, tag, attrs, innerText) => {
    var parentElem = $(parentSelector);
    if ('length' in parentElem) {
        parentElem = parentElem[0];
    }
    let elem = document.createElement(tag);
    if ( attrs ) {
        if ( !('length' in attrs) ) {
            var attrs = [attrs];
        };
        attrs.forEach( (attr) => {
            for (key in attr) {
                elem.setAttribute(key, attr[key]);
            };
        });
    }
    if (innerText) {
        elem.innerText = innerText;
    };
    parentElem.appendChild(elem);
};
const $$ = (callback) => {
    window.addEventListener("DOMContentLoaded", () => {
        callback();
    });
};
const $_ = async (method, url, data) => {
    var headers = {};
    if (data) {
        headers['Content-Type'] = 'application/json';
    };
    const resp = await fetch(url, {
        method: method,
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await resp.json();
};
