import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ReaperScanSource } from 'src/app/sources/reaperScan.source';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  constructor(
    public reaperScanSource: ReaperScanSource,
    public nav: NavController
    ) { }
  search=false
  scans=[
    {id:1,tag:"reaperscanbr",nome:"Reaper Scan Brasil",lingua:"Português brasileiro",link:"https://reaperscans.com.br/todas-as-series/",logo:"assets/scans/logo-reaper-2.png",source:this.reaperScanSource},
    //{nome:"Saikai Scan",lingua:"Português brasileiro",link:"https://saikaiscan.com.br/series",logo:"assets/scans/saikai.png"}
  ]
  searchBarOpenClose(){
    this.search=!this.search
  }
  navigateNovels(item){
    
    
    this.nav.navigateForward('novels-page',{state:{scan:item}})

  }

  ngOnInit() {
  }

}
