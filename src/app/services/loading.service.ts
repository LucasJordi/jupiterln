import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingController: LoadingController) { }

  async presentLoading(data) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();

    if(data.length>0){
      await loading.dismiss();
    }else{
      setTimeout(async()=>{
        if(data.length>0){
          await loading.dismiss();    
        }else{
          setTimeout(async()=>{
            if(data.length>0){
              await loading.dismiss();    
            }else{
              setTimeout(async()=>{
                if(data.length>0){
                  await loading.dismiss();    
                }else{
                  setTimeout(async()=>{
                    
                    await loading.dismiss();    
                    
                  },2000)
                }
              },2000)
            }
          },2000)
        }
      },2000)
    }
  }
  testLoading(data){
    if(data.length>0){
      

    }else{
      setTimeout(()=>{
        if(data.length>0){
          
    
        }
      },2000)
    }
    
  }
}
