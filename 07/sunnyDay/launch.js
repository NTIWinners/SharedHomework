window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (!canvas.getContext) {
        return;
    }
    var ctx = canvas.getContext('2d');

    app(ctx);
}