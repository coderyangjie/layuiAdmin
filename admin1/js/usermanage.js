/**
 * Created by yangjie on 2018/8/8.
 */

var tabledata=[
    {
        "id":10003,
        "accountname":"zhanghua",
        "username":"张华",
        "usergroupname":"办公人员",
        "rolename":"普通管理员",
        "mobile":13365247896,
        "sex":"男",
        "creattime":"2018-08-13",
        "creater":"诗人",
        "state":"可用"
    },{
        "id":10003,
        "accountname":"zhanghua",
        "username":"张华",
        "usergroupname":"办公人员",
        "rolename":"普通管理员",
        "mobile":13365247896,
        "sex":"男",
        "creattime":"2018-08-13",
        "creater":"诗人",
        "state":"可用"
    },{
        "id":10003,
        "accountname":"zhanghua",
        "username":"张华",
        "usergroupname":"办公人员",
        "rolename":"普通管理员",
        "mobile":13365247896,
        "sex":"男",
        "creattime":"2018-08-13",
        "creater":"诗人",
        "state":"可用"
    },{
        "id":10003,
        "accountname":"zhanghua",
        "username":"张华",
        "usergroupname":"办公人员",
        "rolename":"普通管理员",
        "mobile":13365247896,
        "sex":"男",
        "creattime":"2018-08-13",
        "creater":"诗人",
        "state":"可用"
    }
];


layui.use(['element','form','jquery','laydate','table','layer'],function(){
    var element=layui.element
        ,form = layui.form
        ,$=layui.jquery
        ,laydate = layui.laydate
        ,layer = layui.layer;

    //日期初始化
    laydate.render({
        elem: '#startdate'
    });
    laydate.render({
        elem: '#enddate'
    });

    //初始化数据表格
    var table = layui.table;
    table.render({
        elem: '#mytable'
        ,data:tabledata
        ,cols: [[
            {type:'checkbox'}
            ,{field:'accountname',title: '账号名称'}
            ,{field:'username',title: '用户姓名'}
            ,{field:'usergroupname', title: '所属用户组'}
            ,{field:'rolename', title: '所属角色'}
            ,{field:'mobile', title: '手机号码',width:116}
            ,{field:'sex',title: '性别',width:60}
            ,{field:'creattime',title: '创建时间',width:102}
            ,{field:'creater',title: '创建人',width:80}
            ,{field:'state',title: '状态',width:60}
            ,{fixed: 'right',title:"操作",align:'center', toolbar: '#barDemo',width:165}
        ]]
        ,page: true
    });

    //数据表格监听工具条
    table.on('tool(operation)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var tr = obj.tr; //获得当前行 tr 的DOM对象

        if(layEvent === 'del'){ //删除
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
                area:["50%"],
                content:$("#userlayer").html()
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
    $("#addUserBtn").click(function(){
        /* 再弹出添加界面 */
        layer.open({
            type:1,
            title:"新增用户",
            skin:"myclass",
            area:["50%"],
            content:$("#userlayer").html()
        });

        /* 渲染表单 */
        form.render();
    });



});