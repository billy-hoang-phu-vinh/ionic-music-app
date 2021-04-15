import { Component } from '@angular/core';

// import { HomeService } from '../home/home.service';
// import { Item } from '../models/item.model';
import {NgForm} from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private routes:Router,public alertController: AlertController) {}
  async onSubmit(anyform:NgForm){
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'success',
      buttons: ['Ok']
    });
    await alert.present();
  }
}
