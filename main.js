//Guardar en una constante la información de p1:
const p1 = document.getElementById('p1'); 
const h2List = document.getElementsByClassName("subtitle");
const textInput = document.getElementById("username-input"); //Vamos a modificar los elementos con inputs
const element1 = document.querySelector("#p1"); // podemos usar el método querySelector para llamar clases o ID´s como hacemos en CSS.
const element2 = document.querySelector(".subtitle");

console.log(p1);
console.log(h2List);
console.log(textInput);

textInput.addEventListener("input", (e) => {
    p1.textContent = e.target.value;
}); //colocamos un callback definido en la segunda entrada