import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const bread: PeriodicElement[] = [
  {position: 'O6', name: 'gefüllte Pizzabrötchen', price: '4,50', info: 'mit Tunfisch' , nutrient: 'A, C'},
  {position: 'O7', name: 'gefüllte Pizzabrötchen', price: '4,50', info: 'mit Spinat' , nutrient: 'A'},
  {position: 'O8', name: 'gefüllte Pizzabrötchen', price: '4,50', info: 'mit Formfleisch-Vorderschinken und Ananas' , nutrient: 'A, 2, 5'},
  {position: 'O9', name: 'gefüllte Pizzabrötchen', price: '5,00', info: 'mit Gyros' , nutrient: 'A, H, I'},
  {position: 'O10', name: 'Pizzabrötchen', price: '2,00', info: '6 Stück mit hausgemachter Kräutercreme' , nutrient: 'A'},
  {position: 'O11', name: 'Knoblauchbrot', price: '2,00', info: 'mit Kräutercreme' , nutrient: 'A'},
  {position: 'O12', name: 'Naan', price: '2,00', info: 'indisches Brot' , nutrient: 'A'},
  {position: '', name: 'Kräutercreme extra', price: '1,00', info: '' , nutrient: ''}
];

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {
  elements = bread;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
