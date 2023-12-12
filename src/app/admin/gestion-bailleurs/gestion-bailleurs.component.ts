import { Component } from '@angular/core';
import { ListeBailleurService } from 'src/app/services/liste-bailleur.service';

@Component({
  selector: 'app-gestion-bailleurs',
  templateUrl: './gestion-bailleurs.component.html',
  styleUrls: ['./gestion-bailleurs.component.css']
})
export class GestionBailleursComponent {

   constructor(private bailleurService: ListeBailleurService){}

  ListeBailleurs: any[] = [];


  ngOnInit(): void {
    this.getProjectList();

  }

  getProjectList(): void {
  this.bailleurService.getBailleurs().subscribe(
    (data : any) => {
      console.log('Données récupérées :', data); // Vérifiez le format des données ici
      this.ListeBailleurs= data.Porteurs;
    },
    (error) => {
      console.error('Erreur lors de la récupération de la liste des porteurs de projet', error);
    }
  );
}


}
