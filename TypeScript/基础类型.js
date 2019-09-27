/**
 * 基础类型
 */
1.; //布尔值
{
    var isDone = false || true;
}
2.; //数字
{
    var count = 1 || 2.3;
}
3.; //字符串
{
    var str = '' || 'f' || 'ljh';
}
4.; //数组
{
    var arr = ['', 'str'];
    var arr2 = [2, 0];
}
5.; //元组 Tuple
{
    var x = [true, 2];
}
6.; //枚举
{
    //下标和key相互映射
    var Color = void 0;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["blue"] = 1] = "blue";
        Color[Color["yellow"] = 2] = "yellow";
    })(Color || (Color = {})); //默认从0开始
    var c = void 0;
    //User = { 1: "location", 2: "name", 3: "sex", location: 1, name: 2, sex: 3 };
    //Object.keys(User) = ['1','2','3','location','name','sex']
    var User = void 0;
    (function (User) {
        User[User["location"] = 1] = "location";
        User[User["name"] = 2] = "name";
        User[User["sex"] = 3] = "sex";
    })(User || (User = {}));
    var use = User.name;
    var name_1 = User.location;
    'name' === User[2];
    var str = User[3];
}
7.; //任意值
{
    var notSure = 3; //对此变量在编译阶段不进行任何检查
    notSure = '123';
    notSure = [false];
    notSure.xiaxiedehanshu(); //方法瞎写的
}
8.; //空值
{
    var num = null;
    var num2 = undefined;
    var fn = function () { };
}
9.; //null and undefined
{
    var u = undefined;
    var n = null;
    n = undefined; //互相赋值
    u = null; //互相赋值
    // null and undefined 是所有类型的子类型
    var num = null;
    var num2 = undefined;
}
10.; //Never
{
    var fn = function () {
        throw '2';
    };
}
/**
 * 类型断言
 */
1.; //尖括号<>
{
    var val = 'aa';
    val = 3;
    var someValue = "this is a string";
    var strLength = someValue.length;
    // let val2: string = 'aa';
    // (<number>val2) = 3
    // 编译失败  val2的类型已经明确声明无法进行断言为number
}
2.; //as
{
    var val = 'aa';
    val = 3;
    var someValue = "this is a string";
    var strLength = someValue.length;
    // let val2: string = 'aa';
    // (<number>val2) = 3
    // 编译失败  val2的类型已经明确声明无法进行断言为number
}
