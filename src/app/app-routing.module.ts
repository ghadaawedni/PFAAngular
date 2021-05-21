import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {DefinitionComponent} from './components/about/definition/definition.component';
import {StructureComponent} from './components/about/structure/structure.component';
import {DonComponent} from './components/don/don.component';
import {ContactComponent} from './components/contact/contact.component';
import { AideComponent } from './components/aide/aide.component';
import { GarantieComponent } from './components/aide/garantie/garantie.component';
import { ServiceComponent } from './components/aide/service/service.component';
import { InscritComponent } from './components/aide/inscrit/inscrit.component';
import { ImportanceComponent } from './components/aide/importance/importance.component';
import {NewsComponent} from './components/news/news.component';
import {LatestnewsComponent} from './components/news/latestnews/latestnews.component';
import {ManifestationComponent} from './components/news/manifestation/manifestation.component';
import {AdminComponent} from './components/admin/admin.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {LoginComponent} from './components/admin/login/login.component';

const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'home',  component : HomeComponent},
  { path: 'about',  component : AboutComponent},
  { path: 'definition',  component : DefinitionComponent},
  { path: 'structure',  component : StructureComponent},
  { path: 'donate',  component : DonComponent},
  { path: 'contact',  component : ContactComponent},
  { path: 'aide', component: AideComponent},
  { path : 'garantie', component: GarantieComponent},
  { path : 'service', component: ServiceComponent} ,
  { path : 'inscrit', component: InscritComponent} ,
  { path : 'importance', component : ImportanceComponent},
  { path : 'news', component : NewsComponent},
  { path : 'latestnews', component : LatestnewsComponent},
  { path : 'manifestation', component : ManifestationComponent},
  { path:  'admin', component: AdminComponent },
  { path:  'dashboard', component: DashboardComponent },
  { path:  'login', component: LoginComponent },
  // {
  //   path: 'news',
  //   component: NewsComponent, // this is the component with the <router-outlet> in the template
  //   children: [
  //       {
  //        path: 'latestnews',
  //       component: latestnews, // child route component that the router renders
  //       },
  //       {
  //         path: 'manifestation',
  //         component: ManifestationComponent, // another child route component that the router renders
  //        }
  //  ]
  // }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
