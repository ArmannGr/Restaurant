import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const chicken: PeriodicElement[] = [
  {position: '176', name: 'Hähnchenbrustfilet', price: '8,00', info: 'paniert mit Jägersauce' , nutrient: 'A, 1, 2, 7, E, H'},
];

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {
  elements = chicken;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
