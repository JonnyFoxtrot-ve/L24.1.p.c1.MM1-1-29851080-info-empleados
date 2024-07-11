export default class Cl_empresa {
  constructor() {
    this.acum = 0;
    this.acumTipoO = 0;
    this.acumTipoA = 0;
    this.contarA = 0;
    this.contarO = 0;
  }

  montoTotalO() {
    return this.acumTipoO;
  }

  promPagadoO() {
    if (this.acum !== 0) {
      return this.acumTipoO / this.contarO;
    } else {
      return 0;
    }
  }

  montoTotalA() {
    return this.acumTipoA;
  }

  promPagadoA() {
    if (this.acum !== 0) {
      return this.acumTipoA / this.contarA;
    } else {
      return 0;
    }
  }
  procesare(e) {
    this.acum += e.monto;

    if (e.tipoE === 1) {
      this.acumTipoA += e.monto;
      this.contarA++;
    } else if (e.tipoE === 2) {
      this.acumTipoO += e.monto;
      this.contarO++;
    }
  }
}
