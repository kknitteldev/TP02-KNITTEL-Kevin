import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {

  nom : string = "";
  prenom : string = "";
  sexes : ["Autre", "Homme", "Femme"];
  adresse : string = "";
  cp : number;
  ville : string = "";
  tel : number;
  email : string = "";
  pseudo : string = "";
  pwd : string = "";
  pwdConf : string = "";

  // telRegex = new RegExp("^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$");
  canRegister : boolean = true;

  constructor() {}
  
  ngOnInit(): void {}
  
  valider() {
    if (this.pwd != this.pwdConf || this.pwd.length < 8) {
      this.canRegister = false;
    }
    if (this.cp.toString().length != 5) {
      this.canRegister = false;
    }
  }
}
