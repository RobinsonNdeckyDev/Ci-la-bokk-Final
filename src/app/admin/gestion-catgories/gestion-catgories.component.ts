import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/Models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-gestion-catgories',
  templateUrl: './gestion-catgories.component.html',
  styleUrls: ['./gestion-catgories.component.css']
})
export class GestionCatgoriesComponent {

  constructor(private categorieService: CategorieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCategorie();
  }

  // Tableau articles
  categories: Categorie[] = [];

   // attributs
   titreCategorie: string = "";
   selectedArticle: Categorie | null = null;

  // Récupération des articles 
  loadCategorie() {
    this.categorieService.getCategorie().subscribe((reponse : any) => {
      console.log("LISTE DATAS");
      console.log(reponse);
    this.categories = reponse.data;

  });
}
  

}

