import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/interfaces/Entrada.interface';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: Entrada = {
    titulo: "",
    valor: 0,
    icon:""
  };
  constructor() { }

  ngOnInit() {}

}
