import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { AideComponent } from './components/aide/aide.component';
import {AideModule} from './components/aide/aide.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './components/news/news.component';
import { LatestnewsComponent } from './components/news/latestnews/latestnews.component';
import { ManifestationComponent } from './components/news/manifestation/manifestation.component';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NavBarService } from './components/nav-bar/nav-bar.service';
import { LoginComponent } from './components/admin/login/login.component';
import { httpInterceptorProviders } from './components/auth/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
    NewsComponent,
    LatestnewsComponent,
    ManifestationComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AideModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [NavBarService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
