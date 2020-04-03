$(function(){
    addNavData(navData,$('.nav'));
    // handleWindowSize();
});
// $(window).bind('resize',handleWindowSize);
function handleWindowSize() {
    var num = $('body').width() + 15;
    $('.test-log').html(num);
    // if(num < 915) {
    //     $('.navPC').css('display','none');
    //     $('.navMobile').css('display','block');
    // }

}

/**
 *增加导航内容
 *
 * @param {arr} data 导航内容
 * @param {obj} parentObj 要增加到其的父元素
 */
function addNavData(data,parentObj) {
    data = data || [];
    for(var i=0; i<data.length; i++) {
        var $li = $('<li class="item"></li>');
        data.length-1 === index ? $li.addClass('marginRN') : null;
        $li.attr('data-index',index);
        $li.html('<a href="'+data[i].url+'" alt="">'+data[i].text+'</a>');
        if(data[i].erji) {
            $li.append(addNav2Data(data[i].erji,index))
        }
        parentObj.append($li);

    }
}

function addNav2Data(data,parIndex) {
    var oDiv = $('<div class="erjiNavWrap"></div>');
    var oUl = $('<ul class="clear"></ul>');
    oUl.append('<ol class="sanjiao"><span></span></ol>');
    parIndex === 1 ? oDiv.addClass('duoping') : parIndex === 2 ? oDiv.addClass('shenhe') : parIndex === 4 ? oDiv.addClass('mobileR') : null;
    for(var i=0; i<data.length; i++) {
        var ol = $('<ol class="item"></ol>');
        ol.html('<a href="'+data[i].url+'" alt="">'+data[i].text+'</a>');
        oUl.append(ol);
    }
    oDiv.append(oUl);
    return oDiv;
}