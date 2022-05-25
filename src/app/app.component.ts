import { Component } from '@angular/core';
import { GlobalConstant } from './GlobalConstant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Abelardo H. Piovano';
  valida2=GlobalConstant.valida;
  constructor(){
    //console.log(GlobalConstant.valida)
  }
  
  ngOnInit(){
    

    
    
    
  }
}

