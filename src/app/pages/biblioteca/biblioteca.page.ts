import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {
  search=false
  
  searchBarOpenClose(){
    this.search=!this.search
  }
  
  

  
  constructor() { }
  

  ngOnInit() {
    
    

    
  }

}
