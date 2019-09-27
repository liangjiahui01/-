var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
1.; //可选属性 只读属性
{
    var getLjhInfo = function (ljh) {
        console.log(ljh.name);
        console.log(ljh.sex);
        //ljh.age++ ;readonly  仅在创建时可以赋值
        console.log(ljh.age);
    };
    var ljh = {
        name: 'luke',
        age: 10
    };
    getLjhInfo(ljh);
    var ro = [1, 2, 3, 4, 5];
    // ro[3] = 4  编译失败    数组每一项在只能在数组创建的时候进行复制
}
2.; //额外属性
{
    var obj = {
        a: 2,
        b: 3,
        name: 1
    };
}
3.; //函数类型
{
    var fn = function (s, l, i) { return false; };
    // fn(name: string, location: string, id: number): boolean
}
4.; //可索引的类型
//共有支持两种索引签名：字符串和数字。 
//可以同时使用两种类型的索引，
//但是数字索引的返回值必须是字符串索引返回值类型的子类型。
{
    var myArray = void 0;
    myArray = ["Bob", "Fred"];
    var myStr = myArray[0];
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Dog;
    }(Animal));
    var a = [true, false];
    // a[3] = false  //错误
    // a[1] =true   //错误
}
5.; //类类型  ***
{
    var Clock = /** @class */ (function () {
        function Clock(a, b, c) {
            this.getTime = function () { };
            this.getColor = function () { };
        }
        return Clock;
    }());
    var createClock = function (Clock, a, b, c) {
        return new Clock(a, b, c);
    };
    // let c = new Clock('', [1], false)
    var c = createClock(Clock, '', [1], false);
}
6.; //继承接口
{
    var square = {};
    // square.name =3  错误
    square.color = 'red';
    square.sideLength = 3;
    var c = {};
    c.k = false;
    c.m = '';
    c.n = 2;
}
7.; //接口继承类
{
    var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    var D = /** @class */ (function () {
        function D(name) {
            this.name = name;
        }
        D.prototype.getName = function () {
        };
        return D;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.getName = function () {
        };
        return B;
    }(C));
    var b = new B();
}
