import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ImprintComponent} from "./module/imprint/imprint.component";
import {DeliveryComponent} from "./module/delivery/delivery.component";
import {MenuComponent} from "./module/menu/menu.component";

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'imprint', component: ImprintComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'menu', component: MenuComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
