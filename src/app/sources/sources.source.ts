import { Injectable } from '@angular/core';
import { SourceDTO } from '../models/source.dto';
import { ReaperScanSource } from './reaperScan.source';

@Injectable({
    providedIn: 'root', 
  })
export class SourcesService{
    constructor(
        public reaperScanSource: ReaperScanSource,
    ) { }

    SOURCES:SourceDTO[]=[
        {id:1,tag:"reaperscanbr",nome:"Reaper Scan Brasil",lingua:"Português brasileiro",link:"https://reaperscans.com.br/todas-as-series/",logo:"assets/scans/logo-reaper-2.png",source:this.reaperScanSource},
        
    ]
    
   
}