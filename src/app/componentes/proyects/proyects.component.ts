import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../../GlobalConstant';
import { Router } from '@angular/router';
import { PersonaService } from '../../servicios/persona.service';
import { Proyecto } from 'src/app/modelos/persona';




@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  persona={id:0, nombre:"", descripcion:"",url_cv:""};
  ProyectoList:any;
  valida2=GlobalConstant.valida;


  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    GlobalConstant.max=0;
    GlobalConstant.id=1;
    this.personaService.getPersona().subscribe( data=>{
      this.persona=(data[GlobalConstant.id-1]);
    });


    this.personaService.getProyecto().subscribe( data=>{
   
      this.ProyectoList=data;
      

      GlobalConstant.cont=this.ProyectoList.length;
      
      
      for( var cont=0; cont < GlobalConstant.cont ; cont++ )
      {
        if (this.ProyectoList[cont].id > GlobalConstant.max)
        {
          GlobalConstant.max=this.ProyectoList[cont].id;
        }
        
       
      }
      
      GlobalConstant.max=GlobalConstant.max+1;
      
      
      
    });



  }

  borraProyecto(proyecto:Proyecto)
  {
    
  
    if (confirm("Esta por borrar un registo, desea continuar?"))
      {
        this.personaService.borraProyecto(proyecto).subscribe();
        location.reload()
      }
      else
      {
        location.reload()
      }
    
   
  
  }



}
