import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovelPagePageRoutingModule } from './novel-page-routing.module';

import { NovelPagePage } from './novel-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovelPagePageRoutingModule
  ],
  declarations: [NovelPagePage]
})
export class NovelPagePageModule {}
