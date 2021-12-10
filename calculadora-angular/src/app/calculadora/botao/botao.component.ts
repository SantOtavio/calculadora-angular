import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input() valor;

  constructor() { }

  @Output() onClick = new EventEmitter<any>();

  ngOnInit() {
  }



  clicouNaDiv(){
    this.onClick.emit({numero: this.valor})
  }

  calcular(){

  }


}
