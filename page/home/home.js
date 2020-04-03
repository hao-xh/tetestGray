var swiper = {
    // 储存获取到的轮播数据
    swiperData: [],
    mySwiper: null,
    // 获取轮播图数据
    init: function (callback) {
        var self = this;
        $.ajax({
            url: './home.json',
            success: function (res) {
                self.swiperData = res.swiper;
                self.addImage(callback);
            }
        })
    },
    // 增加轮播图数据
    addImage: function (callback) {
        var str = '';
        // tpl中已将map修改为for循环
        this.swiperData.map(function (i) {
            str += '<div class="swiper-slide"><a class="zoomImg" href="javaScript: void 0;"><img src="' + i.image + '" alt=""></a></div>';
            $('.swiper-wrapper').html(str);
        });
        $('.itemTitle').html(this.swiperData[0].text);
        this.swiperLoad(callback);
    },
    // 加载轮播图
    swiperLoad: function (callback) {
        var self = this;
        self.mySwiper = new Swiper('.swiper-container', {
            // 自动轮播时间
            // autoplay: 3800,
            autoplay: 1500,
            // 轮播
            loop: true,
            // 分页器
            pagination: '.swiper-pagination',
            // 设置分页器可点击
            paginationClickable: true,
            // 设置在IE7-9上不使用切换动画（节省内存，可使浏览器不卡顿）
            DOMAnimation: false,
            // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // autoplayDisableOnInteraction: false,
            //拖动释放时不会输出信息，阻止click冒泡。拖动Swiper时阻止click事件。
            preventLinksPropagation:true,
            // 更改item项
            onSlideChangeStart: function (swiper) {
                $('.itemTitle').html(self.swiperData[swiper.activeLoopIndex].text);
            },
        })
        callback(self.mySwiper);
    },
}
