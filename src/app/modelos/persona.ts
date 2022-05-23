export interface Persona
{
    id: number;
    nombre: string;
    descripcion: string;
    url_cv: string;
}

export interface Experiencia
{
    id:number;
    nombre_empresa:string;
    cargo:string;
    descripcion:string;
    persona_id:number;
}

export interface Educacion
{
    id:number;
    nombreInst:string;
    titulo:string;
    descripcion:string;
    persona_id:number;

}

export interface Proyecto
{
    id:number;
    url_imagen:string;
    nombreProyecto:string;
    descripcion:string;
    url_proyecto:string;
    persona_id:number;

}

export interface Habilidades
{
    id:number;
    habilidad:string;
    url_habilidad:string;
    persona_id:number;
}