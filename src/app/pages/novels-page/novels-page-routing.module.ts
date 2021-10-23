import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovelsPagePage } from './novels-page.page';

const routes: Routes = [
  {
    path: '',
    component: NovelsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovelsPagePageRoutingModule {}
