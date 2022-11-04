import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const indian: PeriodicElement[] = [
  {position: '160a', name: 'Chili Paneer', price: '9,50', info: 'mit Paprika, Zwiebeln, Curry, hausgemachtem Käse, Ingwer und Knoblauch (scharf)' , nutrient: 'D'},
  {position: '161', name: 'Soja Curry', price: '9,00', info: 'Sojabohnen-Bällchen mit Kartoffeln und Currysauce' , nutrient: ''},
  {position: '164', name: 'Vegetable Biryani', price: '9,00', info: 'Reis mit verschiedenem Gemüse' , nutrient: ''},
  {position: '164a', name: 'Shahi Chane', price: '9,50', info: 'hausgemachter Käse mit Ingwer, Joghurt und Knoblauch (pikant gewürzt)' , nutrient: 'D'},
  {position: '177', name: 'Chicken Curry', price: '9,50', info: 'Hühnerfleisch in feiner Currysauce' , nutrient: ''},
  {position: '178', name: 'Indischer Korma', price: '9,50', info: 'Hühnerfleisch mit Curry und Kokus-Sauce' , nutrient: ''},
  {position: '179', name: 'Chicken Punjab Spezial', price: '9,00', info: 'Hühnerfleisch mit Zwiebeln, Knoblauch, Ingwer, Chili, Tomatensauce (scharf)' , nutrient: ''},
  {position: '181', name: 'Chicken Biryani', price: '10,00', info: 'Hähnchenfleisch mit gemischtem Gemüse' , nutrient: ''},
];

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.css']
})
export class IndianComponent implements OnInit {
  elements = indian;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }


}
