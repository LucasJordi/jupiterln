import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Novel } from 'src/app/models/novel.dto';

@Component({
  selector: 'novel-card',
  templateUrl: './novel-card.component.html',
  styleUrls: ['./novel-card.component.scss'],
})
export class NovelCardComponent implements OnInit {
  @Input() item:Novel
  @Output() activate=new EventEmitter<any>()
  constructor() { }
  click(item){
    console.log(item)
    this.activate.emit(item)
  }

  ngOnInit() {
    console.log(this.item)
  }

}
