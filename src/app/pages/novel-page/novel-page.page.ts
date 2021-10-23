import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReaderPage } from 'src/app/modals/reader/reader.page';

@Component({
  selector: 'app-novel-page',
  templateUrl: './novel-page.page.html',
  styleUrls: ['./novel-page.page.scss'],
})
export class NovelPagePage implements OnInit {

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ReaderPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
