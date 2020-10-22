import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main/main.component'
import { ItemComponent} from './item/item.component'
import {ListComponent} from './list/list.component'
import {RouterModule} from '@angular/router'
const routes=[
  {path:'main',component:MainComponent},
  {path:'item',component:ItemComponent},
  {path:'list',component:ListComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
