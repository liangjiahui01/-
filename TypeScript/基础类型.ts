/**
 * 基础类型
 */

1. //布尔值
{
    let isDone: boolean = false || true
}

2. //数字
{
    let count: number = 1 || 2.3
}

3. //字符串
{
    let str: string = '' || 'f' || 'ljh'
}

4. //数组
{
    let arr: Array<string> = ['', 'str']
    let arr2: number[] = [2, 0]
}

5. //元组 Tuple
{
    let x: [boolean, number] = [true, 2]
}

6. //枚举
{
    //下标和key相互映射
    enum Color { red, blue, yellow } //默认从0开始
    let c: Color
    //User = { 1: "location", 2: "name", 3: "sex", location: 1, name: 2, sex: 3 };
    //Object.keys(User) = ['1','2','3','location','name','sex']
    enum User { location = 1, name, sex }
    let use: User = User.name
    let name: number = User.location
    'name' === User[2]
    let str: string = User[3]
}

7. //任意值
{
    let notSure: any = 3 //对此变量在编译阶段不进行任何检查
    notSure = '123'
    notSure = [false]
    notSure.xiaxiedehanshu() //方法瞎写的
}

8. //空值
{
    let num: void = null
    let num2: void = undefined
    const fn = (): void => { }
}

9. //null and undefined
{
    let u: undefined = undefined;
    let n: null = null;
    n = undefined //互相赋值
    u = null //互相赋值
    // null and undefined 是所有类型的子类型
    let num: number = null
    let num2: string[] = undefined
}

10. //Never
{
    const fn = (): never => {
        throw '2'
    }
}

/**
 * 类型断言
 */

1. //尖括号<>
{
    let val: any = 'aa';
    (<number>val) = 3

    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    // let val2: string = 'aa';
    // (<number>val2) = 3
    // 编译失败  val2的类型已经明确声明无法进行断言为number
}

2. //as
{
    let val: any = 'aa';
    (val as number) = 3

    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    // let val2: string = 'aa';
    // (<number>val2) = 3
    // 编译失败  val2的类型已经明确声明无法进行断言为number
}