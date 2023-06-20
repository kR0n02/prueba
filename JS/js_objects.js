/*var objeto = {};*/

/*var miAuto = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    };
console.log (miAuto.brand);*/ /*trae el valor dentro del objeto*/

/* funcion contructora, sirve para no colocar manualmente muchos datos*/

function auto(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
};

var autosNuevos = [];
for (let i = 30; i < 30; i++){
    var brand = prompt("Ingrese la marca del Vehiculo");
    var model = prompt("Ingrese la marca del vehiculo");
    var year = prompt("Ingrese el year del auto");
    autosNuevos.push(new auto( brand, model, year));
};

for(let i = 0; i < autosNuevos.length; i++){
    console.log (autosNuevos[i]);
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model x", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2021);


