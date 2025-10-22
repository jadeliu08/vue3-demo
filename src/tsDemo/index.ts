export {}
/*
export function handler(input: string): void { }
* */

/*
export interface IUser {
  name: string;
  age: number;
  sex?: number;
}

type A = Partial<IUser>;
type B = Required<IUser>;
type C = Pick<IUser, 'name'>;

export const users: IUser[] = [];
*/

/*
type SayHello<T extends string | number> = `Hello ${T}`;

const s1: SayHello<string> = 'Hello 12';
const s2: SayHello<number> = 'Hello 34';
*/

/*interface Animal {
  eat(): void;
}

interface Bnimal {
  wang(): void;
}

interface Dog extends Animal {
  bite(): void;
}*/

/*
const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;
type app = typeof APP[number];
 */


/*
 type Person = { age: number; name: string; alive: boolean };
 type Age = Person['age];
 */


/*
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
] as const;
type Person = typeof MyArray[number];
const p1: Person = {};
*/

/*
const MyArray2 = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
export type Person2 = typeof MyArray2;
const p2: Person2 = {};
*/

/*const ss = Symbol('symbol');
interface Person {
  name: string;
  age: number;
  sex: boolean;
  at: symbol;
  1: number;
  [ss]: symbol;
}
type PropEventSource<T> = {
  on<K extends string & keyof T>(eventName: `${K}Changed`, callback: (newValue: T[K]) => void): void;
}

const pes: PropEventSource<Person> = {
  on: () => {},
};

pes.on('atChanged', (value) => {

});*/


/*
as const用法
1、函数内部
type Colour = 'red' | 'green' | 'blue';
type Variant = 'light' | 'dark';
function createColourVariant(colour: Colour, variant: Variant) {
  return `${variant}-${colour}` as const;
}
const dd = createColourVariant('red', 'dark');
* 2、对象用法
* const obj = { name: 'ttt', foo: { count: 1 }} as const;
* 3、数组用法
  const my = ['Tim', 'Tony', 'Bob'] as const;
  const my = [{ name: ''}, { name: '' }] as const;
*/

export interface Person {
  readonly name: string;
  readonly age: number;
}


