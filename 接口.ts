1. //可选属性 只读属性
{
    interface LJH {
        name: string,
        sex?: boolean, //?代表可选属性
        readonly age: number //readonly  仅在创建时可以赋值
        //const针对变量,readonly针对属性
    }

    const getLjhInfo = (ljh: LJH): void => {
        console.log(ljh.name)
        console.log(ljh.sex)
        //ljh.age++ ;readonly  仅在创建时可以赋值
        console.log(ljh.age)
    }

    let ljh: LJH = {
        name: 'luke',
        age: 10
    }

    getLjhInfo(ljh)

    let ro: ReadonlyArray<number> = [1, 2, 3, 4, 5]
    // ro[3] = 4  编译失败    数组每一项在只能在数组创建的时候进行复制
}

2. //额外属性
{
    interface T {
        name: number
        [n: string]: number
    }

    let obj: T = {
        a: 2,
        b: 3,
        name: 1
    }
}

3. //函数类型
{
    interface S {
        (name: string, location: string, id: number): boolean
    }

    const fn: S = (s, l, i) => { return false }
    // fn(name: string, location: string, id: number): boolean
}

4. //可索引的类型
//共有支持两种索引签名：字符串和数字。 
//可以同时使用两种类型的索引，
//但是数字索引的返回值必须是字符串索引返回值类型的子类型。
{
    interface StringArray {
        [i: number]: string;
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0];

    class Animal {
        name: string;
    }
    class Dog extends Animal {
        breed: string;
    }

    // 错误：使用'string'索引，有时会得到Animal!
    interface NotOkay {
        // [x: number]: Animal;
        [x2: string]: Dog;
    }

    interface NumberDictionary {
        length: number;    // 可以，length是number类型
        // name: string;      // 错误，`name`的类型与索引类型返回值的类型不匹配
        [t: string]: number;
    }

    interface A {
        readonly [t: number]: boolean
    }

    let a: A = [true, false]
    // a[3] = false  //错误
    // a[1] =true   //错误
}

5. //类类型  ***
{
    interface C {
        new(t1: string, t2: Array<number>, t3: boolean): B
    }

    interface B {
        getColor()
        time: Date
        getTime()
    }

    class Clock implements B {
        time: Date;
        getTime = function () { }
        getColor = () => { }
        constructor(a: string, b: Array<number>, c: boolean) {

        }
    }

    const createClock = (Clock: C, a: string, b: Array<number>, c: boolean): B => {
        return new Clock(a, b, c);
    }

    // let c = new Clock('', [1], false)
    let c = createClock(Clock, '', [1], false)
}

6. //继承接口
{
    interface Shape {
        color: string
    }

    interface Square extends Shape {
        sideLength: number
    }

    let square = <Square>{}
    // square.name =3  错误
    square.color = 'red'
    square.sideLength = 3

    interface A {
        n: number
    }
    interface B {
        m: string
    }
    interface C extends A, B {
        k: boolean
    }

    let c = <C>{}
    c.k = false
    c.m = ''
    c.n = 2
}

7. //接口继承类
{
    class C {
        name: string
    }

    interface A extends C {
        getName(): void
    }

    class D implements A {
        getName() {

        }
        constructor(public name: string) { }
    }

    class B extends C implements A {
        getName(): void {
        }
    }

    let b = new B()
}