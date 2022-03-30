import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loginright',
  templateUrl: './loginright.component.html',
  styleUrls: ['./loginright.component.css']
})
export class LoginrightComponent implements OnInit {
  email= "";
  password="";
  balaji= "";
  submit(value: any,pass:any){
    this.email=value;
    this.password=pass;
  }
  
  
  
  
  
  constructor() { }

  ngOnInit(): void {
  }
 

}
