import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovelPagePage } from './novel-page.page';

const routes: Routes = [
  {
    path: '',
    component: NovelPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovelPagePageRoutingModule {}
