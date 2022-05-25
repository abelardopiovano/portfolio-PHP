import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';
import { GlobalConstant } from '../../GlobalConstant';
import { Habilidades } from 'src/app/modelos/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  persona={id:0, nombre:"", descripcion:"",url_cv:""};
  HabilidadesList:any;
  valida2=GlobalConstant.valida;

  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    GlobalConstant.max=0;
    
    this.personaService.getPersona().subscribe( data=>{
      
      this.persona=data
      
      GlobalConstant.id=this.persona.id;
    });

    this.personaService.getHabilidades().subscribe( data=>{
     
      this.HabilidadesList=data;
      
      

      GlobalConstant.cont=this.HabilidadesList.length;
    
      
      for( var cont=0; cont < GlobalConstant.cont ; cont++ )
      {
        if (this.HabilidadesList[cont].id > GlobalConstant.max)
        {
          GlobalConstant.max=this.HabilidadesList[cont].id;
        }
        
      
      }
      
      GlobalConstant.max=GlobalConstant.max+1;
      
      
      
    });



  }

  borraHabilidades(habilidades:Habilidades)
  {
   
  
    if (confirm("Esta por borrar un registo, desea continuar?"))
      {
        this.personaService.borraHabilidades(habilidades).subscribe();
        location.reload()
      }
      else
      {
        location.reload()
      }
    
   
  
  }





}
