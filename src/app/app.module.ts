import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './module/main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { ImprintComponent } from './module/imprint/imprint.component';
import { DeliveryComponent } from './module/delivery/delivery.component';
import { MenuComponent } from './module/menu/menu.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {PizzaComponent} from "./module/menu/pizza/pizza.component";
import { SaladComponent } from './module/menu/salad/salad.component';
import { AntipastaComponent } from './module/menu/antipasta/antipasta.component';
import { SpaghettiComponent } from './module/menu/spaghetti/spaghetti.component';
import { MakkaroniComponent } from './module/menu/makkaroni/makkaroni.component';
import { TortelliniComponent } from './module/menu/tortellini/tortellini.component';
import { TagliatelleComponent } from './module/menu/tagliatelle/tagliatelle.component';
import { NoodlesComponent } from './module/menu/noodles/noodles.component';
import { BaguetteComponent } from './module/menu/baguette/baguette.component';
import { PorkComponent } from './module/menu/pork/pork.component';
import { ChickenComponent } from './module/menu/chicken/chicken.component';
import { FingerfoodComponent } from './module/menu/fingerfood/fingerfood.component';
import { WrapsComponent } from './module/menu/wraps/wraps.component';
import { IndianComponent } from './module/menu/indian/indian.component';
import { SnackComponent } from './module/menu/snack/snack.component';
import { BreadComponent } from './module/menu/bread/bread.component';
import { DrinkComponent } from './module/menu/drink/drink.component';
import { NutrientComponent } from './module/menu/nutrient/nutrient.component';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        MainComponent,
        ImprintComponent,
        DeliveryComponent,
        MenuComponent,
        PizzaComponent,
        SaladComponent,
        AntipastaComponent,
        SpaghettiComponent,
        MakkaroniComponent,
        TortelliniComponent,
        TagliatelleComponent,
        NoodlesComponent,
        BaguetteComponent,
        PorkComponent,
        ChickenComponent,
        FingerfoodComponent,
        WrapsComponent,
        IndianComponent,
        SnackComponent,
        BreadComponent,
        DrinkComponent,
        NutrientComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
