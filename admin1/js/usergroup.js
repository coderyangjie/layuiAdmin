/**
 * Created by yangjie on 2018/8/13.
 */

var tabledata=[
    {
        "usergroupid":10000,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"

    },{
        "usergroupid":10001,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"

    },{
        "usergroupid":10002,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10003,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10004,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10005,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10006,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10007,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10008,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10009,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10010,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10000,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10011,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10012,
        "usergroupname":"财务部",
        "creattime":"2018-8-13",
        "creater":"张三",
        "sortvalue":1,
        "state":"启用"
    },{
        "usergroupid":10013,
        "usergroupname":"人事部",
        "creattime":"2018-07-13",
        "creater":"张华",
        "sortvalue":13,
        "state":"废除"
    }
];


layui.use(['element','form','jquery','laydate','table'],function(){
    var element=layui.element
        ,form = layui.form
        ,$=layui.jquery
        ,laydate = layui.laydate;



    var table = layui.table;

    table.render({
        elem: '#mytable'
        ,data:tabledata
        ,cols: [[
            {type:'checkbox'}
            ,{field:'usergroupid', title: 'ID', sort: true}
            ,{field:'usergroupname', title: '用户组名称'}
            ,{field:'creattime',  title: '创建时间', sort: true}
            ,{field:'creater', title: '创建人'}
            ,{field:'sortvalue',title: '排序值', sort: true}
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
                    title: '设置用户组成员',
                    content: '内容1'
                }, {
                    title: '设置用户组角色',
                    content: '内容2'
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
                content:$("#usergroup").html()
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
            title:"新增用户组",
            skin:"myclass",
            area:["30%"],
            content:$("#usergroup").html()
        });


        /* 渲染表单 */
        form.render();

    });

});