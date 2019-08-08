import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CidadaoPage } from './cidadao';

@NgModule({
  declarations: [
    CidadaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CidadaoPage),
  ],
})
export class CidadaoPageModule {}
