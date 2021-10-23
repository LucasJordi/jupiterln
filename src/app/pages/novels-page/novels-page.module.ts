import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovelsPagePageRoutingModule } from './novels-page-routing.module';

import { NovelsPagePage } from './novels-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovelsPagePageRoutingModule
  ],
  declarations: [NovelsPagePage]
})
export class NovelsPagePageModule {}
