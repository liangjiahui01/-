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
1.; //
{
    var fn = function (params) {
        return params;
    };
    fn(4);
    fn('aa'); //类型推导
    fn({});
}
2.; //泛型变量
{
    var fn = function (params) {
        return params.length;
    };
}
3.; //泛型类型
{
    (function () {
        function identity(arg) {
            return arg;
        }
        var myIdentity = identity;
        var myIdentity2 = identity;
        console.log(myIdentity === myIdentity2); //true
    })();
}
4.; //泛型接口
{
    var fn = function (nn, mm) {
        return [nn, mm];
    };
    var fn2 = function (kk, ll) {
        console.log(ll);
        return [kk, ll];
    };
    var fn3 = fn2;
    fn3(true, false);
    var fn4 = fn;
    fn4(1, 2);
}
5.; //泛型约束
{
    var N = /** @class */ (function () {
        function N(name) {
            this.name = name;
        }
        N.prototype.getName = function (k, j) {
            console.log(k, j);
            return this.name;
        };
        return N;
    }());
    var M = /** @class */ (function (_super) {
        __extends(M, _super);
        function M(color, name) {
            var _this = _super.call(this, name) || this;
            _this.color = color;
            return _this;
        }
        return M;
    }(N));
    var H = /** @class */ (function (_super) {
        __extends(H, _super);
        function H() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        H.prototype.getLength = function () {
            return this.name.length;
        };
        return H;
    }(N));
    var n = new N('Luke');
}
6.; //在泛型约束中使用类型参数
{
    (function () {
        function getProperty(obj, key) {
            return obj[key];
        }
        var x = { a: 1, b: 2, c: 3, d: 4 };
        getProperty(x, "a"); // okay
        // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    })();
}
7.; //在泛型里使用类类型
{
    (function () {
        var BeeKeeper = /** @class */ (function () {
            function BeeKeeper() {
            }
            return BeeKeeper;
        }());
        var ZooKeeper = /** @class */ (function () {
            function ZooKeeper() {
            }
            return ZooKeeper;
        }());
        var Animal = /** @class */ (function () {
            function Animal() {
            }
            return Animal;
        }());
        var Bee = /** @class */ (function (_super) {
            __extends(Bee, _super);
            function Bee() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Bee;
        }(Animal));
        var Lion = /** @class */ (function (_super) {
            __extends(Lion, _super);
            function Lion() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Lion;
        }(Animal));
        function createInstance(c) {
            return new c();
        }
        createInstance(Lion).keeper.nametag; // typechecks!
        createInstance(Bee).keeper.hasMask; // typechecks!
    })();
}
