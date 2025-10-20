export const name: string = 'linbudu';

export function handler(input: string): void { }

export interface IUser {
  name: string;
  age: number;
  sex?: number;
}

export const users: IUser[] = [];

type A = Partial<IUser>;

const a: A = { name: '' };

type B = Required<IUser>;

const b: B = { age: 1, name: '', sex: 0 };
b.age = 2;
b.name = 'jade';

type C = Pick<IUser, 'name' | 'age' | 'sex'>;


type SayHello<T extends string | number> = `Hello ${T}`;

const s1: SayHello<string> = 'Hello 12';
const s2: SayHello<number> = 'Hello 34';
