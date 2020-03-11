import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-petroleo',
  templateUrl: './petroleo.component.html',
  styleUrls: ['./petroleo.component.css']
})
export class PetroleoComponent implements OnInit {
  classCss = 'petroleo';
  constructor() { }

  ngOnInit(): void {
  }

  upperCase(valor: string): string {
    return Utils.upperCase(valor);
  }

}
