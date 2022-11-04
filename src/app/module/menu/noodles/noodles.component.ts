import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Noodel: PeriodicElement[] = [
  {position: 'H01', name: 'Spaghetti Chicken', price: '7,50', info: 'mit Hähnchenbrust, Champignons, Zwiebeln und Tomatensauce' , nutrient: 'A'},
  {position: 'H02', name: 'Spaghetti Chicken Spezial', price: '7,50', info: 'mit Hähnchenbrust, Champignons und Sahnesauce' , nutrient: 'A, D'},
  {position: 'H03', name: 'Makkaroni Chicken', price: '7,50', info: 'mit Hähnchenbrust, Zwiebeln, Tomatensauce und Käse überbacken' , nutrient: 'A, 1, D'},
  {position: 'H04', name: 'Makkaroni Chicken Spezial', price: '7,50', info: 'mit Hähnchenbrust, Broccoli, Rahmsauce und Käse überbacken' , nutrient: 'A, 1, D'},
  {position: 'H05', name: 'Tagliatelle Chicken', price: '7,50', info: 'mit Hähnchenbrust, Champignons, Tomatensauce und Käse überbacken' , nutrient: 'A, 1, D'},
];


@Component({
  selector: 'app-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.css']
})
export class NoodlesComponent implements OnInit {

  elements = Noodel;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
