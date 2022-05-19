import { RouterModule,Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactComponent } from './componentes/contact/contact.component';

import { FormsModule } from '@angular/forms';
import { EditaPersonaComponent } from './componentes/edita-persona/edita-persona.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgregaExperienciaComponent } from './componentes/agrega-experiencia/agrega-experiencia.component';
import { AgregaEducacionComponent } from './componentes/agrega-educacion/agrega-educacion.component';
import { AgregaProyectoComponent } from './componentes/agrega-proyecto/agrega-proyecto.component';
import { AgregaSkillsComponent } from './componentes/agrega-skills/agrega-skills.component';



 


const routes: Routes=[
 {path:'home',component:BodyComponent},
 {path:'experiencia',component:ExperienceComponent},
 {path:'educacion',component:EducationComponent},
 {path:'proyectos',component:ProyectsComponent},
 {path:'habilidades',component:SkillsComponent},
 {path:'contacto', component:ContactComponent},
 {path:'edita-persona', component:EditaPersonaComponent},
 {path:'ingresar',component:LoginComponent},
 {path:'agrega-experiencia',component:AgregaExperienciaComponent},
 {path:'agrega-educacion',component:AgregaEducacionComponent},
 {path:'agrega-proyecto',component:AgregaProyectoComponent},
 {path:'agrega-habilidades',component:AgregaSkillsComponent},

 {path:'',component:BodyComponent,pathMatch:'full'},
 {path:'**',redirectTo:'/', pathMatch:'full'},



];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,



    ExperienceComponent,
    EducationComponent,
    ProyectsComponent,
    SkillsComponent,
    ContactComponent,
    EditaPersonaComponent,
    LoginComponent,
    AgregaExperienciaComponent,
    AgregaEducacionComponent,
    AgregaProyectoComponent,
    AgregaSkillsComponent,





  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }