import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";


export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Makkaroni: PeriodicElement[] = [
  {position: '84', name: 'Makkaroni Bolognese', price: '6,00', info: 'mit Tomatensauce' , nutrient: 'A'},
  {position: '84a', name: 'Makkaroni Bolognese al Forno', price: '6,50', info: 'mit Hackfleischsauce' , nutrient: 'A'},
  {position: '84b', name: 'Makkaroni Carbonara', price: '6,00', info: 'mit Hackfleischsauce und Käse überbacken' , nutrient: 'A, 1, D'},
  {position: '84c', name: 'Makkaroni Broccoli al Forno', price: '7,00', info: 'mit Broccoli, scharfen Peperoni, Knoblauch, Hackfleischsauce und Käse überbacken' , nutrient: 'A, 1, D'},
  {position: '85', name: 'Makkaroni Con Mozzarella al Forno', price: '6,50', info: 'mit Crevetten, Knoblauch und Tomatensauce' , nutrient: 'A, F'},
  {position: '86', name: 'Makkaroni Quattro Formaggi', price: '7,00', info: 'mit Formfleisch-Vorderschinken, Paprika, Crevetten und Tomatensauce' , nutrient: 'A, 2, 5, F'},
  {position: '87', name: 'Makkaroni Gratinati al Forno', price: '7,00', info: 'mit Formfleisch-Vorderschinken, Ei und Käse-Sahnesauce' , nutrient: 'A, 2, 5, B, 1, D'},
  {position: '88', name: 'Makkaroni all Rudolfo', price: '7,00', info: 'mit Champignons, Formfleisch-Vorderschinken und Hackfleisch-Sahnesauce' , nutrient: 'A, 2, 5, D'},
  {position: '90', name: 'Makkaroni Spinaci', price: '7,50', info: 'mit Meeresfrüchten, Knoblauch und Tomatensauce' , nutrient: 'A, F, G'},
  {position: '90a', name: 'Makkaroni Spinaci e Salmone', price: '8,00', info: 'mit Meeresfrüchten, Knoblauch und Tomatensauce' , nutrient: 'A, F, G'},
];


@Component({
  selector: 'app-makkaroni',
  templateUrl: './makkaroni.component.html',
  styleUrls: ['./makkaroni.component.css']
})
export class MakkaroniComponent implements OnInit {
  elements = Makkaroni;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
