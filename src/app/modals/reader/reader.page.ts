import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController, ModalController } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { LoadingService } from 'src/app/services/loading.service';
import { NovelChapter } from 'src/app/models/novelChapter.dto';
import { Novel } from 'src/app/models/novel.dto';

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
  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log("foi")
  //we'll do some stuff here when the window is scrolled
  }
  showBar: Boolean=false
  data:NovelChapter
  content:string[]
  text:string
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
  scroll(event){
    console.log(event)
  }
  async getChap(){
    this.data=await this.source.readNovel(this.chapter.link)
    this.text=this.data.text
    this.content=this.data.content
    console.log(this.data)
  }
  ngAfterViewInit() {
    document.addEventListener("sroll", function(){ console.log("Hello World!"); });
    this.hideStatusBar()
    const gesture:Gesture = this.gestureCtrl.create({
      el:this.leitor.nativeElement,
      gestureName:"showHideBar",
      threshold: 0,
      onMove:()=>{
        this.showBar=!this.showBar
        //this.hideStatusBar()
      }

    })
    
    this.getChap()
    //this.loadingService.presentLoading(this.data) 
    
    gesture.enable();
  }

}
