import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginrightComponent } from './components/loginright/loginright.component';
import { LoginleftComponent } from './components/loginleft/loginleft.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    LoginrightComponent,
    LoginleftComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
