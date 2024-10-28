import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/api/usuarios/login';  

  constructor(private http: HttpClient,private router: Router) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, credentials, {
        headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).pipe(
        tap(response => {
            if (response.success) {
                localStorage.setItem('token', response.json.token);  // Aquí puedes guardar un token si tu backend lo proporciona
                this.router.navigate(['/index']);
            }
        })
    );
}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');  // Verificamos si hay un token en localStorage
  }

  logout(): void {
    localStorage.removeItem('token');  // Elimina el token del localStorage al cerrar sesión
  }


}
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // Obtén el token almacenado en el localStorage

    if (token) {
      // Clona la solicitud y agrega el encabezado de autenticación
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}