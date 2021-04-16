import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecommendArtist } from '../model/RecommendArtist.model';//get model music
import { map, sample } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  val = 'Teacher';
  url = 'https://xamarinsupport.herokuapp.com/';


constructor(private http:HttpClient) { }
public recommend_artist: RecommendArtist[] = [
  { 
      id:'0fauHpmSHwodVYIjTqOGHz',
      name:'Yiruma',
      uri:"",
      image:""
  },
  { 
    id:'43ZHCT0cAZBISjO8DG9PnE',
    name:'Elvis presley',
    uri:"",
    image:""
},
{ 
  id:'06HL4z0CvFAxyc27GXpf02',
  name:'Taylor Swift',
  uri:"",
  image:""
},
{ 
  id:'3fMbdgg4jU18AjLCKBhRSm',
  name:'Michael Jackson',
  uri:"",
  image:""
}
 ];

 getSample(){
  this.url = 'https://xamarinsupport.herokuapp.com/sample';
  return this.http.get<{result_sample}>(this.url).
  pipe(
    map(dbsampleData => {
      const dbSkills = [];
      console.log(dbsampleData.result_sample)
      
      for (const item in dbsampleData.result_sample){
        console.log(item)
          dbSkills.push(new RecommendArtist(dbsampleData.result_sample[item].id, dbsampleData.result_sample[item].name,dbsampleData.result_sample[item].uri,dbsampleData.result_sample[item].image));
        }
        console.log(dbSkills  )
        return dbSkills;
      }
      ) 
       );
  
  // return this.http.get<{ [key:string]: RecommendArtist} >(this.url).
  // pipe();
  
} 

searchPlaylist(keyword:string){
  this.url = 'https://xamarinsupport.herokuapp.com/search/'+keyword;
  return this.http.get<{result_sample}>(this.url).
  pipe(
    map(dbsampleData => {
      const dbSkills = [];
      console.log(dbsampleData.result_sample)
      
      for (const item in dbsampleData.result_sample){
        console.log(item)
          dbSkills.push(new RecommendArtist(dbsampleData.result_sample[item].id, dbsampleData.result_sample[item].name,dbsampleData.result_sample[item].uri,dbsampleData.result_sample[item].image));
        }
        console.log(dbSkills  )
        return dbSkills;
      }
      ) 
       );
  
}
getToken(){
  console.log(`get token`)
  const token_url=this.url+'token'
  return this.http.get<{result}>(token_url).
  pipe(
    map(dbsampleData => {
      const dbSkills = [];
      console.log(dbsampleData.result.token)
        return dbsampleData.result.token;
      }
      ) 
       );
}
/* fetchSkills(value:string){//book com c 
  this.url = 'http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=' + value;
  console.log(this.url);
  
  return this.http.get<{[key:string]: Skill}>(this.url).
  pipe(
    map(dbsampleData => {
            const dbsampleData = [];
            for (const item in dbsampleData){
                dbsampleData.push(new Skill(dbsampleData.result_sample[item].uuid, dbsampleData.result_sample[item].normalized_job_title));
              }
              console.log(dbsampleData  )
              return dbsampleData;
            }
            ) 
             );
} */


/* getOneSkill(id: string) {
  return this.http.get<Skill>('http://api.dataatwork.org/v1/jobs/' + id);

}

getCountries(){
  return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');

} */
}

