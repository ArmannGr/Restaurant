import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Antipasta: PeriodicElement[] = [
  {position: '64', name: 'Verdura al Forno', price: '7,00', info: 'Champignons, Broccoli, Spinat, Knoblauch, Sahnesauce und Käse überbacken' , nutrient: '1, D'},
  {position: '65', name: 'Broccoli al Forno', price: '6,00', info: 'Broccoli, Knoblauch, Sahnesauce und Käse überbacken' , nutrient: '1, D'},
  {position: '66', name: 'Spinaci al Forno', price: '6,00', info: 'Spinat, Knoblauch, Sahnesauce und Käse überbacken' , nutrient: '1, D, D5'},
];

@Component({
  selector: 'app-antipasta',
  templateUrl: './antipasta.component.html',
  styleUrls: ['./antipasta.component.css']
})
export class AntipastaComponent implements OnInit {

  elements = Antipasta;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
