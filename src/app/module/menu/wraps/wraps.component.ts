import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Wrap: PeriodicElement[] = [
  {position: '153', name: 'Wrap', price: '4,50', info: 'mit Tunfisch' , nutrient: 'A, C'},
  {position: '154', name: 'Wrap', price: '4,50', info: 'mit Hähnchen' , nutrient: 'A'},
  {position: '155', name: 'Wrap', price: '4,50', info: 'mit Tomaten und Mozzarella' , nutrient: 'A, D'},
];

@Component({
  selector: 'app-wraps',
  templateUrl: './wraps.component.html',
  styleUrls: ['./wraps.component.css']
})
export class WrapsComponent implements OnInit {
  elements = Wrap;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
