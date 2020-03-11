import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcase',
  templateUrl: './upcase.component.html',
  styleUrls: ['./upcase.component.css']
})
export class UpcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public upperCase(palavra: string): string {
    return palavra.toUpperCase();
  }
}
