window.addEventListener("load", function () {
    if (document.height <= window.outerHeight) {
        document.body.style.height = (window.outerHeight + 50) + 'px';
        setTimeout(function () { window.scrollTo(0, 1); }, 50);
    }
    else {
        setTimeout(function () { window.scrollTo(0, 1); }, 0);
    }
}
);