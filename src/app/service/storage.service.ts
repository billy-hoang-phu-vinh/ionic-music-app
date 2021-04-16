import { Injectable } from '@angular/core';
import { RecommendArtist } from '../model/RecommendArtist.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;//create class storate: is empty

  constructor(private storage: Storage) {
    this.init(); //run init
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create(); //receive storate and create for that
    this._storage = storage;//save to local class
  }


  // key is the date of the task
  //value is the task description
  public saveHistory(value: any) {
    var newTask = new RecommendArtist(value.id,value.name,value.uri,value.image);
    this._storage?.set(newTask.uri, newTask); //SAVE TO _storate
    this.logAllopenLinks();//show all tasks
  }

  private logAllopenLinks(){
    console.log("All open links : ");
    this._storage.forEach((key, value, index) => {
      console.log(key, value, index);
    });
  }

  public getAllOpenLink(){
    var allLinks: RecommendArtist[] = [];//create empty task to copy
    if (this._storage != null){
    this._storage.forEach((value, key, index) => {
      allLinks.push(value as RecommendArtist);//push element cast parameter as Task
     });
     console.log(allLinks)

  }
    return allLinks;
  }
 
  
  public async deleteAllLinks(){
    await this._storage.clear();
    this.logAllopenLinks();
  }

  public async deleteOneLink(link: RecommendArtist){
    console.log(`remove one link`)
    //remove key
    await this._storage.remove(link.uri);
  }
}
