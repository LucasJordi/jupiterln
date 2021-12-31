import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizationsPageRoutingModule } from './atualizations-routing.module';

import { AtualizationsPage } from './atualizations.page';
import { ComponentsModules } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizationsPageRoutingModule,
    ComponentsModules
  ],
  declarations: [AtualizationsPage]
})
export class AtualizationsPageModule {}
