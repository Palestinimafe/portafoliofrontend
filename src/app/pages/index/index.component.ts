import { Component, inject, OnInit } from '@angular/core';
import { HabilidadesService } from '../../services/habilidades.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  habilidades: any[] = [];
  public isLoggedIn: boolean = false;  // Propiedad para verificar si el usuario está logeado

  constructor(private habilidadesService: HabilidadesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.obtenerHabilidades(); // Llama a la función para obtener las habilidades al inicializar el componente
  }

  obtenerHabilidades() {
    this.habilidadesService.getHabilidades().subscribe((data: any) => {
      this.habilidades = data.habilidades;
      console.log(this.habilidades);
    },
    (error) => {
      console.error('Error al obtener habilidades:', error);
    }
    );
  }

  public eliminarHabilidad(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta habilidad?')) {
      this.habilidadesService.deleteHabilidad(id).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          alert('Habilidad eliminada correctamente.');
        },
        error: (error) => {
          console.error('Error al eliminar la habilidad', error);
        }
      });
    }
  }
  logout() {
    // Llamamos al método de logout del AuthService
    this.authService.logout();
    this.isLoggedIn = false;  // Actualizamos el estado a no logeado
  }
}
