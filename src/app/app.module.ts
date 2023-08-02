import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { CampeonatosComponent } from './modules/campeonatos/campeonatos.component';
import { ModalidadesComponent } from './modules/modalidades/modalidades.component';
import { SobreComponent } from './modules/sobre/sobre.component';
import { LoginComponent } from './modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    CampeonatosComponent,
    ModalidadesComponent,
    SobreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
