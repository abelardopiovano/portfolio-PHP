import { Component,OnInit } from '@angular/core';
import { GlobalConstant } from './GlobalConstant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Front-End-Angular';
  valida2=GlobalConstant.valida;
  constructor(){
    //console.log(GlobalConstant.valida)
  }
  
  ngOnInit(){
    


    
    
  }
}

