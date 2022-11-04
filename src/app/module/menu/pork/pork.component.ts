import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Pork: PeriodicElement[] = [
  {position: '120', name: 'Schnitzel Milanese', price: '8,50', info: 'paniertes Schnitzel' , nutrient: 'A'},
];

@Component({
  selector: 'app-pork',
  templateUrl: './pork.component.html',
  styleUrls: ['./pork.component.css']
})
export class PorkComponent implements OnInit {
  elements = Pork;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
