import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'reader',
    loadChildren: () => import('./modals/reader/reader.module').then( m => m.ReaderPageModule)
  },
  {
    path: 'novels-page',
    loadChildren: () => import('./pages/novels-page/novels-page.module').then( m => m.NovelsPagePageModule)
  },
  {
    path: 'novel-page',
    loadChildren: () => import('./pages/novel-page/novel-page.module').then( m => m.NovelPagePageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
