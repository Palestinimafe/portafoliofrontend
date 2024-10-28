import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorComponent } from './pages/error/error.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HabilidadesService } from './services/habilidades.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HabilidadesCreateEditComponent } from './pages/habilidades-create-edit/habilidades-create-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactoComponent,
    ErrorComponent,
    PortafolioComponent,
    HeaderComponent,
    FooterComponent,
    HabilidadesCreateEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [HabilidadesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

