//Ejercicio 1//
let formados = ["Sofía","David","Juan"] //formados en el banco
console.log("Ejercicio 1. Parte 1");
console.log(formados); //se agregan a Sara y Augustin y entra a la caja Sofia
formados.push("Sara");
formados.push("Augustin");
formados.shift();
console.log("Ejercicio 1.Parte 2");
console.log(formados); //David reservo el lugar a Renata y quedo atrás de él
formados.splice(1,0,"Renata");
formados.push("Elena"); //Aparece Elena al final de la fila
console.log("Ejercicio 1. Parte 3");
console.log(formados);
//Ejercicio 2//
console.log("Ejercicio 2") //Construye un patrón, usando un bucle for anidado
for (let i = 1; i < 6; ++i) {
    let resultado =""; //for dentro de otro for
    for(let j=1; j<=i; ++j){
        resultado+="*" //Pusiste 6 porque con 5 solo aparecen 4 en consola
    }console.log(resultado);
}// no le muevas, ya quedo
console.log("Ejercicio 3");
///Ejercicio 3 //
//Escribir bucles while
//1.- imprime repetidamente el valor de la variable xValue
//2.- Disminuye en 0.5 cada vez,
//3.- Siempre que xValue siga siendo positivo
let xValor =5; //variable es xValue
while(xValor >0){ //tiene que ser mayor a 0
    xValor=xValor -0.5; //tiene que disminuir en o.5
    console.log(xValor);//imprimelo en pantalla
}//Primera parte
//imprimir en consola todos los numeros impares entre 1-100 con un ciclo determinado por for o while
//let numero = 1 //
//while (numero >=1 && numero <= 100){
    //numero=numero<=100;
    //numero ++;
//}if (numero % 2 !==0){
  //  console.log(numero);
//}