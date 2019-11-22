export class Cliente {
  public nit: string;
  public nombre: string;
  public direccion: string;
  public barrio: string;
  public ciudad: string;
  public tel1: string;
  public tel2: string;

  constructor(
    nit: string,
    nombre: string,
    direccion: string,
    barrio: string,
    ciudad: string,
    tel1: string,
    tel2: string
  ) {
    this.nit = nit;
    this.nombre = nombre;
    this.direccion = direccion;
    this.barrio = barrio;
    this.ciudad = ciudad;
    this.tel1 = tel1;
    this.tel2 = tel2;
  }
}