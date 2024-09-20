import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorComponent } from './pages/error/error.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';



const routes: Routes = [
  { path: '', component: IndexComponent }, // Página de inicio
  { path: 'portafolio', component: PortafolioComponent }, // Página de habilidades
  { path: 'contacto', component: ContactoComponent }, // Página de contacto
  { path: '**', component: ErrorComponent } // Página de error para rutas no encontradas
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }