import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {
  nomeDoCurso : string = "Angular";
  valorInicial = 15;
  onMudouValor(evento){
    console.log("evento" + evento.novoValor)
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
