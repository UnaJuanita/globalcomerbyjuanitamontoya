export class Producto {
  public id: string;
  public nombre: string;
  public precio: string;
  public unidades: string;
  public imagen: string;
  public proveedor: string;
  public categoria: string;

  constructor(
    id: string,
    nombre: string,
    precio: string,
    unidades: string,
    imagen: string,
    proveedor: string,
    categoria: string
  ) {
    this.id =id;
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
    this.imagen = imagen;
    this.proveedor = proveedor;
    this.categoria = categoria;
  }
}