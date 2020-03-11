import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time7',
  templateUrl: './time7.component.html',
  styleUrls: ['./time7.component.css']
})
export class Time7Component implements OnInit {

  narutoS = 'narutoStyle';
  sasukeS = 'sasukeStyle';
  sakuraS = 'sakuraStyle';
  naruto = '../../../assets/naruto.png';
  sasuke = '../../../assets/sasuke.png';
  sakura = '../../../assets/sakura.png';
  constructor() { }

  ngOnInit(): void {
  }

}
