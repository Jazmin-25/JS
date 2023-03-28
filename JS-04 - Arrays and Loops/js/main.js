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
console.log("Ejercicio 2") //Construye un patrón, usando un bucle for anidado
for (let i = 1; i < 6; ++i) {
    let resultado =""; //for dentro de otro for
    for(let j=1; j<=i; ++j){
        resultado+="*" //Pusiste 6 porque con 5 solo aparecen 4 en consola
    }console.log(resultado);
}// no le muevas, ya quedo
console.log("Ejercicio 3");