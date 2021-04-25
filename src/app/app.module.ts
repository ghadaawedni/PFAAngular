import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {AboutModule} from './components/about/about.module';
import { DonComponent } from './components/don/don.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import { AideComponent } from './components/aide/aide.component';
import { GarantieComponent } from './components/aide/garantie/garantie.component';
import { ServiceComponent } from './components/aide/service/service.component';
import { InscritComponent } from './components/aide/inscrit/inscrit.component';
import { ImportanceComponent } from './components/aide/importance/importance.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    DonComponent,
    ContactComponent,
    AideComponent,
    GarantieComponent,
    ServiceComponent,
    InscritComponent,
    ImportanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
