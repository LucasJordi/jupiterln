import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovelPagePageRoutingModule } from './novel-page-routing.module';

import { NovelPagePage } from './novel-page.page';
import { LoadingSpinnerComponentComponent } from 'src/app/components/loading-spinner-component/loading-spinner-component.component';
import { ComponentsModules } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovelPagePageRoutingModule,
    ComponentsModules
  ],
  declarations: [NovelPagePage]
})
export class NovelPagePageModule {}
