import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  readonly PAGE_EVALUER : String = "/evaluer";
  readonly PAGE_CONSULTER : String = "/consulter";
  readonly PAGE_ELEVES : String = "/eleves";
  readonly PAGE_COMPETENCES : String = "/competences";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
