import { Component } from '@angular/core';

import { MusicService } from './music.service';
import { RecommendArtist } from './RecommendArtist.model';
// import { Item } from '../models/item.model';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//external link
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  form: FormGroup
  constructor(private routes:Router,public alertController: AlertController,private musicService: MusicService) {}
  isLoading = false;
  sampleArtist : RecommendArtist[];
  resultPlaylist : RecommendArtist[];
  test:RecommendArtist

  ngOnInit(){
    this.form = new FormGroup({
      playlistName : new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });

   /* this.musicService.getSample().subscribe(
    (sampleData)=>{
      this.isLoading = false;
      this.sampleArtist = sampleData;
      
    }); */
    
}
  async onSubmit(anyform:NgForm){
    if(this.form.invalid){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Playlist name must not be empty',
        buttons: ['Ok']
      });
      await alert.present();
    } else {
      //search
      this.musicService.searchPlaylist(anyform.value.playlistName).subscribe(
        (sampleData)=>{
          this.isLoading = false;
          this.resultPlaylist = sampleData;
          
        });
    }
    
  }
  spotify(uri:string){
    //open
    console.log(`run spotify`)
    console.log(uri)
    //const browser = this.iab.create('https://ionicframework.com/');
  //   browser.on('loadstop').subscribe(event => {
  //     browser.insertCSS({ code: "body{color: red;" });
  //  });
   
  //  browser.close();
  window.open(uri, '_system');
  }

}
