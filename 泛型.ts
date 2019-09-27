1. //
{
    const fn = <T>(params: T): T => {
        return params
    }

    fn<number>(4)
    fn('aa')//类型推导
    fn({})
}

2. //泛型变量
{
    const fn = <T>(params: T[]): number => {
        return params.length
    }
}

3. //泛型类型
{
    (() => {
        function identity<T>(arg: T): T {
            return arg;
        }

        let myIdentity: <T>(arg: T) => T = identity;
        let myIdentity2: <U>(arg: U) => U = identity;
        console.log(myIdentity === myIdentity2) //true
    })()
}

4. //泛型接口
{
    interface Name<T> {
        (n: T, m: T): T[]
    }
    interface Name2 {
        <T>(n: T, m: T): T[]
    }

    const fn: Name<number> = (nn: number, mm: number): number[] => {
        return [nn, mm]
    }

    const fn2 = <T>(kk: T, ll: T): T[] => {
        console.log(ll)
        return [kk, ll]
    }

    let fn3: Name2 = fn2
    fn3(true, false)

    let fn4: Name<number> = fn
    fn4(1, 2)
}

5. //泛型约束
{
    class N<U> {
        constructor(public name: U) { }
        getName(k: U, j: U): U {
            console.log(k, j)
            return this.name
        }
    }

    class M<T> extends N<T>{
        constructor(private color: T, name: T) {
            super(name)
        }
    }

    interface L {
        length: number
    }

    class H<T extends L> extends N<T>{
        getLength(): number {
            return this.name.length
        }
    }

    let n = new N<string>('Luke')
}

6. //在泛型约束中使用类型参数
{
    (() => {
        function getProperty<T, K extends keyof T>(obj: T, key: K) {
            return obj[key];
        }

        let x = { a: 1, b: 2, c: 3, d: 4 };

        getProperty(x, "a"); // okay
        // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    })()
}

7. //在泛型里使用类类型
{
    (() => {
        class BeeKeeper {
            hasMask: boolean;
        }

        class ZooKeeper {
            nametag: string;
        }

        class Animal {
            numLegs: number;
        }

        class Bee extends Animal {
            keeper: BeeKeeper;
        }

        class Lion extends Animal {
            keeper: ZooKeeper;
        }

        function createInstance<A extends Animal>(c: new () => A): A {
            return new c();
        }

        createInstance(Lion).keeper.nametag;  // typechecks!
        createInstance(Bee).keeper.hasMask;   // typechecks!
    })()
}