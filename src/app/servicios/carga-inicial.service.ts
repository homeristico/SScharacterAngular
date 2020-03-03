import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaInicialService {

  
  constructor(private http:HttpClient){
    //
  }

  cargaInicialServicio():Observable<any>{
    // ==== Para respuestas de texto =====
    //return this.http.get('http://localhost:8000/api/saintangu',{responseType: 'text'}); 

    return this.http.get('http://localhost:8000/api/saintangu');
  }

  showServicio(id):Observable<any>{
    return this.http.get(`http://localhost:8000/api/saintangu/${id}`);
  }

  cargarClaseServicio():Observable<any>{
    return this.http.get('http://localhost:8000/clase');
  }

}
