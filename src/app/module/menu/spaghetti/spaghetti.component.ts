import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Spaghetti: PeriodicElement[] = [
  {position: '75', name: 'Spaghetti alla Napoletana', price: '5,00', info: 'mit Tomatensauce' , nutrient: 'A'},
  {position: '76', name: 'Spaghetti Bolognese', price: '6,00', info: 'mit Hackfleischsauce' , nutrient: 'A'},
  {position: '76a', name: 'Spaghetti Bolognese al Forno', price: '6,50', info: 'mit Hackfleischsauce und Käse überbacken' , nutrient: 'A, 1, D'},
  {position: '76b', name: 'Spaghetti Broccoli al Forno', price: '7,50', info: 'mit Broccoli, scharfen Peperoni, Knoblauch, Hackfleischsauce und Käse überbacken' , nutrient: 'A, 1, D'},
  {position: '78', name: 'Spaghetti Scampi', price: '7,50', info: 'mit Crevetten, Knoblauch und Tomatensauce' , nutrient: 'A, F'},
  {position: '79', name: 'Spaghetti alla Diavolo', price: '6,50', info: 'mit Formfleisch-Vorderschinken, Paprika, Crevetten und Tomatensauce' , nutrient: 'A, 2, 5, F'},
  {position: '80', name: 'Spaghetti Carbonara', price: '6,50', info: 'mit Formfleisch-Vorderschinken, Ei und Käse-Sahnesauce' , nutrient: 'A, 2, 5, B, 1, D'},
  {position: '82', name: 'Spaghetti Dello Cheff', price: '7,50', info: 'mit Champignons, Formfleisch-Vorderschinken und Hackfleisch-Sahnesauce' , nutrient: 'A, 2, 5, D'},
  {position: '83', name: 'Spaghetti Frutti di Mare', price: '7,00', info: 'mit Meeresfrüchten, Knoblauch und Tomatensauce' , nutrient: 'A, F, G'},
];

@Component({
  selector: 'app-spaghetti',
  templateUrl: './spaghetti.component.html',
  styleUrls: ['./spaghetti.component.css']
})
export class SpaghettiComponent implements OnInit {
  elements = Spaghetti;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
