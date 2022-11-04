import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Tortellini: PeriodicElement[] = [
  {position: '92', name: 'Tortellini Bolognese', price: '6,50', info: 'mit Hackfleischsauce' , nutrient: '2, A'},
  {position: '93', name: 'Tortellini alla Chef', price: '6,50', info: 'mit Formfleisch-Vorderschinken und Sahnesauce' , nutrient: '2, A, 5, D'},
  {position: '95', name: 'Tortellini al Forno', price: '7,50', info: 'mit Formfleisch-Vorderschinken, Salami, Tomatensauce und Käse überbacken' , nutrient: '2, A, 1, 5, D'},
  {position: '96', name: 'Tortellini Quattro Formaggi', price: '7,50', info: 'mit Gorgonzola, Käse, Erbsen und Sahnesauce' , nutrient: '2, A, D, 1'},
  {position: '97', name: 'Pasta Mista alla Panna', price: '7,00', info: 'verschiedene Nudeln mit Erbsen, Champignons und Sahnesauce' , nutrient: '2, A, D'},
  {position: '98', name: 'Pasta Mista al Forno', price: '7,00', info: 'verschiedene Nudeln mit Erbsen, Champignons, Tomatensauce und Käse" überbacken' , nutrient: '2, A, 1, D'},
  {position: '98a', name: 'Verschiedene Nudeln', price: '7,00', info: 'mit Hackfleischsauce und Käse überbacken' , nutrient: '2, A, 1, D'},
];

@Component({
  selector: 'app-tortellini',
  templateUrl: './tortellini.component.html',
  styleUrls: ['./tortellini.component.css']
})
export class TortelliniComponent implements OnInit {
  elements = Tortellini;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
