// Condicional - recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

//Type assertions - recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

// HTMLElements - recomendado
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'Hello TypeScript';
input.focus();

//Non-null assertion operator (!) - não recomendado
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = 'red';

// Type assertion - não recomendado
const body4 = document.querySelector('body') as unknown as number;
body2.style.backgroundColor = 'red';
