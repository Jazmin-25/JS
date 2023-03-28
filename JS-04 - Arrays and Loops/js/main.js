let formados = ["Sofía","David","Juan"] //formados en el banco
console.log("Parte 1");
console.log(formados); //se agregan a Sara y Augustin y entra a la caja Sofia
formados.push("Sara");
formados.push("Augustin");
formados.shift();
console.log("Parte 2");
console.log(formados); //David reservo el lugar a Renata y quedo atrás de él
formados.splice(1,0,"Renata");
formados.push("Elena"); //Aparece Elena al final de la fila
console.log("Parte 3");
console.log(formados);