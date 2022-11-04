import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Fingerfood: PeriodicElement[] = [
  {position: '143a', name: 'Chicken Nuggets', price: '5,50', info: '10 Stück mit Pommes' , nutrient: 'A'},
  {position: '143b', name: 'Chicken Wings', price: '5,00', info: '6 Stück' , nutrient: ''},
  {position: '144', name: 'Onion Rings', price: '5,00', info: '6 Stück' , nutrient: 'A'},
  {position: '145', name: 'Mozzarella Sticks', price: '5,00', info: '6 Stück' , nutrient: 'A, D'},
  {position: '146', name: 'Red Hot Chili Peppers', price: '5,00', info: '6 Stück mit scharfen Jalapeno Chilischoten' , nutrient: '4, A'},
];

@Component({
  selector: 'app-fingerfood',
  templateUrl: './fingerfood.component.html',
  styleUrls: ['./fingerfood.component.css']
})
export class FingerfoodComponent implements OnInit {
  elements = Fingerfood;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
