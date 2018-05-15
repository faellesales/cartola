import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscaladosPage } from './escalados';

@NgModule({
  declarations: [
    EscaladosPage,
  ],
  imports: [
    IonicPageModule.forChild(EscaladosPage),
  ],
})
export class EscaladosPageModule {}
