import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossa-historia',
  templateUrl: './nossa-historia.component.html',
  styleUrls: ['./nossa-historia.component.css']
})
export class NossaHistoriaComponent implements OnInit {
  exibeHistoria: boolean = true;

  constructor() { }

  ngOnInit() {
      }
  
      public lerMais() {
        this.exibeHistoria = false;
      }

      public voltar() {
        this.exibeHistoria = true;
      }
      }


