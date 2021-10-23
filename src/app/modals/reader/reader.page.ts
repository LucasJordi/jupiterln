import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements AfterViewInit {
  @ViewChild('leitor',{ read: ElementRef }) leitor: ElementRef;
  showBar: Boolean=false

  constructor(
    private gestureCtrl: GestureController,
    private modalController: ModalController
  ) { }
  start=0
  end=0
  setShowBar(){
    // if(this.end-this.start>=2000){
    //   setTimeout(()=>this.showBar=true,100)
    // } 
    // if(this.end-this.start<=2000){
    //   //setTimeout(()=>this.showBar=false,100)
    // }    
    // console.log(this.end-this.start)
    setTimeout(()=>this.showBar=!this.showBar,100)
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  

  ngAfterViewInit() {
    const gesture:Gesture = this.gestureCtrl.create({
      el:this.leitor.nativeElement,
      gestureName:"showHideBar",
      threshold: 0,
      onMove:()=>{
        this.showBar=!this.showBar
      }

    })
   
  
    gesture.enable();
  }

}
