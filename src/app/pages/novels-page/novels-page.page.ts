import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Novel } from 'src/app/models/novel.dto';
import { LoadingService } from 'src/app/services/loading.service';
import { StateData } from 'src/app/services/states/state.service';

@Component({
  selector: 'app-novels-page',
  templateUrl: './novels-page.page.html',
  styleUrls: ['./novels-page.page.scss'],
})
export class NovelsPagePage implements OnInit {
  search=false
  obras:Novel[]
  tag:any
  scan: string="Novels"
  source:any
  loading=true
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public nav: NavController,
    public loadingService: LoadingService,
    public stateService:StateData
    

    

  ) { 
    
    
    


  }

  searchBarOpenClose(){
    this.search=!this.search
  }
  
  navigateNovel(item){
    console.log(item)
    this.nav.navigateForward('novel-page',{state:{item:item,source:this.source}})
    this.stateService.putSource(this.source)
    this.stateService.putNovel(item)
    

  }
  testLoading(data){
    if(data.length>0){
      this.loading=false

    }else{
      setTimeout(()=>{
        if(data.length>0){
          this.loading=false
    
        }
      },2000)
    }
    
  }
  

  async bringData(){
     this.obras=await this.stateService.plugin.source.getAllNovels()
     this.loadingService.presentLoading(this.obras)
  }

  ngOnInit() {
    console.log(this.stateService.plugin)
    this.scan =this.stateService.plugin.nome;
    this.source=this.stateService.plugin.source
    this.bringData()
    //this.nav.back()
    
    
  }

}
