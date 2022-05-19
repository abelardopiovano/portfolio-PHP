import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { PersonaService } from '../../servicios/persona.service';
import { GlobalConstant } from '../../GlobalConstant';
import { NgForm } from '@angular/forms';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
  }


@Component({
  selector: 'app-agrega-skills',
  templateUrl: './agrega-skills.component.html',
  styleUrls: ['./agrega-skills.component.css']
})
export class AgregaSkillsComponent implements OnInit {

  ExperienciaList:any;
  
  habilidades={id:0, habilidad:"",url_habilidad:"",persona_id:0};



  constructor(

    public router: Router,
    private personaService: PersonaService


  ) { }

  ngOnInit(): void {

    this.personaService.getHabilidades().subscribe( data=>{
      
      this.habilidades.id=GlobalConstant.max;
      this.habilidades.persona_id=GlobalConstant.id;
      
    });

  }

  agregaHabilidades(formulario:NgForm)
  {
  
  this.habilidades=formulario.value;
  //this.experiencia.id=0;
  this.habilidades.id=GlobalConstant.max;
  this.habilidades.persona_id=GlobalConstant.id;
  //console.log(this.experiencia)
  //console.log(formulario.value)
  //console.log(GlobalConstant.id)
  //this.personaService.putExperiencia(formulario.value).subscribe();
  this.personaService.postHabilidades(formulario.value).subscribe();
  this.router.navigate(['/habilidades']);
    
  
  }



}
