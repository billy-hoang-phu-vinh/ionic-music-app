import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  constructor(private ac: ActivatedRoute,public storge: StorageService) { }
  detailTrack:RecommendArtist[]
  ngOnInit() {
    console.log(`detail page`)
    this.getlinks=this.storge.getAllOpenLink()

    console.log(this.storge.getAllOpenLink())
    
  }

  ionViewWillEnter(){
    console.log(`enter`)
    this.getlinks = this.storge.getAllOpenLink().reverse();
    this.ac.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('uri')){
        return
      } else {
        console.log(`catch uri`)
        console.log(`show get links`)
        this.getlinks=this.storge.getAllOpenLink()
        console.log(this.getlinks)

        //get param value
        const uri = paramMap.get('uri')
       console.log(`uri: `+uri)
        const copy = this.getlinks
        for (let key in copy ) {
          console.log(`key`)
          
        }
      
      }
    })
  }


}
