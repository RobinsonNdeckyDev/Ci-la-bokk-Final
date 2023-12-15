import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/Models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-catgories',
  templateUrl: './gestion-catgories.component.html',
  styleUrls: ['./gestion-catgories.component.css']
})
export class GestionCatgoriesComponent {
  editedCategorie: { id?: number | undefined; libelle: string; } | undefined;
  isEditing: boolean | undefined;

  constructor(private categorieService: CategorieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCategorie();
  }
  

  // Tableau articles
  Listecategories: any[] = [];

   // attributs
   libelleCategorie: string = "";
   selectedArticle: Categorie | null = null;

  // Récupération des articles 
  loadCategorie(): void {
    this.categorieService.getCategorie().subscribe(
      (reponse : any) => {
        console.log('Données récupérées :', reponse); // Vérifiez le format des données ici
        this.Listecategories= reponse.categorie;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la liste des porteurs de projet', error);
      }
    );
  }
  // ...

addCategorie() {
  if (this.libelleCategorie.trim() === "") {
    this.alertMessage("error", "Attention", "Merci d'ajouter le titre de la catégorie");
  } else {
    const newCategorie: Categorie = {
      libelle: this.libelleCategorie,
    };

    this.categorieService.addCategorie(newCategorie).subscribe(
      () => {
        document.getElementById("close-modal")?.click();
        this.alertMessage("success", "Bravo!", "Catégorie ajoutée avec succès");
        this.loadCategorie();
        this.libelleCategorie = "";
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la catégorie', error);
        // Gérer l'erreur ou afficher un message à l'utilisateur
      }
    );
  }
}

editCategorie(categorie: Categorie) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous allez modifier cette catégorie!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#308AA7',
    cancelButtonColor: '#E75761',
    confirmButtonText: 'Oui, Modifier!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.isEditing = true;
      this.editedCategorie = { ...categorie }; // Crée une copie pour éviter de modifier l'original directement
    }
  });
}

// updateCategorie() {
//   this.categorieService.updateCategorie(this.editedCategorie).subscribe(() => {
//     this.isEditing = false;
//     this.alertMessage("success", "Bravo!", "Catégorie mise à jour avec succès");
//     this.loadCategorie();
//   });
// }

deleteCategorie(id: number) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous ne pourrez pas revenir en arrière après cette action!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#308AA7',
    cancelButtonColor: '#E75761',
    confirmButtonText: 'Oui, supprimer!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.categorieService.deleteCategorie(id).subscribe(() => {
        this.alertMessage("success", "Supprimé!", "La catégorie a été supprimée avec succès");
        this.loadCategorie();
      });
    }
  });
}
// Message d'alerte
alertMessage(icon: any, title: any, text: any){
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
// ...

      
    }
    
  }
