import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"],
})
export class CalculadoraComponent implements OnInit {
  apagar: string;
  constructor() {}

  ngOnInit() {}

  valorVisor = "";

  clickPerson(valor) {
    if (
      this.valorVisor == "*" ||
      this.valorVisor == "/" ||
      this.valorVisor == "+" ||
      this.valorVisor == "-"
    ) {
      this.valorVisor = "";
    }  

      this.valorVisor += valor.numero;
    this.valorVisor = this.valorVisor.toString();
  }

  calcular() {
    if (
      this.valorVisor.substring(this.valorVisor.length - 1) == "*" ||
      this.valorVisor.substring(this.valorVisor.length - 1) == "/" ||
      this.valorVisor.substring(this.valorVisor.length - 1) == "+" ||
      this.valorVisor.substring(this.valorVisor.length - 1) == "-" ||
      this.valorVisor.substring(this.valorVisor.length - 1) == "%"
    ) {
      this.valorVisor = "";
    } else {
      this.valorVisor = eval(this.valorVisor);
    }

    this.valorVisor.toString();
  }

  limpar() {
    this.valorVisor = "";
  }

  delbutton(){
   this.valorVisor = this.valorVisor.substring(0 ,this.valorVisor.length - 1);
  }
}
