/**
 * Created by yangjie on 2018/8/13.
 */

var tabledata=[
    {
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    },{
        "roleid":10000,
        "rolename":"超级管理员",
        "creattime":"2018-8-13",
        "creater":"张三",
        "state":"启用"

    }
];


layui.use(['element','form','jquery','laydate','table'],function(){
    var element=layui.element
        ,form = layui.form
        ,$=layui.jquery
        ,laydate = layui.laydate;

    //日期初始化
    laydate.render({
        elem: '#startdate'
    });
    laydate.render({
        elem: '#enddate'
    });

    var table = layui.table;

    table.render({
        elem: '#mytable'
        ,data:tabledata
        ,cols: [[
            {type:'checkbox'}
            ,{field:'roleid', title: 'ID', sort: true}
            ,{field:'rolename', title: '角色名称'}
            ,{field:'creattime',  title: '创建时间', sort: true}
            ,{field:'creater', title: '创建人'}
            ,{field:'state', title: '状态'}
            ,{fixed: 'right',title:"操作",align:'center', toolbar: '#barDemo',width:165}
        ]]
        ,page: true
    });

    //监听工具条
    table.on('tool(operation)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var tr = obj.tr; //获得当前行 tr 的DOM对象

        if(layEvent === 'set'){ //查看
            //弹出一个tab层，用于设置用户组的人员和用户组的角色
            layer.tab({
                area: ['800px', '600px'],
                tab: [{
                    title: '设置角色成员',
                    content: '内容1'
                },{
                    title: '设置角色用户组',
                    content: '内容2'
                },{
                    title: '角色赋权',
                    content: '内容3'
                }]
            });
        } else if(layEvent === 'del'){ //删除
            layer.confirm('真的删除行么', function(index){
                obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                layer.close(index);
                //向服务端发送删除指令
            });
        } else if(layEvent === 'edit'){ //编辑
            //do something
            var index = layer.open({
                type:1,
                title:"编辑",
                skin:"myclass",
                area:["30%"],
                content:$("#addrole").html()
            });
            //同步更新缓存对应的值
            obj.update({
                username: '123'
                ,title: 'xxx'
            });

            /* 渲染表单 */
            form.render();
        }
    });


    //新增按钮的点击事件
    $("#addBtn").click(function(){

        /* 再弹出添加界面 */
        layer.open({
            type:1,
            title:"新增角色",
            skin:"myclass",
            area:["30%"],
            content:$("#addrole").html()
        });


        /* 渲染表单 */
        form.render();

    });

});