/*入口文件*/
/*导入model01.js*/
var {add} = require("./model01")
var Vue=require("./vue.min")
var VM=new Vue({
    el:"#app",
    data:{
        name:"黑马程序员",
        num1:0,
        num2:0,
        result:0,
        /*url:"www.baidu.com"*/
    },
    methods:{
        change:function(){
            /*方法中访问本地变量需要运用this关键字*/
            this.result=add(Number.parseInt(this.num1),Number.parseInt(this.num2))
            /*this.result=Number.parseInt(this.num1)*Number.parseInt(this.num2)*/
        }
    }
})