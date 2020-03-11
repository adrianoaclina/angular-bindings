import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meunome',
  templateUrl: './meunome.component.html',
  styleUrls: ['./meunome.component.css']
})
export class MeunomeComponent implements OnInit {
  nome = 'Adriano';
  sobrenome = 'Aclina';
  constructor() { }

  ngOnInit(): void {
  }

}
