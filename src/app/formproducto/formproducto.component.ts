import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formproducto',
  templateUrl: './formproducto.component.html',
  styleUrls: ['./formproducto.component.css']
})
export class FormproductoComponent implements OnInit {

  ADDP() {
    window.alert('Producto agregado');

  }

  constructor() {   }

  ngOnInit() {
  }

}