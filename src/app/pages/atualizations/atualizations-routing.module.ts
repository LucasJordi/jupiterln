import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizationsPage } from './atualizations.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizationsPageRoutingModule {}
