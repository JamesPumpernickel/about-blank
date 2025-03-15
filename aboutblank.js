var url = "about:blank";
var src = window.location.href; // Use the current page URL
if (url) {
    var win;
    document.querySelector('button').onclick = function() {
        if (win) {
            win.focus();
        } else {
            win = window.open(url);
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = src;
            win.document.body.appendChild(iframe);
        }
    };
}
