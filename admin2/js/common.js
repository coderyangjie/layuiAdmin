/**
 * Created by yangjie on 2018/8/29.
 */
//获取当前网址
var curWwwPath = window.document.location.href;
//获取主机地址之后的目录
var pathName = window.document.location.pathname;
var pos = curWwwPath.indexOf(pathName);
//获取主机地址
var localHostPath = curWwwPath.substring(0,pos);
layui.config({
    base: localHostPath+'/layuiAdmin/admin2/js/modules/'
}).extend({
    dialog: 'dialog',
});

layui.use(['form', 'jquery', 'layer', 'dialog','element'], function() {
    var form = layui.form,
        layer = layui.layer,
        $ = layui.jquery,
        dialog = layui.dialog;

    //全选
    form.on('checkbox(allChoose)', function(data) {
        var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
        child.each(function(index, item) {
            item.checked = data.elem.checked;
        });
        form.render('checkbox');
    });
    //渲染表单
    form.render();

    //顶部添加
    $('.addBtn').click(function() {
        var url=$(this).attr('data-url');

        dialog.page("菜单添加", url,"700px", "620px");
        return false;

    }).mouseenter(function() {

        dialog.tips('添加', '.addBtn');

    });

    //顶部排序
    $('.listOrderBtn').click(function() {

        dialog.confirm({
            message:'您确定要进行排序吗？',
            success:function(){
                layer.msg('确定了')
            },
            cancel:function(){
                layer.msg('取消了')
            }
        })
        return false;

    }).mouseenter(function() {
        dialog.tips('批量排序', '.listOrderBtn');
    });

    //顶部批量删除
    $('.delBtn').click(function() {
        var url=$(this).attr('data-url');
        dialog.confirm({
            message:'您确定要删除选中项',
            success:function(){
                layer.msg('删除了')
            },
            cancel:function(){
                layer.msg('取消了')
            }
        })
        return false;

    }).mouseenter(function() {

        dialog.tips('批量删除', '.delBtn');

    });
    
    //列表添加
    $('#table-list').on('click', '.add-btn', function() {
        var url=$(this).attr('data-url');

        dialog.page("菜单添加", url, "700px", "620px");
        return false;
    })
    //列表删除
    $('#table-list').on('click', '.del-btn', function() {
        var url=$(this).attr('data-url');
        var id = $(this).attr('data-id');
        dialog.confirm({
            message:'您确定要进行删除吗？',
            success:function(){
                layer.msg('确定了')
            },
            cancel:function(){
                layer.msg('取消了')
            }
        })
        return false;
    })
    //列表跳转
    $('#table-list,.tool-btn').on('click', '.go-btn', function() {
        var url=$(this).attr('data-url');
        var id = $(this).attr('data-id');
        window.location.href=url+"?id="+id;
        return false;
    })
    //编辑栏目
    $('#table-list').on('click', '.edit-btn', function() {
        var That = $(this);
        var id = That.attr('data-id');
        var url=That.attr('data-url');
        dialog.page("菜单编辑", url + "?id=" + id, "700px", "620px");
        return false;
    })
});