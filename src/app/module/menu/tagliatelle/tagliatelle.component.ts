import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Tagliatelle: PeriodicElement[] = [
  {position: '99', name: 'Tagliatelle alla Bolognese', price: '6,00', info: 'mit Hackfleischsauce' , nutrient: 'A'},
  {position: '99a', name: 'Tagliatelle Frontera', price: '7,00', info: 'mit Formfleisch-Vorderschinken, Salami, Champignons, Hackfleischsauce und Käse überbacken' , nutrient: 'A, 1, 2, 5, D'},
  {position: '100', name: 'Tagliatelle Mozzarella al Forno', price: '6,50', info: 'mit Tomatensauce und Mozzarella überbacken' , nutrient: 'A, D'},
  {position: '101', name: 'Tagliatelle alla Chef', price: '6,50', info: 'mit Formfleisch-Vorderschinken Erbsen und Sahnesauce' , nutrient: 'A, 2, 5, D'},
  {position: '102', name: 'Tagliatelle Don Alfredo', price: '7,00', info: 'mit Champignons, Zwiebeln, Crevetten, Formfleisch-Vorderschinkenchinken Knoblauch und Tomaten-Sahnesauce' , nutrient: 'A, 2, 5, D'},
  {position: '103', name: 'Tagliatelle Paglia e Forno a. Chef', price: '6,50', info: 'grüne und weiße Bandnudeln mit Formfleisch-Vorderschinken, Champignons und Sahnesauce' , nutrient: 'A, 2, 5, D'},
  {position: '104', name: 'Lasagne', price: '6,50', info: '' , nutrient: 'A'},
  {position: '105', name: 'Tagliatelle alla Salmone', price: '7,00', info: 'mit Lachs und Sahnesauce' , nutrient: 'A, C, D'},
];

@Component({
  selector: 'app-tagliatelle',
  templateUrl: './tagliatelle.component.html',
  styleUrls: ['./tagliatelle.component.css']
})
export class TagliatelleComponent implements OnInit {
  elements = Tagliatelle;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
