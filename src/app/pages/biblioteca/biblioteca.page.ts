import { HttpResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { NavController } from '@ionic/angular';
import { liveQuery } from 'dexie';
import { Novel } from 'src/app/models/novel.dto';
import { db } from 'src/app/services/db/db.service';
import { LoadingService } from 'src/app/services/loading.service';
import { StateData } from 'src/app/services/states/state.service';
import { SourcesService } from 'src/app/sources/sources.source';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements AfterViewInit {

  obras
  search=false
  refresh=false
  navigateNovel(item:Novel){
    console.log(item)
    this.nav.navigateForward('novel-page',{state:{item:item,source:this.sourcesService.SOURCES.find(x=>x.id===item.source).source}})
    this.stateService.putSource(this.sourcesService.SOURCES.find(x=>x.id===item.source).source)
    this.stateService.putNovel(item)
    

  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.refresh=true
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.refresh=false
    }, 2000);
  }
  searchBarOpenClose(){
    this.search=!this.search
  } 
  constructor(
    public nav: NavController,
    public loadingService: LoadingService,
    public stateService:StateData,
    public sourcesService:SourcesService,
  ) { }
  ngAfterViewInit(){
    this.obras= liveQuery(() =>db.novel.toArray()).subscribe(resp=>{
      console.log(resp)
      this.obras=resp
    })
    

  }

}
