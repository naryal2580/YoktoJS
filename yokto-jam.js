const $r = (callback) => { window.addEventListener("DOMContentLoaded", () => {callback();});};
const $_ = async (method, url, data) => {
    const resp = await fetch(url, {
        method: method,
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await resp.json();
}
