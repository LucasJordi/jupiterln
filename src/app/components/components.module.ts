import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { LoadingSpinnerComponentComponent } from './loading-spinner-component/loading-spinner-component.component';
import { NovelCardComponent } from './novel-card/novel-card.component';


const COMPONENTS=[
    HeaderBarComponent,
    LoadingSpinnerComponentComponent,
    NovelCardComponent
]
@NgModule({
  declarations: [COMPONENTS],
  entryComponents: [],
  imports: [ IonicModule.forRoot(), CommonModule],
  exports:[COMPONENTS],
  
})
export class ComponentsModules {}