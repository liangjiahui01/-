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
1.; //继承
{
    var A = /** @class */ (function () {
        function A(age, sex, location1, location2, location3) {
            this.location1 = location1;
            this.location2 = location2;
            this.location3 = location3;
            this.num = 3; //readonly仅在声明或者构造函数中初始化赋值
            this.age = age;
            this.sex = sex;
            // readonly
            this.num = 1;
            this.num = 5;
            this.num2 = 3;
            this.num2 = 5;
        }
        A.prototype.getName = function (name) {
            if (name === void 0) { name = ''; }
            console.log(name);
        };
        A.prototype.getAge = function () {
            console.log(this.age);
        };
        A.prototype.getLocation = function () {
            // 在构造函数的参数添加 private, protected, public 自动赋值并创建为函数属性
            console.log(this.location1, this.location2, this.location3);
        };
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.getColor = function (color) {
            if (color === void 0) { color = 'red'; }
            console.log(color);
        };
        B.prototype.getSex = function () {
            console.log(this.sex);
        };
        B.prototype.test = function () {
            // this.age  错误 private仅在本类内部使用
        };
        return B;
    }(A));
    var b = new B(2, false);
    b.getName('Luke'); //Luke
    b.getColor('red'); //red
    b.getAge();
    //b.sex 错误 protected 在本类以及派生类内部调用
}
2.; //存取器
{
    var A = /** @class */ (function () {
        function A() {
            this._num = 4; //注意添加`_`符号
        }
        Object.defineProperty(A.prototype, "num", {
            get: function () {
                console.log('get');
                return this._num;
            },
            set: function (value) {
                console.log('set');
                this._num = value;
            },
            enumerable: true,
            configurable: true
        });
        return A;
    }());
    var a = new A();
    a.num; // get
    a.num = 1; // set
}
3.; //静态属性
{
    var A_1 = /** @class */ (function () {
        function A() {
        }
        A.fun = function () {
            console.log(A.color);
        };
        A.color = 'red';
        return A;
    }());
    // A.color  错误  注意priva
    A_1.fun(); //red
}
4.; //抽象类   
{
    //不同于接口, 抽象类包含成员的实现细节
    var A = /** @class */ (function () {
        function A(name) {
            this.name = name;
        }
        A.prototype.move = function () {
        };
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super.call(this, 'Luke') || this;
        }
        B.prototype.getName = function () {
            console.log(this.name);
        };
        return B;
    }(A));
    // new A()  错误   抽象类不能够创建对象
    new B().getName();
}
5.; //构造函数
{
    var Greeter_1 = /** @class */ (function () {
        function Greeter() {
        }
        Greeter.prototype.greet = function () {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        };
        Greeter.standardGreeting = "Hello, there";
        return Greeter;
    }());
    var greeter1 = void 0; //确定greeter1实例来自于哪个类
    greeter1 = new Greeter_1();
    console.log(greeter1.greet());
    var greeterMaker = Greeter_1; //greeterMaker的类型是Greeter
    greeterMaker.standardGreeting = "Hey there!";
    var greeter2 = new greeterMaker();
    console.log(greeter2.greet());
}
