import { GlobalConstant } from 'src/app/GlobalConstant';

import { Component, OnInit} from '@angular/core';

GlobalConstant.cambiaclass = false;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  
  
  constructor() { 
    
  }
  
  valor:boolean=GlobalConstant.cambiaclass;
    ngOnInit(): void {

   
        
      
  

  }
 
  cerrar():void
  {
    
    this.valor=!this.valor;
    GlobalConstant.cambiaclass=this.valor;
    console.log (GlobalConstant.cambiaclass)
  
  
  }
  
      
    

  
  

}
