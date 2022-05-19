import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../../GlobalConstant';
import { Router } from '@angular/router';
import { PersonaService } from '../../servicios/persona.service';
import { Educacion } from 'src/app/modelos/persona';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  persona={id:0, nombre:"", descripcion:"",url_cv:""};
  EducacionList:any;
  valida2=GlobalConstant.valida;
 
 
 
  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    GlobalConstant.max=0;
    
    this.personaService.getPersona().subscribe( data=>{
      //this.persona={id:1, nombre:"n1",descripcion:"d1",url_cv:"w1"}
      //data=data.stringify
      this.persona=data
      //Number(this.experiencia.id=GlobalConstant.max)+1;
      //this.experiencia.persona_id=Number(this.persona.id);
      //this.experiencia.persona_id=(this.persona.id);
      //console.log(this.persona)
      //console.log(data)
      //console.log(this.experiencia.id)
      GlobalConstant.id=this.persona.id;
    });

    this.personaService.getEducacion().subscribe( data=>{
      //console.log(data)
      this.EducacionList=data;
      //console.log(this.ExperienciaList.length)

      GlobalConstant.cont=this.EducacionList.length;
      //console.log(GlobalConstant.cont)
      
      for( var cont=0; cont < GlobalConstant.cont ; cont++ )
      {
        if (this.EducacionList[cont].id > GlobalConstant.max)
        {
          GlobalConstant.max=this.EducacionList[cont].id;
        }
        
        //console.log(this.ExperienciaList[cont].id);
      }
      
      GlobalConstant.max=GlobalConstant.max+1;
      
      //console.log(GlobalConstant.max);
      //console.log(GlobalConstant.id);
      
    });





  }

  borraEducacion(educacion:Educacion)
  {
    //console.log(experiencia.id)
  
    if (confirm("Esta por borrar un registo, desea continuar?"))
      {
        this.personaService.borraEducaciona(educacion).subscribe();
        location.reload()
      }
      else
      {
        location.reload()
      }
    
    //console.log("borrando");
    //this.personaService.borraExperiencia(experiencia).subscribe();
    
    //this.router.navigate(['/experiencia']);
  
  //this.personaService.borraExperiencia(experiencia).subscribe();
  
  //console.log("borrando");
  
  //this.router.navigate(['/experiencia']);
  //location.reload;
  
  }




}
