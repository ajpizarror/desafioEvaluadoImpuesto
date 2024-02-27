"use strict";

var _impuestos = require("./impuestos.js");
var _cliente = require("./cliente.js");
var impuestos = new _impuestos.Impuestos(10000, 100);
var clienteNuevo = new _cliente.Cliente("Alfonso", impuestos);
console.log(clienteNuevo);
console.log(impuestos);
console.log(clienteNuevo.calcularImpuesto());
impuestos.montoBrutoAnual = 15000;
impuestos.deducciones = 1000;
console.log(clienteNuevo.calcularImpuesto());