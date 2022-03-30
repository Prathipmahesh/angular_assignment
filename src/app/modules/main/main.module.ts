import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { MainleftComponent } from './components/mainleft/mainleft.component';


@NgModule({
  declarations: [
    MaincontainerComponent,
    MainnavComponent,
    MainleftComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
