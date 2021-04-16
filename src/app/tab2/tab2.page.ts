import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MusicService } from '../service/music.service';
import { RecommendArtist } from '../model/RecommendArtist.model';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  resultPlaylist_genre : RecommendArtist[];
  pop : string;
  Piano : string;
  Jazz : string;

  constructor(private storgeService: StorageService,private routes:Router,public alertController: AlertController,private musicService: MusicService) {}
  ngOnInit(){
    this.pop='Pop'
    this.Piano='Piano'
    this.Jazz='Jazz'
  }
  genre(name:string){
    const key = name+'music'
    console.log(`key search: `+name)

    this.musicService.searchPlaylist(name).subscribe(
      (sampleData)=>{

        this.resultPlaylist_genre = sampleData;
        
      });

  }
  savelinkstoStorage(track:any){
    var today = new Date();
    var dd = String(today);
    this.storgeService.saveHistory(track)

  }
  spotify(track:any){
    //open
    this.savelinkstoStorage(track);
    console.log(`run spotify`)
    console.log(track)
    //const browser = this.iab.create('https://ionicframework.com/');
  //   browser.on('loadstop').subscribe(event => {
  //     browser.insertCSS({ code: "body{color: red;" });
  //  });
   
  //  browser.close();
  window.open(track.uri, '_system');
  }
}
