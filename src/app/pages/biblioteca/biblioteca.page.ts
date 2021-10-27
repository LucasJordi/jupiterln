import { HttpResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements AfterViewInit {
  search=false
  refresh=false
  doRefresh(event) {
    console.log('Begin async operation');
    this.refresh=true
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.refresh=false
    }, 2000);
  }
  searchBarOpenClose(){
    this.search=!this.search
  } 
  constructor() { }
  ngAfterViewInit(){

  }

}
