import { Component, OnInit } from '@angular/core';
import{ Producto } from './producto';

@Component({
  selector: 'app-detproducto',
  templateUrl: './detproducto.component.html',
  styleUrls: ['./detproducto.component.css']
})
export class DetproductoComponent implements OnInit {

  productos: Producto = [
    new Producto("PR000000","Producto prueba","$2000 COP","10","https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png","Prueba","primera")
  ];

  constructor() { }

  ngOnInit() {
  }

}