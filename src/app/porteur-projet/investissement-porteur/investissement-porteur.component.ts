import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investissement-porteur',
  templateUrl: './investissement-porteur.component.html',
  styleUrls: ['./investissement-porteur.component.css']
})
export class InvestissementPorteurComponent implements OnInit {

   ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js'; 
    document.body.appendChild(script);
  }
}
