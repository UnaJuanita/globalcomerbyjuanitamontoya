import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ADDCF() {
    window.alert('Se abre el formulario para llenarlo con los datos del cliente');
  }

  ADDPF() {
    window.alert('Se abre el formulario para llenarlo con los datos del producto');
  }

  MODPF() {
    window.alert('Se abre un formulario para buscar un producto con su ID y poder modificarlo');
  }

  MODCF() {
    window.alert('Se abre un formulario para buscar un cliente con su NIT y poder modificarlo');
  }

  DELPF() {
    window.alert('Se abre un formulaio donde se busca un producto con su ID y poder eliminarlo');
  }

  VENTA() {
    window.alert('Se abre un formulario con los campos que se deben llenar de la venta');
  }

  constructor() { }

  ngOnInit() {
  }

}