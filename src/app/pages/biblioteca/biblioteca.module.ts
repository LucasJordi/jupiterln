import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { LoadingSpinnerComponentComponent } from 'src/app/components/loading-spinner-component/loading-spinner-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule
  ],
  declarations: [BibliotecaPage,LoadingSpinnerComponentComponent]
})
export class BibliotecaPageModule {}
