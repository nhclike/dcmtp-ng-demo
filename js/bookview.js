
$(function() {
    //加载头部
    $('#head').load('include/header_nong.html');
    //设置翻页插件
    var $mybook 		= $('#mybook');
    var $bttn_next		= $('#next_page_button');
    var $bttn_prev		= $('#prev_page_button');
    var $loading		= $('#loading');
    var $mybook_images	= $mybook.find('img');
    var cnt_images		= $mybook_images.length;
    var loaded			= 0;

    $mybook_images.each(function(){
        var $img 	= $(this);
        var source	= $img.attr('src');
        $('<img/>').load(function(){
            ++loaded;
            if(loaded == cnt_images){
                $loading.hide();
                $bttn_next.show();
                $bttn_prev.show();
                $mybook.show().booklet({
                    name:               null,                            // name of the booklet to display in the document title bar
                    width:              1400,                             // container width
                    height:             800,                             // container height
                    speed:              600,                             // speed of the transition between pages
                    direction:          'LTR',                           // direction of the overall content organization, default LTR, left to right, can be RTL for languages which read right to left
                    startingPage:       0,                               // index of the first page to be displayed
                    easing:             'easeInOutQuad',                 // easing method for complete transition
                    easeIn:             'easeInQuad',                    // easing method for first half of transition
                    easeOut:            'easeOutQuad',                   // easing method for second half of transition

                    closed:             true,                           // start with the book "closed", will add empty pages to beginning and end of book
                    closedFrontTitle:   null,                            // used with "closed", "menu" and "pageSelector", determines title of blank starting page
                    closedFrontChapter: null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank starting page
                    closedBackTitle:    null,                            // used with "closed", "menu" and "pageSelector", determines chapter name of blank ending page
                    closedBackChapter:  null,                            // used with "closed", "menu" and "chapterSelector", determines chapter name of blank ending page
                    covers:             false,                           // used with  "closed", makes first and last pages into covers, without page numbers (if enabled)

                    pagePadding:        10,                              // padding for each page wrapper
                    pageNumbers:        true,                            // display page numbers on each page

                    hovers:             false,                            // enables preview pageturn hover animation, shows a small preview of previous or next page on hover
                    overlays:           false,                            // enables navigation using a page sized overlay, when enabled links inside the content will not be clickable
                    tabs:               false,                           // adds tabs along the top of the pages
                    tabWidth:           60,                              // set the width of the tabs
                    tabHeight:          20,                              // set the height of the tabs
                    arrows:             false,                           // adds arrows overlayed over the book edges
                    cursor:             'pointer',                       // cursor css setting for side bar areas

                    hash:               false,                           // enables navigation using a hash string, ex: #/page/1 for page 1, will affect all booklets with 'hash' enabled
                    keyboard:           true,                            // enables navigation with arrow keys (left: previous, right: next)
                    next:               $bttn_next,          			// selector for element to use as click trigger for next page
                    prev:               $bttn_prev,          			// selector for element to use as click trigger for previous page

                    menu:               null,                            // selector for element to use as the menu area, required for 'pageSelector'
                    pageSelector:       false,                           // enables navigation with a dropdown menu of pages, requires 'menu'
                    chapterSelector:    false,                           // enables navigation with a dropdown menu of chapters, determined by the "rel" attribute, requires 'menu'

                    shadows:            true,                            // display shadows on page animations
                    shadowTopFwdWidth:  166,                             // shadow width for top forward anim
                    shadowTopBackWidth: 166,                             // shadow width for top back anim
                    shadowBtmWidth:     50,                              // shadow width for bottom shadow

                    before:             function(){},                    // callback invoked before each page turn animation
                    after:              function(){}                     // callback invoked after each page turn animation
                });
            }
        }).attr('src',source);
    });

    //设置标记参数
    $.sign.bindSign('#signx');//初始化
    $.sign.setSignColor('red'); //设置标记框颜色
    $.sign.setBodyColor('rgba(255,255,255,0.5)'); //设置提示背景颜色
    //$.sign.setFontColor('#000');//设置字体颜色
    var m=$.sign.getSignMessage();//获取所有标记数据，返回为数组
    console.log(m);
    var data=[{left:100,top:20,message:"测试"},{left:300,top:100,message:"测试2"}];
    $.sign.loadingSign(data);//载入标记数据

});