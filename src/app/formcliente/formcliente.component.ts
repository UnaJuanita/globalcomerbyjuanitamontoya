import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.css']
})
export class FormclienteComponent implements OnInit {

  ADDC() {
    window.alert('Cliente agregado');
  }

  constructor() { }

  ngOnInit() {
  }

}