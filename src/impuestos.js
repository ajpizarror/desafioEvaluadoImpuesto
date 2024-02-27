export class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  get montoBrutoAnual() {
    if (typeof this._montoBrutoAnual === 'number') {
      return this._montoBrutoAnual;
    }
  }

  set montoBrutoAnual(nuevo_montoBrutoAnual) {
    if (typeof nuevo_montoBrutoAnual === 'number') {
      this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }
  }

  get deducciones() {
    if (typeof this._deducciones === 'number') {
      return this._deducciones;
    }
  }

  set deducciones(nuevas_deducciones) {
    if (typeof nuevas_deducciones === 'number') {
      this._deducciones = nuevas_deducciones;
    }
  }
}
