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
    
    this.carga.showServicio(id).subscribe( resultado => {
      console.log(resultado);      
      this.datosSaint.nombre = resultado.nombre;
      this.datosSaint.constelacion = resultado.constelacion;
      this.datosSaint.pais = resultado.pais;
      this.datosSaint.edad = resultado.edad;
      this.datosSaint.serie = resultado.serie;
      this.datosSaint.clase = resultado.clase;
      this.datosSaint.informacion = resultado.informacion;
      this.datosSaint.imagen = resultado.imagen;
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
  }
  

}
