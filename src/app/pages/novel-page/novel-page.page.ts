import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ReaderPage } from 'src/app/modals/reader/reader.page';
import { Novel } from 'src/app/models/novel.dto';
import { db } from 'src/app/services/db/db.service';
import { LoadingService } from 'src/app/services/loading.service';
import { StateData } from 'src/app/services/states/state.service';

@Component({
  selector: 'app-novel-page',
  templateUrl: './novel-page.page.html',
  styleUrls: ['./novel-page.page.scss'],
})
export class NovelPagePage implements OnInit {
  obra:Novel
  chapters
  source
  loading: boolean=true
  library: boolean=false
  constructor(
    public modalController: ModalController,
    private route: ActivatedRoute, 
    private router: Router,
    public nav: NavController,
    public loadingService: LoadingService,
    public stateService:StateData
  ) { }
  addLibrary(){
    this.library=!this.library

    if(this.library){
      this.obra.source=this.stateService.getPlugin().id
      this.obra.scan=this.stateService.getPlugin().tag
      db.novel.add(this.obra)
    }
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

  async openReader(item) {
    this.stateService.putNovelChapter(item)
    const modal = await this.modalController.create({
      component: ReaderPage,
      cssClass: 'my-custom-class',
      componentProps: {
        "chapter":item,
        "source":this.source,
        "obra":this.obra
      }
    });
    return await modal.present();
  }

  ngOnInit() {    
      this.obra=this.stateService.getNovel()
      let caminho=this.stateService.getNovel().link
      this.chapters=this.stateService.getSource().getChapters(caminho)
      this.source=this.stateService.getSource()
      this.stateService.putNovelChapters(this.stateService.getSource().getChapters(caminho))
      this.loadingService.presentLoading(this.chapters)
  }

}
