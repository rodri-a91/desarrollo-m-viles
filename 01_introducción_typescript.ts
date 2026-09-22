console.log("hola");

function sumar(num1: any, num2: any) {
  return num1 + num2;
}
console.log(sumar(2, 4));
console.log(sumar(2, "4"));

function calcularArea(side: number) {
  return side * side;
}

const lado: number = 5;

console.log(`El área del cuadrado de lado ${lado} es ${calcularArea(lado)}`);

const persona = {
  edad: 10,
  nombre: "pepe",
};

console.log(persona.edad);
persona.edad = 25;
console.log(persona.edad);

const array = [1, 2, 3, 4, "hola"];
const arrayTipado: string[] = ["hola", "adiós"];

const array2: number[] = [1, 2, 3, 4, 5];

for (const dato of array2) {
  console.log(dato);
}

enum colores {blue, red, green, black}

function merge (valor1:string | number, valor2: string|number){
  if (typeof valor1 === "number" && typeof(valor2) === "number") {
    return valor1 + valor2
  }
  if (typeof valor1 === "string" && typeof(valor2) === "string") {
    return valor1 + valor2
  }
  throw new Error ("error tipo")
}

console.log(merge(1,2))

function procesar (browser: "firefox" | "edge") {
  console.log("valid browser")
}
procesar ("firefox")
//procesar("chrome")