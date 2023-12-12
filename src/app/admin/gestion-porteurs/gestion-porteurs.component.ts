import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { ProjectService } from 'src/app/services/liste-porteur-projet.service';

@Component({
  selector: 'app-gestion-porteurs',
  templateUrl: './gestion-porteurs.component.html',
  styleUrls: ['./gestion-porteurs.component.css']
})
export class GestionPorteursComponent implements OnInit {
  
  constructor(private porteurProjectService: ProjectService){}

  porteursDeProjets: any[] = [];


  ngOnInit(): void {
    this.getProjectList();

  }

  getProjectList(): void {
  this.porteurProjectService.getPorteursDeProjets().subscribe(
    (data : any) => {
      console.log('Données récupérées :', data); // Vérifiez le format des données ici
      this.porteursDeProjets = data.Porteurs;
    },
    (error) => {
      console.error('Erreur lors de la récupération de la liste des porteurs de projet', error);
    }
  );
}

  
}
