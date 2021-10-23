import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({
    providedIn: 'root', 
  })
export class ReaperScanSource{
    constructor() { }
    url="https://reaperscans.com.br/todas-as-series/"
    async getPage(url){
        const options = {
            url: url,            
        };        
        const response = await Http.get(options);
        return response.data
    }
    parseDocument(text){
        const parser = new DOMParser();
        return parser.parseFromString(text.toString(),"text/html"); 

    }
    card
    getAllNovels(){
        let novels=[]
        this.getPage(this.url)
        .then(response=>{
            const document=this.parseDocument(response);          
            document.querySelectorAll(".page-item-detail").forEach(child=>{
                
                if(child.querySelector(".manga-title-badges").innerHTML.indexOf("NOVEL")>-1){
                    novels.push({id:novels.length+1,nome:child.querySelector("h3").innerText,src:child.querySelector('img').src,caminho:child.querySelector("a").href.toString(),scan:"reaperscan"})
                }                
            })
            console.log(novels)
           
            return novels   

        })
        return novels
    }
    searchNovel(search:string){
        
        let novels=[]
        this.getPage(this.url)
        .then(response=>{
            const document=this.parseDocument(response);          
            document.querySelectorAll(".page-item-detail").forEach(child=>{
                if(child.querySelector(".manga-title-badges").innerHTML.indexOf("NOVEL")>-1){
                    if(child.querySelector("h3").innerText.toLowerCase().indexOf(search.toLowerCase())>-1){
                        novels.push({id:novels.length+1,nome:child.querySelector("h3").innerText,cover:child.querySelector('img').src,caminho:child.querySelector("a").href.toString(),scan:"reaperscan"})

                    }                   
                }               
            })
            console.log(novels)
            return novels
        })
    }
    //"http://localhost:8080/https://reaperscans.com.br/obra/the-beginning-after-the-end-novel/"
    getChapters(obraLink){
        let capitulos=[]
        this.getPage(obraLink)
        .then(response=>{
            const document=this.parseDocument(response);
            document.querySelectorAll(".wp-manga-chapter").forEach(child=>{
                capitulos.push({id:capitulos.length+1,nome:child.querySelector("a").innerText,link:child.querySelector("a").href.toString()})

            })
            const capa:HTMLElement=document.querySelector(".tab-summary")
            capitulos.push({nome:"capadaobra",src:document.querySelector(".profile-manga.summary-layout-2").querySelector(".img-responsive").getAttribute("src")})
            return capitulos
        })
        return capitulos
    }
    readNovel(capLink){
        let capitulo=[]
        this.getPage(capLink)
        .then(response=>{
            const document=this.parseDocument(response);
            document.querySelector(".reading-content").querySelectorAll("p").forEach(child=>{
                capitulo.push({id:capitulo.length+1,conteudo:child.innerText})
            })
            console.log(capitulo)
            return capitulo
        })

        return capitulo
    }
   
}