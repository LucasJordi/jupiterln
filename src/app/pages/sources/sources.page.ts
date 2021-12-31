import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StateData } from 'src/app/services/states/state.service';
import { ReaperScanSource } from 'src/app/sources/reaperScan.source';
import { SourcesService } from 'src/app/sources/sources.source';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  constructor(
    public reaperScanSource: ReaperScanSource,
    public sourcesService:SourcesService,
    public nav: NavController,
    public stateService:StateData
    ) { }
  search=false
  scans=this.sourcesService.SOURCES
  searchBarOpenClose(){
    this.search=!this.search
  }
  navigateNovels(item){
    
    
    this.nav.navigateForward('novels-page',{state:{scan:item}})
    this.stateService.putPlugin(item)
  }

  ngOnInit() {
  }

}
