import { Component, OnInit } from '@angular/core';
import { CargaInicialService } from './../servicios/carga-inicial.service';
import * as $ from 'jquery' ;


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    
  filterPost = '';  
  santos:any;
  datosSaint:any = {
    nombre:"",
    constelacion:"",
    pais:"",
    edad:"",
    serie:"",
    clase:"",
    informacion:"",
    imagen:""
  };
  saintTipo:any = ["Bronce","Plata","Oro","Sonota"];
  opcion:string = "";
  imagenes:any;
  contadorCarrusel:number;

  constructor(private carga:CargaInicialService){    
    this.cargaInicial();
  }

  ngOnInit() {
  }

  cargaInicial(){
    this.carga.cargaInicialServicio().subscribe(resultado => {
      this.santos = resultado;      
    },
    error => {
      console.log(error);
    });
  }

  show(id){
    this.contadorCarrusel=0;
    this.carga.showServicio(id).subscribe( resultado => {
      console.log(resultado);      
      this.datosSaint.nombre = resultado.saint.nombre;
      this.datosSaint.constelacion = resultado.saint.constelacion;
      this.datosSaint.pais = resultado.saint.pais;
      this.datosSaint.edad = resultado.saint.edad;
      this.datosSaint.serie = resultado.saint.serie;
      this.datosSaint.clase = resultado.saint.clase;
      this.datosSaint.informacion = resultado.saint.informacion;
      this.datosSaint.imagen = resultado.saint.imagen;

      this.imagenes = resultado.imagenes;
      console.log(this.imagenes)
    },
    error => {
      console.log(error);
    });    
  } 

  limpiarModal(){    
    this.datosSaint = {
      nombre:"",
      constelacion:"",
      pais:"",
      edad:"",
      serie:"",
      clase:"",
      informacion:"",
      imagen:""
    };
    this.imagenes = [];
  }

  changTipo($event){
    console.log($event.target.value)
    this.opcion = $event.target.value;
  }
  

}
