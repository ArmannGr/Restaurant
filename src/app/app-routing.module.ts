import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./module/main/main.component";
import {ImprintComponent} from "./module/imprint/imprint.component";
import {DeliveryComponent} from "./module/delivery/delivery.component";
import {MenuComponent} from "./module/menu/menu.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'menu', component: MenuComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
