/* 
 * @Author: fengqiaogang
 * @Date:   2015-04-13
 */

var process = require('child_process');

+function () {
    var exec = process.execFile;
    var free = exec('./jekyll-start.sh', function (error) {
        error && console.log(error);
    });
    free.stdout.on('data', function (info) {
        console.log(info);
    });
    free.stderr.on('data', function (info) {
        console.log(info);
    });
    free.on('exit', function (code, signal) {
        console.log("stop jekyll server");
    });
}();