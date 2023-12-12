import { Component } from '@angular/core';
import { Article } from 'src/app/Models/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-blog',
  templateUrl: './gestion-blog.component.html',
  styleUrls: ['./gestion-blog.component.css']
})
export class GestionBlogComponent {

  // attributs
  titreArticle: string = "";
  articlePhoto: string = "";
  descriptionArticle: string = "";
  selectedArticle: Article | null = null;


  

  isEditing: boolean = false;
  editedArticle: Article = { id: 0, titre: '', photo: '', description: '' };

  // Tableau articles
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadArticles();
  }


  // Récupération des articles 
  loadArticles() {
      this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }


  // Méthode pour ajouter un article
  addArticle() {
    // Validation d'ajout d'article
    if (this.titreArticle == "") {
      this.alertMessage("error","Attention","Merci d'ajouter le titre de l'article");
    }else if(this.articlePhoto == ""){
      this.alertMessage("error","Attention","Merci d'ajouter la photo de l'article");
    }else if(this.descriptionArticle == ""){
      this.alertMessage("error","Attention","Merci d'ajouter la description de l'article");
    }else{
      // Notre variable newArticle pour ajouter un nouveau article
      const newArticle : Article = { 
        titre: this.titreArticle, 
        photo: this.articlePhoto, 
        description: this.descriptionArticle 
      };

      this.articleService.addArticle(newArticle).subscribe(() => {

        this.articles.unshift(newArticle);

        this.alertMessage("success","Bravo!","Article ajouté avec succés");
        this.loadArticles();
      });
    }

  }


  // Nouvelle méthode pour afficher les détails d'un article
  showArticleDetails(article: Article) {
    this.selectedArticle = article;
  }


  // Modification d'un article
  editArticle(article: Article) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous allez modifier cette article!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#308AA7',
      cancelButtonColor: '#E75761',
      confirmButtonText: 'Oui, Modifier!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isEditing = true;
        this.editedArticle = { ...article }; // Crée une copie pour éviter de modifier l'original directement
      }
    });
  }

  // Mise à jour de l'article modifié
  updateArticle() {
    this.articleService.updateArticle(this.editedArticle).subscribe(() => {
      this.isEditing = false;
      this.alertMessage("success", "Bravo!", "Article mis à jour avec succès");
      this.loadArticles();
    });
  }

  // Annulation de la modification de l'article
  cancelEditing() {
    this.isEditing = false;
  }


  // Suppression d'un article
  deleteArticle(id: number) {
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
        this.articleService.deleteArticle(id).subscribe(() => {
          this.alertMessage("success", "Supprimé!", "L'article a été supprimé avec succès");
          this.loadArticles();
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
  }

}


