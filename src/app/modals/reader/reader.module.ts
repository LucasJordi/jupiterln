import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReaderPageRoutingModule } from './reader-routing.module';

import { ReaderPage } from './reader.page';
import { LoadingSpinnerComponentComponent } from 'src/app/components/loading-spinner-component/loading-spinner-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReaderPageRoutingModule
  ],
  declarations: [ReaderPage,LoadingSpinnerComponentComponent]
})
export class ReaderPageModule {}
