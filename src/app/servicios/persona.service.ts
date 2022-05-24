import { Injectable, Output } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import{  Observable,of } from 'rxjs'
import { __values } from 'tslib';
import { Experiencia, Persona, Educacion, Proyecto,Habilidades }   from '../modelos/persona';
import { GlobalConstant } from '../GlobalConstant';




const httpOptions ={
headers: new HttpHeaders({
  'Content-Type':'application/json'
})
}
GlobalConstant.id=1;
@Injectable({
  providedIn: 'root'
    
})
export class PersonaService {
  
  
  
  url: string ="/Api/";
  //url: string ="http://abelardopiovano.eshost.com.ar/Api4/api/";
  //url: string ="/Api3/";
  //url: string ="Api4/api/";
  constructor(
    public http:HttpClient
  ) { }


  
  getPersona(): Observable<any>
  {
    
    return this.http.get<any>(this.url+"persona/?id="+GlobalConstant.id)
  }

  getExperiencia(): Observable<any>
  {
    return this.http.get<Experiencia>(this.url+"experiencia")

  }

  getProyecto(): Observable<any>
  {
    return this.http.get<Proyecto>(this.url+"proyecto")

  }

  getEducacion(): Observable<any>
  {
    return this.http.get<Educacion>(this.url+"educacion")
    
  }

  getHabilidades(): Observable<any>
  {
    return this.http.get<Habilidades>(this.url+"habilidades")
    
  }

  putPersonas(persona:Persona): Observable<any>
  { 
    //console.log(GlobalConstant.data)
   
    persona.id=GlobalConstant.id;
     //console.log("put")
    //const url2 = this.url + 'persona/'+ GlobalConstant.id
    return this.http.put<any>(this.url+"persona/?id="+GlobalConstant.id,persona,httpOptions)
    
    
  }

  postPersonas(persona:Persona): Observable<Persona>
  { 
     //console.log("post")
    //const url2 = this.url + 'persona/'+ '1'
    return this.http.post<Persona>(this.url+"persona",persona,httpOptions)
    
  }

  putExperiencia(experiencia:Experiencia): Observable<Experiencia>
  { 
    experiencia.id=GlobalConstant.id;
     //console.log("put")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.put<Experiencia>(this.url+"experiencia/?id="+GlobalConstant.max,experiencia,httpOptions)
    
  }

  postExperiencia(experiencia:Experiencia): Observable<Experiencia>
  { 
    //experiencia.id=GlobalConstant.max;
     //console.log("post")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.post<Experiencia>(this.url+"experiencia/",experiencia,httpOptions)
    
  }

  borraExperiencia(experiencia:Experiencia): Observable<Experiencia>
  { 
     //console.log("delete")
     
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.delete<Experiencia>(this.url+"experiencia/?id="+experiencia.id,httpOptions)
    
  }
  

  //Educacion----------------------------------------------------------------------------------

  putEducacion(educacion:Educacion): Observable<Educacion> 
  { 
     //console.log("put")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.put<Educacion>(this.url+"educacion/"+GlobalConstant.max,educacion,httpOptions)
    
  }

  postEducacion(educacion:Educacion): Observable<Educacion>
  { 
     //console.log("post")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.post<Educacion>(this.url+"educacion",educacion,httpOptions)
    
  }

  borraEducaciona(educacion:Educacion): Observable<Educacion>
  { 
     //console.log("delete")
     
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.delete<Educacion>(this.url+"educacion/"+educacion.id,httpOptions)
    
  }

  //-------------------------------------------------------------------------------------------

  //Proyecto----------------------------------------------------------------------------------

  putProyecto(proyecto:Proyecto): Observable<Proyecto> 
  { 
     //console.log("put")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.put<Proyecto>(this.url+"proyecto/"+GlobalConstant.max,proyecto,httpOptions)
    
  }

  postProyecto(proyecto:Proyecto): Observable<Proyecto>
  { 
     //console.log("post")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.post<Proyecto>(this.url+"proyecto/",proyecto,httpOptions)
    
  }

  borraProyecto(proyecto:Proyecto): Observable<Proyecto>
  { 
     //console.log("delete")
     
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.delete<Proyecto>(this.url+"proyecto/?id="+proyecto.id,httpOptions)
    
  }

  //-------------------------------------------------------------------------------------------

  //Habilidades----------------------------------------------------------------------------------

  putHabilidades(habilidades:Habilidades): Observable<Habilidades> 
  { 
     //console.log("put")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.put<Habilidades>(this.url+"habilidades/"+GlobalConstant.max,habilidades,httpOptions)
    
  }

  postHabilidades(habilidades:Habilidades): Observable<Habilidades>
  { 
     //console.log("post")
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.post<Habilidades>(this.url+"habilidades",habilidades,httpOptions)
    
    
  }

  borraHabilidades(habilidades:Habilidades): Observable<Habilidades>
  { 
     //console.log("delete")
     
    //const url2 = this.url + 'experiencia/'+ '1'
    return this.http.delete<Habilidades>(this.url+"habilidades/"+habilidades.id,httpOptions)
    
  }

  //-------------------------------------------------------------------------------------------

}
