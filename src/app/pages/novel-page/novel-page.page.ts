import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ReaderPage } from 'src/app/modals/reader/reader.page';

@Component({
  selector: 'app-novel-page',
  templateUrl: './novel-page.page.html',
  styleUrls: ['./novel-page.page.scss'],
})
export class NovelPagePage implements OnInit {
  obra
  chapters
  source
  loading: boolean=true
  library: boolean=false
  constructor(
    public modalController: ModalController,
    private route: ActivatedRoute, 
    private router: Router,
    public nav: NavController
  ) { }
  addLibrary(){
    this.library=!this.library
  }

  async openReader(item) {
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
    this.route.queryParams.subscribe(params => {      
      if (this.router.getCurrentNavigation().extras.state) {      
        this.obra=this.router.getCurrentNavigation().extras.state.item
        let caminho=this.router.getCurrentNavigation().extras.state.item.caminho
        this.chapters=this.router.getCurrentNavigation().extras.state.source.getChapters(caminho)
        this.source=this.router.getCurrentNavigation().extras.state.source
        setTimeout(()=>this.loading=false,2000)
      }
    });
  }

}
