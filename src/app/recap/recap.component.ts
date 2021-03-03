import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  @Input() nom: string = "";
  @Input() prenom: string = "";
  @Input() sexes: ["Autre", "Homme", "Femme"];
  @Input() adresse: string = "";
  @Input() cp: number;
  @Input() ville: string = "";
  @Input() tel: number;
  @Input() email: string = "";
  @Input() pseudo: string = "";
  @Input() pwd: string = "";
  @Input() pwdConf: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
