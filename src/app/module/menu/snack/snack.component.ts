import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const snack: PeriodicElement[] = [
  {position: '', name: 'Pommes', price: '2,50', info: '' , nutrient: ''},
  {position: '', name: 'Kroketten', price: '2,50', info: '' , nutrient: ''},
  {position: '', name: 'Salat-Mayonnaise, Ketchup', price: '0,50', info: '' , nutrient: ''},
  {position: '', name: 'Tzatziki', price: '1,00', info: '' , nutrient: ''},
];

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {
  elements = snack;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
