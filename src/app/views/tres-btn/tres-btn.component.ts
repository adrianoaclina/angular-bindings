import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres-btn',
  templateUrl: './tres-btn.component.html',
  styleUrls: ['./tres-btn.component.css']
})
export class TresBtnComponent implements OnInit {

  palavra = '';
  constructor() { }

  ngOnInit(): void {
  }
  trocaMsg(palavra: string): string {
    this.palavra = palavra;
    return this.palavra;
  }
}
