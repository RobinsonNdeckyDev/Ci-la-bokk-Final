import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-porteur',
  templateUrl: './profil-porteur.component.html',
  styleUrls: ['./profil-porteur.component.css']
})
export class ProfilPorteurComponent implements OnInit {

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js'; 
    document.body.appendChild(script);
  }
}
