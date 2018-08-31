/**
 * Created by yangjie on 2018/8/27.
 */
layui.use(['layer', 'form', 'element', 'jquery'], function() {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var $ = layui.jquery;
    var hideBtn = $('#hideBtn');
    var mainLayout = $('#main-layout');
    var mainMask = $('.main-mask');
    //监听导航点击
    element.on('nav(leftNav)', function(elem) {
        //elem为当前点击的DOM对象
        var navA = $(elem).find('a');
        var dataset = navA.context.dataset;

     /*   var id = navA.attr('data-id');
        var url = navA.attr('data-url');
        var text = navA.attr('data-text');*/
        var id = dataset.id;
        var url = dataset.url;
        var text = dataset.text;

        if(!url){
            return;
        }
        var isActive = $('.main-layout-tab .layui-tab-title').find("li[lay-id=" + id + "]");
        if(isActive.length > 0) {
            //切换到选项卡
            element.tabChange('tab', id);
        } else {
            element.tabAdd('tab', {
                title: text,
                content: '<iframe src="' + url + '" name="iframe' + id + '" class="iframe" framborder="0" data-id="' + id + '" scrolling="auto" width="100%"  height="100%"></iframe>',
                id: id
            });
            element.tabChange('tab', id);

        }
        mainLayout.removeClass('hide-side');
    });
    //监听导航点击
    element.on('nav(rightNav)', function(elem) {
        var navA = $(elem).find('a');
        var dataset = navA.context.dataset;
   /*     var id = navA.attr('data-id');
        var url = navA.attr('data-url');
        var text = navA.attr('data-text');*/
        var id = dataset.id;
        var url = dataset.url;
        var text = dataset.text;

        if(!url){
            return;
        }
        var isActive = $('.main-layout-tab .layui-tab-title').find("li[lay-id=" + id + "]");
        if(isActive.length > 0) {
            //切换到选项卡
            element.tabChange('tab', id);
        } else {
            element.tabAdd('tab', {
                title: text,
                content: '<iframe src="' + url + '" name="iframe' + id + '" class="iframe" framborder="0" data-id="' + id + '" scrolling="auto" width="100%"  height="100%"></iframe>',
                id: id
            });
            element.tabChange('tab', id);

        }
        mainLayout.removeClass('hide-side');
    });
    //菜单隐藏显示
    hideBtn.on('click', function() {
        if(!mainLayout.hasClass('hide-side')) {
            mainLayout.addClass('hide-side');
        } else {
            mainLayout.removeClass('hide-side');
        }
    });
    //遮罩点击隐藏
    mainMask.on('click', function() {
        mainLayout.removeClass('hide-side');
    })

    //示范一个公告层
//	layer.open({
//		  type: 1
//		  ,title: false //不显示标题栏
//		  ,closeBtn: false
//		  ,area: '300px;'
//		  ,shade: 0.8
//		  ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
//		  ,resize: false
//		  ,btn: ['火速围观', '残忍拒绝']
//		  ,btnAlign: 'c'
//		  ,moveType: 1 //拖拽模式，0或者1
//		  ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">后台模版1.1版本今日更新：<br><br><br>数据列表页...<br><br>编辑删除弹出功能<br><br>失去焦点排序功能<br>数据列表页<br>数据列表页<br>数据列表页</div>'
//		  ,success: function(layero){
//		    var btn = layero.find('.layui-layer-btn');
//		    btn.find('.layui-layer-btn0').attr({
//		      href: 'http://www.layui.com/'
//		      ,target: '_blank'
//		    });
//		  }
//		});
});

/**
 * 初始化左侧侧边栏导航条
 * @param data
 */
function leftNavBar(data){
    var ulHtml = '<ul class="layui-nav layui-nav-tree" lay-filter="leftNav">';
    for(var i=0;i<data.length;i++){
        //判断该菜单项是否展开
        if(data[i].spread){
            ulHtml += '<li class="layui-nav-item layui-nav-itemed">';
        }else{
            ulHtml += '<li class="layui-nav-item">';
        }
        //判断该菜单项是否有下级菜单
        if(data[i].children != undefined && data[i].children.length > 0){
            ulHtml += '<a href="javascript:;">';
            if(data[i].icon != undefined && data[i].icon != ''){
                if(data[i].icon.indexOf("icon-") != -1){
                    ulHtml += '<i class="iconfont '+data[i].icon+'" data-icon="'+data[i].icon+'"></i>';
                }else if(data[i].icon.indexOf("layui-") != -1) {
                    ulHtml += '<i class="layui-icon ' + data[i].icon + '" data-icon="' + data[i].icon + '"></i>';

                }else{
                    ulHtml += '<i class="iconfont" data-icon="'+data[i].icon+'">'+data[i].icon+'</i>';
                }
            }
            ulHtml += '<cite>'+data[i].title+'</cite>';
            ulHtml += '<span class="layui-nav-more"></span>';
            ulHtml += '</a>'
            ulHtml += '<dl class="layui-nav-child">';
            for(var j=0;j<data[i].children.length;j++){
                ulHtml += '<dd><a href="javascript:;" data-url="'+data[i].children[j].href+'" data-id="'+data[i].children[j].id+'" data-text="'+data[i].children[j].title+'">';
                if(data[i].children[j].icon != undefined && data[i].children[j].icon != ''){
                    if(data[i].children[j].icon.indexOf("icon-") != -1){
                        ulHtml += '<i class="iconfont '+data[i].children[j].icon+'" data-icon="'+data[i].children[j].icon+'"></i>';
                    }else if(data[i].children[j].icon.indexOf("layui-") != -1){
                        ulHtml += '<i class="layui-icon '+data[i].children[j].icon+'" data-icon="'+data[i].children[j].icon+'"></i>';
                    }else if(data[i].children[j].icon.indexOf("l-line") != -1){
                        ulHtml += '<i class="' + data[i].children[j].icon + '" data-icon="' + data[i].children[j].icon + '"></i>';
                    }else{
                        ulHtml += '<i class="iconfont" data-icon="'+data[i].children[j].icon+'">'+data[i].children[j].icon+'</i>';
                    }
                }
                ulHtml += '<cite>'+data[i].children[j].title+'</cite></a></dd>';
            }
            ulHtml += "</dl>"
        }else{
            ulHtml += '<a href="javascript:;" data-url="'+data[i].href+'" data-id="'+data[i].id+'" data-text="'+data[i].title+'" >';
            if(data[i].icon != undefined && data[i].icon != ''){
                if(data[i].icon.indexOf("icon-") != -1){
                    ulHtml += '<i class="iconfont '+data[i].icon+'" data-icon="'+data[i].icon+'"></i>';
                }else if(data[i].icon.indexOf("layui-") != -1){
                    ulHtml += '<i class="layui-icon '+data[i].icon+'" data-icon="'+data[i].icon+'"></i>';
                }else{
                    ulHtml += '<i class="iconfont" data-icon="'+data[i].icon+'">'+data[i].icon+'</i>';
                }
            }
            ulHtml += '<cite>'+data[i].title+'</cite></a>';
        }
        ulHtml += '</li>'
    }
    ulHtml += '</ul>';
    return ulHtml;
}