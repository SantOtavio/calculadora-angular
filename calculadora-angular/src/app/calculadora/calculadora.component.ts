import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { unwatchFile } from "fs";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"],
})
export class CalculadoraComponent implements OnInit {
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
  }

  calcular() {
    this.valorVisor = eval(this.valorVisor);
  }

  limpar() {
    this.valorVisor = "";
  }
}
