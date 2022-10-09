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


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        MainComponent,
        ImprintComponent,
        DeliveryComponent,
        MenuComponent,
        PizzaComponent
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
