import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:"ListOrders",component:ListComponent},
  {path:"AddOrder", component:AddOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
