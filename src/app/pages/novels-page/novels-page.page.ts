import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NovelDTO } from 'src/app/models/novel.dto';

@Component({
  selector: 'app-novels-page',
  templateUrl: './novels-page.page.html',
  styleUrls: ['./novels-page.page.scss'],
})
export class NovelsPagePage implements OnInit {
  search=false
  obras:NovelDTO[]
  tag:any
  scan: string="Novels"
  source:any
  loading=true
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public nav: NavController
  ) { 
    
    
    


  }

  searchBarOpenClose(){
    this.search=!this.search
  }
  
  navigateNovel(item){
    console.log(item)
    this.nav.navigateForward('novel-page',{state:{item:item,source:this.source}})


  }

  ngOnInit() {
    
    
    this.route.queryParams.subscribe(params => {
      
      if (this.router.getCurrentNavigation().extras.state) {
        this.scan = this.router.getCurrentNavigation().extras.state.scan.nome;
        this.source=this.router.getCurrentNavigation().extras.state.scan.source
        this.obras=this.router.getCurrentNavigation().extras.state.scan.source.getAllNovels()        
        setTimeout(()=>this.loading=false,2000)
        

      }
    });
  }

}
