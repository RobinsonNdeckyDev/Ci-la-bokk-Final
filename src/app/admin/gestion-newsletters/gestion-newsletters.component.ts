import { Component } from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-gestion-newsletters',
  templateUrl: './gestion-newsletters.component.html',
  styleUrls: ['./gestion-newsletters.component.css']
})
export class GestionNewslettersComponent {

  constructor(private newsletterService: NewsletterService){}

  listeNewsletters: any[] = [];


  ngOnInit(): void {
    this.getProjectList();

  }

  getProjectList(): void {
  this.newsletterService.getNewsletters().subscribe(
    (data : any) => {
      console.log('Données récupérées :', data); // Vérifiez le format des données ici
      this.listeNewsletters= data.Porteurs;
    },
    (error) => {
      console.error('Erreur lors de la récupération de la liste des porteurs de projet', error);
    }
  );
}
   
}
