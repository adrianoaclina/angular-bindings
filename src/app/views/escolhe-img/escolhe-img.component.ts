import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolhe-img',
  templateUrl: './escolhe-img.component.html',
  styleUrls: ['./escolhe-img.component.css']
})
export class EscolheImgComponent implements OnInit {

  naruto = '../../../assets/naruto.png';
  sasuke = '../../../assets/sasuke.png';
  caminho = this.naruto;
  constructor() { }

  ngOnInit(): void {
  }
  trocarImg(): void {
    if (this.caminho === this.naruto) {
      this.caminho = this.sasuke;
    } else {
      this.caminho = this.naruto;
    }
  }
}
