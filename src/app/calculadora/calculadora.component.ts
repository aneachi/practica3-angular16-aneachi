import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public resultado:number = 0;
  public num1:number = 0;
  public num2:number = 0;
  
  guardarNum1(evento:Event) {
    this.num1 = Number((<HTMLInputElement>evento.target).value);
  }
  guardarNum2(evento:Event) {
    this.num2 = Number((<HTMLInputElement>evento.target).value);
  }

  operar(evento:Event):void {
   if((<HTMLInputElement>evento.target).value == "sumar") {
    this.resultado = this.num1 + this.num2
   } else {
    this.resultado = this.num1 - this.num2
   }
  }
}
