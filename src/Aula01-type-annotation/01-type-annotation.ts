const nome = 'João'; // type annotation
const idade = 25; // type annotation
const adulto: boolean = idade > 18 ? true : false; // boolean é um tipo primitivo
const simbolo = Symbol('Simbolo'); // Cria um símbolo
const big = 10n; // bigint is a native type

console.log(nome);
console.log(idade);
console.log(adulto);
console.log(simbolo);
console.log(big);

//Arrays

const numbersArray: Array<number> = [1, 2, 3, 4, 5];
console.log(numbersArray);

//Objetos
const pessoa: { nome: string; idade: number; adulto?: boolean } = { nome: 'João', idade: 25 };
console.log(pessoa);

//Funções
/*
function soma(x: number, y: number): number {
    const add = x + y;
    return add;
}
console.log(soma(1, 2));
*/
