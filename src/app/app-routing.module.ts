import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorComponent } from './pages/error/error.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { HabilidadesCreateEditComponent } from './pages/habilidades-create-edit/habilidades-create-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  { path: '', component: IndexComponent}, // Página de inicio
  { path: 'portafolio', component: PortafolioComponent, canActivate: [AuthGuard] }, // Página de habilidades
  { path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard] }, // Página de contacto
  { path: 'habilidades/create', component: HabilidadesCreateEditComponent, canActivate: [AuthGuard] }, // Página para crear 
  { path: 'habilidades/edit/:id', component: HabilidadesCreateEditComponent, canActivate: [AuthGuard] }, // Página para editar habilidades
  { path: 'login', component: LoginComponent/*, canActivate: [AuthGuard]*/ },  // Añadimos la ruta de login
  { path: '**', component: ErrorComponent/*, canActivate: [AuthGuard] */} // Página de error para rutas no encontradas
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }