import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService /*implements OnInit*/{

  private apiUrl = 'http://localhost/api/habilidades'; //url de la api

  constructor(private http: HttpClient) { }

  // Método para obtener todas las habilidades
  getHabilidades(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Método para obtener una habilidad específica por ID
  getHabilidad(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/view/${id}`);
  }

  createHabilidad(body: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  updateHabilidad(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit/${id}`, body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  deleteHabilidad(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
  

}

