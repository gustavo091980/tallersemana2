import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

dia: number;
mes: number;
ano: number;
fechastring: string

constructor(){
  this.dia = new Date().getDay();
  this.mes = new Date().getMonth();
  this.ano = new Date().getFullYear();

  
  this.fechastring = this.dia+"/"+this.mes+"/"+this.ano;

}
}
