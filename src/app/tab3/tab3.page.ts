import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RecommendArtist } from '../model/RecommendArtist.model';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  links : RecommendArtist[];

  constructor(private storgeService: StorageService,private alertController: AlertController) {}

ngOnInit(){
   this.links = this.storgeService.getAllOpenLink().reverse();
  }
  detail(uri:string){
    //navigate to
  }
  ionViewWillEnter(){
    console.log(`enter`)
    this.links = this.storgeService.getAllOpenLink().reverse();
    
  }
  deleteLink(linktodelete: RecommendArtist){

    this.alertController.create({
      header: 'Message',
      message : 'Are sure you want to delete? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storgeService.deleteOneLink(linktodelete);
          this.links = this.storgeService.getAllOpenLink();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    })


  }
 deleteAll(){

    this.alertController.create({
      header: 'Message',
      message : 'Are sure you want to delete ALL Links? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storgeService.deleteAllLinks();
          this.links = this.storgeService.getAllOpenLink();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    })
  }
}
