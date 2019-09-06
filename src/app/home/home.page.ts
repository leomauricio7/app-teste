import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor() {}

  openZap(){
    // cordova.plugins.Whatsapp.send("5584994302191");
    window.open("whatsapp://send?text=Ola!&phone=+5584994302191","_system","location=yes");
  }
}
