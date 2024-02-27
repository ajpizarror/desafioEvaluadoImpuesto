import {Impuestos} from './impuestos.js';
import {Cliente} from './cliente.js';

let impuestos = new Impuestos(10000, 100);
let clienteNuevo = new Cliente("Alfonso", impuestos);

console.log(clienteNuevo);
console.log(impuestos);
console.log(clienteNuevo.calcularImpuesto());

impuestos.montoBrutoAnual = 15000;
impuestos.deducciones = 1000;
console.log(clienteNuevo.calcularImpuesto());