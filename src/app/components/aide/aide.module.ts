import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GarantieComponent} from './garantie/garantie.component';
import {ImportanceComponent} from './importance/importance.component';
import {InscritComponent} from './inscrit/inscrit.component';
import {ServiceComponent} from './service/service.component';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [
    GarantieComponent,
    ImportanceComponent,
    InscritComponent,
    ServiceComponent
  ],
  exports: [
    ImportanceComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AideModule { }
