import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { PATH } from '../config/path.config';
import { Novel } from '../models/novel.dto';
import { NovelChapter } from '../models/novelChapter.dto';

@Injectable({
    providedIn: 'root', 
  })
export class ReaperScanSource{
    constructor(
    ) { }
    
    novels: Novel[]
    path="https://reaperscans.com.br/todas-as-series/"
    url=PATH(this.path)
    async getPage(url){
        var formData = new FormData();
        
        const options = {
            url: url,            
        };        
        const options2 = {
            url: 'https://reaperscans.com.br/wp-admin/admin-ajax.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            params:{action:"madara_load_more"},

          };
        const response = await Http.get(options);
        //const response2=await Http.post(options2);
        
        return response.data
    }

    async getMore(pp){
        const vars={post_type:""}
        var formData = new FormData();
        const body = new HttpParams()
            .set('action', "madara_load_more")
            .set('page', "1")
            .set('template', "madara-core/content/content-archive")
            .set('vars[post_type]', "wp-manga");
        formData.append("action", "madara_load_more")
        formData.append("page", "1")
        formData.append("template", "madara-core/content/content-archive")
        formData.append("vars[paged]", "1")
        formData.append("vars[orderby]", "meta_value_num")
        formData.append("vars[template]", "archive")
        formData.append("vars[sidebar]", "right")
        formData.append("vars[post_type]", "wp-manga")
        formData.append("vars[post_status]", "publish")
        formData.append("vars[meta_key]", "_latest_update")
        formData.append("vars[order]", "desc")
        formData.append("vars[meta_query][relation]", "OR")
        formData.append("vars[manga_archives_item_layout]", "big_thumbnail")
        console.log(formData.getAll)
        const options = {
            url: 'https://reaperscans.com.br/wp-admin/admin-ajax.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,"Origin":"https://reaperscans.com.br"},
            params:{"action":"madara_load_more","page":pp,"template":"madara-core/content/content-archive","vars[post_type]":"wp-manga"},
            ////data:body.toString()
        };
        const client = await fetch("http://192.168.25.33:8080/https://reaperscans.com.br/wp-admin/admin-ajax.php", {
            method: 'post',
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: body.toString(),
        }).then(resp=>{
            return resp.text()
        })
        
        ///const response=await Http.post(options);
        
        return client
    }
    parseDocument(text){
        const parser = new DOMParser();
        return parser.parseFromString(text.toString(),"text/html"); 

    }
    card
    async getAllNovels(){
        
        
        
        this.novels=[]
        try{
            
            await this.getPage(this.url)
        .then( response=>{  
            const document=this.parseDocument(response);        
             document.querySelectorAll(".page-item-detail").forEach(child=>{
                
                // if(child.querySelector(".manga-title-badges").innerHTML.indexOf("NOVEL")>-1){
                    
                    this.novels.push({id:this.novels.length+1,title:child.querySelector("h3").innerText,cover:child.querySelector("img").attributes['data-src'].nodeValue,link:child.querySelector("a").href.toString(),scan:"reaperscan",autor:"",info:"",status:""})
                // }                
            })
            
           
            // return this.novels   

        })
        }catch(e){

        }
        return this.novels
    }
    searchNovel(search:string){        
        this.novels=[{id:1,title:"Começo depois do fim",autor:"Turtle",cover:"https://reaperscans.com.br/wp-content/uploads/2021/07/41WUb2JBGqL-1-175x238.jpg",info:"Começo depois do fim",link:"https://reaperscans.com.br/obra/ocaf-novel/",status:"Em progresso"}]
        this.getPage(this.url)
        .then(response=>{
            const document=this.parseDocument(response);          
            document.querySelectorAll(".page-item-detail").forEach(child=>{
                // if(child.querySelector(".manga-title-badges").innerHTML.indexOf("NOVEL")>-1){
                //     if(child.querySelector("h3").innerText.toLowerCase().indexOf(search.toLowerCase())>-1){
                //         this.novels.push({id:this.novels.length+1,nome:child.querySelector("h3").innerText,src:child.querySelector('img').src,caminho:child.querySelector("a").href.toString(),scan:"reaperscan"})

                //     }                   
                // }               
            })
            console.log(this.novels)
            return this.novels
        })
    }
    //"http://localhost:8080/https://reaperscans.com.br/obra/the-beginning-after-the-end-novel/"
    getChapters(obraLink){
        let capitulos=[]
        this.getPage(obraLink)
        .then(response=>{
            const document=this.parseDocument(response);
            document.querySelectorAll(".wp-manga-chapter").forEach(child=>{
                capitulos.push({id:capitulos.length+1,nome:child.querySelector(".chapter-link").querySelector("a").innerText,link:child.querySelector("a").href.toString()})

            })
            const capa:HTMLElement=document.querySelector(".tab-summary")
            capitulos.push({nome:"capadaobra",src:document.querySelector(".profile-manga.summary-layout-2").querySelector(".img-responsive").getAttribute("src")})
            return capitulos
        })
        return capitulos
    }
    async readNovel(capLink:string){
        let capitulo:string[]=[]
        let cap:NovelChapter
        await this.getPage(capLink)
        .then(response=>{
            const document=this.parseDocument(response);
            
            document.querySelector(".reading-content").querySelectorAll("p").forEach(child=>{
                capitulo.push(child.innerText)
            })
            cap={id:capitulo.length+1,text:(document.querySelector(".text-left")as HTMLElement).innerText,content:capitulo}
            
            console.log((document.querySelector(".text-left") as HTMLElement).textContent)
            ///return capitulo
            
            return cap
        })

        return cap
    }
   
}