import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const drinks: PeriodicElement[] = [
  {position: '', name: 'Cola, Fanta', price: '2,50', info: '1l Flasche' , nutrient: '1, 9, 5'},
  {position: '', name: 'Cola, Fanta', price: '1,50', info: '0.33l Flasche' , nutrient: '1, 9, 5'},
  {position: '', name: 'Mineralwasser', price: '1,50', info: '0.75l Flasche' , nutrient: ''},
  {position: '', name: 'Pils', price: '2,00', info: '0.5l Flasche' , nutrient: 'A'},
  {position: '', name: 'Lambrusco', price: '5,00', info: '0.75l Flasche' , nutrient: 'A'},
];


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  elements = drinks;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
