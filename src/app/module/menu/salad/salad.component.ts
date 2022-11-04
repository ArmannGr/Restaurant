import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  info: string;
  nutrient: string;
}

const Salad: PeriodicElement[] = [
  {position: '47', name: 'Insalata Mista', price: '5,00', info: 'gemischter Salat mit Mais' , nutrient: ''},
  {position: '48', name: 'Insalata Mista', price: '4,50', info: 'gemischter Salat mit Zwiebeln' , nutrient: ''},
  {position: '50', name: 'Insalata Di Pomodori', price: '5,00', info: 'Tomalensalat mit Zwiebeln und Essig-Öl' , nutrient: ''},
  {position: '51', name: 'Insalata Di Cetrioli', price: '4,50', info: 'Gurkensalat' , nutrient: ''},
  {position: '52', name: 'Insalata Pute', price: '6,00', info: 'gemischter Salat mit Putenfleisch' , nutrient: ''},
  {position: '52a', name: 'Insalata Pute Spezial', price: '7,00', info: 'gemischter Salat mit Putenfleisch, Käse, Ei und Peperoni' , nutrient: '1, D, B'},
  {position: '52b', name: 'Insalata Chicken', price: '7,00', info: 'gemischter Salat mit Hähnchenstreifen, Schafskäse, Oliven, Peperoni, Mais und Ei' , nutrient: 'D, 6, B'},
  {position: '53', name: 'Insalata Nicoise', price: '6,00', info: 'gemischter Salat mit Zwiebeln, Thunfisch und Ei' , nutrient: 'C, B'},
  {position: '54', name: 'Insalata Pomodori-Schafskäse', price: '6,00', info: 'mit Tomaten, Schafskäse, Zwiebeln und Essig-Öl' , nutrient: 'D'},
  {position: '56', name: 'Insalata Capricciosa', price: '7,50', info: 'gemischter Salat mit Salami, Formileisch-Vorderschinken, Zwiebeln, Käse, Ei und Thunfisch' , nutrient: '1, 2, 5, B, C, D'},
  {position: '57', name: 'Insalata Paesana', price: '6,50', info: 'gemischter Salat mit Thunfisch, grünen Bohnen, Zwiebeln und Essig-Öl' , nutrient: 'C'},
  {position: '58', name: 'Insalata Americana', price: '7,00', info: 'gemischter Salat mit Crevetten, Ananas und Cocktailsauce' , nutrient: '1, 5, F'},
  {position: '58a', name: 'Insalata Hawaii', price: '6,50', info: 'gemischter Salat mit Formfleisch-Vorderchinken, Ananas und Cocktailsauce' , nutrient: '1, 2, 5'},
  {position: '59', name: 'Insalata Mondiale', price: '6,50', info: 'gemischter Salat mit Formfleisch-Vorderschinken, Zwiebeln und Käse' , nutrient: '1, 2, 5, D'},
  {position: '60', name: 'Insalata Ringenberg', price: '7,50', info: 'gemischter Salat mit Formfleisch-Vorderschinken, Käse, Crevetten grünen Bohnen und Zwiebeln' , nutrient: '1, 2, 5, D, F'},
  {position: '61', name: 'Insalata Pomodori-Mozzarella', price: '6,00', info: 'mit Mozzarella", Tomaten, Zwiebeln und Essig-Öl' , nutrient: 'D'},
  {position: '61a', name: 'Insalata Italia', price: '7,00', info: 'mit grünem Salat, Tomaten, Gurken, Oliven, Ei, Formfleisch-Vorderschinken, Schafskäse, Artischocken und Zwiebeln' , nutrient: '2, 5, 6, B, D'},
];


@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent implements OnInit {
  elements = Salad;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
