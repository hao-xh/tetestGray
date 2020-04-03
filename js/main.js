function isGray() {
    return !0;
}
function isIE() {
    if(!!window.ActiveXObject || "ActiveXObject" in window){
      return true;
    }else{
      return false;
　　 }
}

/**
 *引入页眉及页脚
 *需要创建class为header和footer的元素
 */
// 导航蓝色页脚灰色
function importHeadFoot() {
    $('.header').load('./../head/head.html');
    $('.footer').load('./../foot/foot.html');
    
}
// 导航白色页脚灰色
function importHeadFoot_white() {
    $('.header_white').load('./../head_white/head_white.html');
    $('.footer_white').load('./../foot_white/foot_white.html');
}
// 导航白色页脚黑色
function importHeadFoot_white2() {
    $('.header_white').load('./../head_white/head_white.html');
    $('.footer').load('./../foot/foot.html');
}
/**
 * 获取当前元素对应的目标元素
 * @param {obj} ev event对象
 * @param {obj} curObj 当前点击对象
 * @param {string} tarObjName 目标对象的class名
 */
function getEle(ev, curObj, tarObjName) {
    var ev = event || window.event,
        target = ev.target || ev.srcElement;
    if ($(target).attr('class') === $(curObj).attr('class')) {
        getParent(curObj, function (obj) {
            if (typeof (obj) !== 'string') {
                $(obj).remove();
            } else {
                console.log('没找到');
                return;
            }
        });
    }
    // 闭包获取点击元素的父元素
    function getParent(curObj, callback) {
        if (curObj.parentNode.nodeName.toLowerCase() !== 'body') {
            if (curObj.parentNode.className === tarObjName) {
                callback(curObj.parentNode);
            } else {
                curObj = curObj.parentNode;
                getParent(curObj, callback);
            }
        } else {
            callback('body');
        }
    }
}
// 返回顶部
function goToTop() {
    $('html,body').animate({scrollTop: 0},200);
}

// 打开链接
function openUrl(url,target) {
    var event = window.event || arguments.callee.caller.arguments[0];
    var tar = event.target || event.srcElement;
    if(tar.nodeName.toLowerCase() === 'a') return;
    target !== 'blank' ? window.location.href = url : window.open(url);
}