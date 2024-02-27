export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    if (typeof this._nombre === "string") {
      return this._nombre;
    }
  }
  set nombre(nuevo_nombre) {
    if (typeof nuevo_nombre === "string") {
      this._nombre = nuevo_nombre;
    }
  }

  calcularImpuesto() {
    const montoBrutoAnual = this._impuesto.montoBrutoAnual;
    const deducciones = this._impuesto.deducciones;
    const impuestoCalculado = (montoBrutoAnual - deducciones) * 0.21;
    return impuestoCalculado;
  }
}