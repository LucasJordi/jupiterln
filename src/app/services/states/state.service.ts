import { Injectable } from '@angular/core';
import { Novel } from 'src/app/models/novel.dto';
import { NovelChapter } from 'src/app/models/novelChapter.dto';
import { SourceDTO } from 'src/app/models/source.dto';


@Injectable({
    providedIn: 'root', 
  })
export class StateData{
    constructor() { }
    novel:Novel
    chapters:NovelChapter[]
    chapter:object
    plugin:SourceDTO
    source


    putPlugin(obj:any){
        this.plugin=obj
    }
    getPlugin(){
        console.log(this.plugin)
        return this.plugin
    }

    putSource(obj:any){
        this.source=obj
    }
    getSource(){
        return this.source
    }


    putNovel(obj:any){
        this.novel=obj
    }
    getNovel(){
        return this.novel
    }

    putNovelChapter(obj:NovelChapter){
        this.chapter=obj
    }
    getNovelChapter(){
        return this.chapter
    }

    putNovelChapters(obj:NovelChapter[]){
        this.chapter=obj
    }
    getNovelChapters(){
        return this.chapter
    }
    
   
}