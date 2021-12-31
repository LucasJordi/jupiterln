import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovelsPagePageRoutingModule } from './novels-page-routing.module';

import { NovelsPagePage } from './novels-page.page';
import { LoadingSpinnerComponentComponent } from 'src/app/components/loading-spinner-component/loading-spinner-component.component';
import { ComponentsModules } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovelsPagePageRoutingModule,
    ComponentsModules
  ],
  declarations: [NovelsPagePage]
})
export class NovelsPagePageModule {}
