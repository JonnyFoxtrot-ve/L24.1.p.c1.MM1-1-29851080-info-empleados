export default class Cl_empleado {
  constructor(nombre, tipoE, monto) {
    this.nombre = nombre;
    this.tipoE = tipoE;
    this.monto = monto;
  }

  set monto(monto) {
    this._monto = monto;
  }

  get monto() {
    return this._monto;
  }

  set tipoE(tipoE) {
    this._tipoE = tipoE;
  }

  get tipoE() {
    return this._tipoE;
  }
}
