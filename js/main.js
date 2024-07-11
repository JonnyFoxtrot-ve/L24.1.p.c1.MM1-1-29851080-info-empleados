import Cl_empleado from "./Cl_empleado.js";
import Cl_empresa from "./Cl_empresa.js";

let empleado1 = new Cl_empleado("Juan", 2, 100);
let empleado2 = new Cl_empleado("Ana", 2, 120);
let empleado3 = new Cl_empleado("Lin", 1, 200);
let empleado4 = new Cl_empleado("Mary", 2, 50);
let empleado5 = new Cl_empleado("Carlos", 1, 150);

let empresa = new Cl_empresa();

empresa.procesare(empleado1);
empresa.procesare(empleado2);
empresa.procesare(empleado3);
empresa.procesare(empleado4);
empresa.procesare(empleado5);

let salida = document.getElementById("salida");
salida.innerHTML += `<br> Monto total pagado a obreros: ${empresa.montoTotalO()}$<br>`;
salida.innerText += `<br> Promedio pagado a 3 obreros: ${empresa.promPagadoO()}#<br>`;
salida.innerHTML += `<br> Monto total pagado a administrativos: ${empresa.montoTotalA()}<br>$`;
salida.innerText += `<br> Promedio pagado a 2 obreros: ${empresa.promPagadoA()}$<br>`;
