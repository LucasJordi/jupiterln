import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novels-page',
  templateUrl: './novels-page.page.html',
  styleUrls: ['./novels-page.page.scss'],
})
export class NovelsPagePage implements OnInit {
  search=false
  obras=[{nome:"Reformation of the Deadbeat Noble ",src:"https://reaperscans.com.br/wp-content/uploads/2021/07/Reformation_of_the_Deadbeat_Noble_capa_reduzida_2.jpg"}]  
  tag:any
  scan: string="Novels"
  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) { this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.scan = this.router.getCurrentNavigation().extras.state.scan.nome;
      this.router.getCurrentNavigation().extras.state.scan.source.getAllNovels()

    }
  });


  }

  searchBarOpenClose(){
    this.search=!this.search
  }
  
  navigateNovel(item){
    console.log(item)
    this.router.navigate(['novel-page'])


  }

  ngOnInit() {
  }

}
