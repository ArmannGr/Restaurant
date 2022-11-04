import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Baguette: PeriodicElement[] = [
  {position: '109', name: 'Sonja', price: '5,00', info: 'mit Thunfisch und Ei' , nutrient: 'A, B, C'},
  {position: '111', name: 'Miriam', price: '5,00', info: 'mit Formfleisch-Vorderschinken und Tomaten' , nutrient: 'A, 2, 5'},
  {position: '115', name: 'Sarah', price: '5,00', info: 'mit Salami, Tomaten und Ei' , nutrient: 'A, 1, 2, 5, B'},
  {position: '116', name: 'Spezial', price: '5,00', info: 'mit Formfleisch-Vorderschinken oder Salami, Thunfisch und Ei' , nutrient: 'A, 1, 2, 5, B, C'},
  {position: '118', name: 'Rustica', price: '6,00', info: 'mit Schweinefleisch und Zwiebeln' , nutrient: 'A'},
  {position: '118a', name: 'Pollo', price: '6,00', info: 'mit Hähnchenfleisch' , nutrient: 'A'},
];

@Component({
  selector: 'app-baguette',
  templateUrl: './baguette.component.html',
  styleUrls: ['./baguette.component.css']
})
export class BaguetteComponent implements OnInit {
  elements = Baguette;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }


}
