import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController, ModalController } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements AfterViewInit {
  @ViewChild('leitor',{ read: ElementRef }) leitor: ElementRef;
  @Input() chapter:any;
  @Input() source:any;
  @Input() obra:any;
  showBar: Boolean=false
  data=[]
  loading=true
  constructor(
    private gestureCtrl: GestureController,
    private modalController: ModalController,
    public loadingService: LoadingService
  ) { }
  start=0
  end=0
  setShowBar(){
    setTimeout(()=>this.showBar=!this.showBar,100)
    this.hideStatusBar()
  }
  dismiss() {   
    this.modalController.dismiss({
      'dismissed': true
    });
    this.showStatusBar()
  }
  
  async hideStatusBar () {
    await StatusBar.hide();
  };
  async showStatusBar () {
    await StatusBar.show();
  };
  ngAfterViewInit() {
    this.hideStatusBar()
    const gesture:Gesture = this.gestureCtrl.create({
      el:this.leitor.nativeElement,
      gestureName:"showHideBar",
      threshold: 0,
      onMove:()=>{
        this.showBar=!this.showBar
        this.hideStatusBar()
      }

    })
    this.data=this.source.readNovel(this.chapter.link)
    this.loadingService.presentLoading(this.data) 
    gesture.enable();
  }

}
