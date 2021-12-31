import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  @Input() title:string
  @Input() type:string
  constructor() { }

  search=false
  
  searchBarOpenClose(){
    this.search=!this.search
  } 

  ngOnInit() {
    console.log(this.type)
  }

}
