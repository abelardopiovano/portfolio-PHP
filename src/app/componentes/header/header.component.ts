

import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  
  
  constructor() { 
    
  }
  
  public valor: boolean = false;
  ngOnInit(): void {

   
        console.log (this.valor)
      
  

  }
 
  cerrar():void
  {
    
    this.valor=!this.valor;
    
  
      
    }
  
      
    

  
  

}
