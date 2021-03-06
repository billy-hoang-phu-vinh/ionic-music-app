import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RecommendArtist } from '../model/RecommendArtist.model';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.page.html',
  styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {
  getlinks : RecommendArtist[];
  test : RecommendArtist[];
  track : RecommendArtist;
  constructor(private routes:Router,private storgeService: StorageService,private ac: ActivatedRoute,public storge: StorageService) { }
  detailTrack:RecommendArtist[]
  ngOnInit() {
    console.log(`detail page`)
    this.getlinks=this.storge.getAllOpenLink()

    console.log(this.storge.getAllOpenLink())
    
  }

  ionViewWillEnter(){
    console.log(`enter`)
    this.getlinks = this.storge.getAllOpenLink().reverse();
    this.track=this.storgeService.selecttrack
  }
  main(){
    this.routes.navigate(['tabs/tab3'])
  }
  spotify(track:any){

    console.log(`run spotify`)
    console.log(track.uri)

  window.open(track.uri, '_system');
  }

}
