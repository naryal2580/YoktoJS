const $ = (query) => {
    const elems = document.querySelectorAll(query);
    if (elems.length === 1) {
        return elems[0];
    }
    return elems;
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
    }
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
