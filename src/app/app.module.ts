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




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactoComponent,
    ErrorComponent,
    PortafolioComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
