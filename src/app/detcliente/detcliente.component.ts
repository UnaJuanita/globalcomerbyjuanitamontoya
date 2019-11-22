import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-detcliente',
  templateUrl: './detcliente.component.html',
  styleUrls: ['./detcliente.component.css']
})
export class DetclienteComponent {

    clientes: Cliente = [
    new Cliente("0000000000-0","Juanita Montoya","Cll 00 #00-00","barrio","pereira","0000000"," ")
  ];

}