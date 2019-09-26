1. //继承
{
    class A {
        getName(name: string = '') {
            console.log(name)
        }
        private age: number //private仅在本类内部使用
        protected sex: boolean //在本类以及派生类内部调用
        private readonly num: number = 3  //readonly仅在声明或者构造函数中初始化赋值
        private readonly num2: number
        constructor(age: number, sex: boolean, private location1?: string, protected location2?: string, public location3?: string) {
            this.age = age
            this.sex = sex
            // readonly
            this.num = 1
            this.num = 5
            this.num2 = 3
            this.num2 = 5
        }
        getAge() {
            console.log(this.age)
        }

        getLocation() {
            // 在构造函数的参数添加 private, protected, public 自动赋值并创建为函数属性
            console.log(this.location1, this.location2, this.location3)
        }
    }

    class B extends A {
        getColor(color: string = 'red') {
            console.log(color)
        }

        getSex() {
            console.log(this.sex)
        }

        test() {
            // this.age  错误 private仅在本类内部使用
        }
    }

    const b = new B(2, false);
    b.getName('Luke') //Luke
    b.getColor('red') //red
    b.getAge()
    //b.sex 错误 protected 在本类以及派生类内部调用
}

2. //存取器
{
    class A {
        private _num: number = 4  //注意添加`_`符号
        get num() {
            console.log('get')
            return this._num
        }

        set num(value) {
            console.log('set')
            this._num = value
        }
    }

    let a = new A()
    a.num // get
    a.num = 1 // set
}

3. //静态属性
{
    class A {
        private static color: string = 'red'
        static fun() {
            console.log(A.color)
        }


    }

    // A.color  错误  注意priva
    A.fun() //red
}

4. //抽象类   
{
    //不同于接口, 抽象类包含成员的实现细节
    abstract class A {
        abstract getName(): void  //必须在派生方法实现
        move(): void {

        }

        constructor(protected name: string) {

        }
    }

    class B extends A {
        getName() {
            console.log(this.name)
        }

        constructor() {
            super('Luke')
        }
    }

    // new A()  错误   抽象类不能够创建对象
    new B().getName()
}

5. //构造函数
{
    class Greeter {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }

    let greeter1: Greeter;  //确定greeter1实例来自于哪个类
    greeter1 = new Greeter();
    console.log(greeter1.greet());

    let greeterMaker: typeof Greeter = Greeter; //greeterMaker的类型是Greeter
    greeterMaker.standardGreeting = "Hey there!";
    let greeter2: Greeter = new greeterMaker();
    console.log(greeter2.greet());
}

6. //接口继承类最后变成了接口... 见接口
{
    class A {
        name: string
    }

    interface B extends A {
        color: string
        [key: string]: string
    }

    let b: B = {
        name: 'Luke',
        color: 'red',
        location: 'xiamen'
    }
    
    let c: B = {
        name: 'Luke',
        color: 'red'
    }
}