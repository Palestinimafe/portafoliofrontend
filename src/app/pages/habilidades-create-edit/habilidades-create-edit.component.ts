import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from '../../services/habilidades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habilidades-create-edit',
  templateUrl: './habilidades-create-edit.component.html',
  styleUrl: './habilidades-create-edit.component.css'
})
export class HabilidadesCreateEditComponent implements OnInit {

  private readonly fb = inject(UntypedFormBuilder);
  private readonly habilidadesService = inject(HabilidadesService);
  private readonly route = inject(ActivatedRoute);
  private idHabilidad : number | null = null;
  public formulario: UntypedFormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    nivel: ['',[Validators.required]],
    fichero: ['',[Validators.required]],
  })

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.idHabilidad = id ? parseInt(id) : null; // Convierte `id` a número
      this.cargarHabilidad(); // Carga la información de la habilidad si hay un id
     // console.log(id);
    });
  }
  
  enviar(event: any) {
    if (this.formulario.invalid) {
      console.log(this.formulario);
      alert(this.formulario.errors);
      return;
    }
    
    // Si `idHabilidad` está definido, es una actualización; si no, es una creación
    if (this.idHabilidad) {
      this.habilidadesService.updateHabilidad(this.idHabilidad, this.formulario.value).subscribe({
        next: (respuesta) => {
          alert('Habilidad actualizada exitosamente');
        },
        error: (error) => {
          console.error('Error al actualizar la habilidad', error);
        }
      });
    } else {
      this.habilidadesService.createHabilidad(this.formulario.value).subscribe({
        next: (respuesta) => {
          alert('Habilidad creada exitosamente');
        },
        error: (error) => {
          console.error('Error al crear la habilidad', error);
        }
      });
    }
  }

  cargarHabilidad() {
    if (this.idHabilidad !== null) {
      this.habilidadesService.getHabilidad(this.idHabilidad).subscribe({
        next: (respuesta) => {
          console.log(respuesta.habilidad);
          this.formulario.patchValue({
            nombre: respuesta.habilidad.nombre,
            descripcion: respuesta.habilidad.descripcion,
            nivel: respuesta.habilidad.nivel,
            fichero: respuesta.habilidad.fichero
          });
          console.log(this.formulario);
        },
        error: (error) => {
          console.error('Error al cargar la habilidad', error);
        }
      });
    }
  }


  
}
