import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

export interface PeriodicElement {
  name: string;
  position: string;
  price: string;
  priceLittle: string;
  priceJumbo: string;
  priceBig: string;
  info: string;
  nutrient: string;
}

const Pizza: PeriodicElement[] = [
  {position: '1', name: 'Margherita', priceLittle: '3,50', price: '5,50', priceJumbo: '10,00', priceBig: '20,00', info: '' , nutrient: 'A'},
  {position: '2', name: 'Napoli', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Sardellen und Oliven' , nutrient: 'A, C, 6'},
  {position: '3', name: 'Tonno', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Thunfisch' , nutrient: 'A, C'},
  {position: '4', name: 'Funghi', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Champignons' , nutrient: 'A'},
  {position: '4a', name: 'Kema', priceLittle: '5,50', price: '7,00', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Champignons und Paprika' , nutrient: 'A'},
  {position: '5', name: 'Cipolla', priceLittle: '5,50', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Zwiebeln' , nutrient: 'A'},
  {position: '6', name: 'Diavolo', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Paprika' , nutrient: 'A'},
  {position: '7', name: 'Salami', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Salami' , nutrient: 'A, 1, 2, 5'},
  {position: '8', name: 'Prosciutto', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Formfleisch-Vorderschinken' , nutrient: 'A, 2, 5'},
  {position: '9', name: 'Rustica', priceLittle: '5,50', price: '9,00', priceJumbo: '12,00', priceBig: '23,00', info: 'mit Formfleisch-Vorderschinken und Salami' , nutrient: 'A, 1, 2, 5'},
  {position: '9a', name: 'Sofia', priceLittle: '5,50', price: '7,50', priceJumbo: '12,50', priceBig: '23,00', info: 'mit Champignons und Formfleisch-Vorderschinken' , nutrient: 'A, 2, 5'},
  {position: '10', name: 'Bolognese', priceLittle: '5,00', price: '6,50', priceJumbo: '10,00', priceBig: '22,00', info: 'mit Hackfleischsauce' , nutrient: 'A'},
  {position: '11', name: 'Paesana', priceLittle: '5,50', price: '7,50', priceJumbo: '15,00', priceBig: '22,00', info: 'mit Zwiebeln und Champignons' , nutrient: 'A'},
  {position: '12', name: 'Primavera', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Zwiebeln, Thunfisch, Champignons und Artischocken' , nutrient: 'A, C'},
  {position: '13', name: 'Bevitore', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Thunfisch, Paprika, Oliven und Champignons' , nutrient: 'A, C, 6'},
  {position: '14', name: 'Quattro Stagioni', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Salami, Formfleisch-Vorderschinken, Thunfisch und Champignons' , nutrient: 'A, 1, 2, 5, C'},
  {position: '15', name: 'Frontiera', priceLittle: '5,50', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Salami, Formfleisch-Vorderschinken und Champignons' , nutrient: 'A, 1, 2, 5'},
  {position: '16', name: 'Capricciosa', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Formfleisch-Vorderschinken, Thunfisch, Artischocken und Champignons' , nutrient: 'A, 2, 5, C'},
  {position: '17', name: 'Frutti di Mare', priceLittle: '6,50', price: '8,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Meeresfrüchten' , nutrient: 'A, F, G'},
  {position: '18', name: 'Scampi', priceLittle: '6,50', price: '9,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Crevetten' , nutrient: 'A, F'},
  {position: '19', name: 'Mais', priceLittle: '5,00', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Mais' , nutrient: 'A'},
  {position: '20', name: 'Calzone', priceLittle: '5,50', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Salami, Formfleisch-Vorderschinken und Champignons' , nutrient: 'A, 1, 2, 5'},
  {position: '21', name: 'Calz. Ringenberg', priceLittle: '6,50', price: '', priceJumbo: '', priceBig: '', info: 'gefüllt mit Salami, Formfleisch-Vorderschinken, Thunfisch und Ei' , nutrient: 'A, 1, 2, 5, C, B'},
  {position: '22', name: 'Tonno e Cipolla', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Thunfisch und Zwiebeln' , nutrient: 'A, C'},
  {position: '23', name: 'Peperoni', priceLittle: '5,00', price: '6,00', priceJumbo: '11,00', priceBig: '22,00', info: 'mit scharfe und milde Peperoni' , nutrient: 'A'},
  {position: '24', name: 'Romana', priceLittle: '5,50', price: '8,00', priceJumbo: '12,00', priceBig: '24,00', info: 'mit Bolognese, Zwiebeln und Ei' , nutrient: 'A, B'},
  {position: '25', name: 'Hawaii', priceLittle: '6,00', price: '8,00', priceJumbo: '12,00', priceBig: '24,00', info: 'mit Formfleisch-Vorderschinken und Ananas' , nutrient: 'A, 2, 5'},
  {position: '26', name: 'Broccoli', priceLittle: '5,50', price: '7,00', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Broccoli und Knoblauch' , nutrient: 'A'},
  {position: '27', name: 'Spaghetti', priceLittle: '6,00', price: '8,00', priceJumbo: '12,00', priceBig: '24,00', info: 'mit Bolognese und Spaghett' , nutrient: 'A'},
  {position: '28', name: 'Rustica Bolognese', priceLittle: '6,00', price: '8,00', priceJumbo: '24,00', priceBig: '19,00', info: 'mit Bolognese, Salami, Ei und Formfleisch-Vorderschinken' , nutrient: 'A, 1, 2, 5, B'},
  {position: '29', name: 'Mista', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Salami, Formfleisch-Vorderschinken, Paprika, Champignons, Thunfisch und Zwiebeln' , nutrient: 'A, 1, 2, 5, C'},
  {position: '30', name: 'Rauli', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Salami, Thunfisch, Formfleisch-Vorderschinken, Champignons, Zwiebeln, Peperoni und Bolognese' , nutrient: 'A, 1, 2, 5, C'},
  {position: '31', name: 'Popeye', priceLittle: '5,50', price: '6,50', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Spinat und Knoblauch' , nutrient: 'A'},
  {position: '32', name: 'Braccio de Ferro', priceLittle: '6,00', price: '7,00', priceJumbo: '15,00', priceBig: '23,00', info: 'mit Spinat, Knoblauch und Ei' , nutrient: 'A, B'},
  {position: '34', name: 'Grewal', priceLittle: '6,00', price: '8,00', priceJumbo: '15,00', priceBig: '24,00', info: 'mit Champignons, Paprika, Zwiebeln, scharfe Peperoni und Knoblauch' , nutrient: 'A'},
  {position: '35', name: 'Con Mozzarella', priceLittle: '5,00', price: '7,00', priceJumbo: '12,00', priceBig: '22,00', info: 'mit Mozzarella' , nutrient: 'A, D'},
  {position: '36', name: 'Quattro Formaggi', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Gouda, Gorgonzola, Schafskäse und Mozzarella' , nutrient: 'A, 1, D'},
  {position: '37', name: 'Ringo', priceLittle: '6,00', price: '8,00', priceJumbo: '12,00', priceBig: '23,00', info: 'mit Salami, grünen Bohnen, und Formfleisch-Vorderschinken' , nutrient: 'A, 1, 2, 5'},
  {position: '38', name: 'Sarina', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Thunfisch, Spinat, Crevetten und Knoblauch' , nutrient: 'A, C, F'},
  {position: '39', name: 'Speciale', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Lachs, Mozzarella und Knoblauch' , nutrient: 'A, F, D'},
  {position: '40', name: 'Della Casa', priceLittle: '6,00', price: '8,00', priceJumbo: '13,00', priceBig: '24,00', info: 'mit Thunfisch, Artischocken, scharfe Peperoni und Knoblauch' , nutrient: 'A, C'},
  {position: '41', name: 'Pecorino', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit frischen Tomaten, Schafskäse und scharfe Peperoni' , nutrient: 'A, D'},
  {position: '42', name: 'Gorgonzola', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Formfleisch-Vorderschinken und Gorgonzola' , nutrient: 'A, 2, 5, D'},
  {position: '43', name: 'Vegetaria', priceLittle: '6,50', price: '9,50', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Broccoli, Champignons, Paprika und Spinat' , nutrient: 'A, D'},
  {position: '44', name: 'Tom.-Mozzarella', priceLittle: '6,00', price: '8,00', priceJumbo: '14,00', priceBig: '24,00', info: 'mit frischen Tomaten und Mozzarella' , nutrient: 'A, D'},
  {position: '45', name: 'Gyros', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Schweinefleisch, Zwiebeln und Tzatziki' , nutrient: 'A'},
  {position: '45a', name: 'Chicken', priceLittle: '6,50', price: '9,00', priceJumbo: '14,00', priceBig: '25,00', info: 'mit Hähnchenfleisch und Zwiebeln' , nutrient: 'A'},
  {position: '45b', name: 'New York', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '26,00', info: 'mit Broccoli, Hähnchenbrust und Sauce-Hollandaise' , nutrient: 'A, B, D, H'},
  {position: '46', name: 'Döner', priceLittle: '6,50', price: '8,00', priceJumbo: '13,00', priceBig: '23,00', info: 'mit Dönerfleisch und Sauce-Hollandaise' , nutrient: 'A, B, D, H'},
  {position: '46a', name: 'Döner Spezial', priceLittle: '6,50', price: '9,00', priceJumbo: '15,00', priceBig: '25,00', info: 'mit Dönerfleisch, Champignons, Paprika und Zwiebeln' , nutrient: 'A'},
  {position: '46b', name: 'Döner Pita', priceLittle: '6,50', price: '8,50', priceJumbo: '14,00', priceBig: '24,00', info: 'mit Dönerfleisch, Zwiebeln und Sauce-Hollandaise' , nutrient: 'A, B, D, H'}

];

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  elements = Pizza;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
