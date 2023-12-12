import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-investissements',
  templateUrl: './liste-investissements.component.html',
  styleUrls: ['./liste-investissements.component.css']
})
export class ListeInvestissementsComponent implements OnInit {

  constructor(private router: Router) {}

   ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js'; 
    document.body.appendChild(script);
  }
}
