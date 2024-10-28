import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private readonly fb = inject(UntypedFormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public formulario: UntypedFormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  enviar() {
    if (this.formulario.invalid) {
        alert('Por favor completa todos los campos.');
        return;
    }

    this.authService.login(this.formulario.value).subscribe({
        next: (response) => {
            if (response.success) {
                this.router.navigate(['/']);  // Redirige a la página principal tras el login
            } else {
                alert('Credenciales inválidas');
            }
        },
        error: (error) => {
            console.error('Error en el login:', error);
            alert('Error al intentar iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    });
}
}
