import { Component  } from '@angular/core';
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

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  // attributs
  titreArticle: string = "";
  articlePhoto: string = "";
  descriptionArticle: string = "";
  selectedArticle: Article | null = null;


  

  isEditing: boolean = false;
  editedArticle: Article = { id: 0, titre: '', photo: '', description: '' };

  // Tableau articles
  articles: Article[] = [];

  // Attribut pour la pagination
  articlesParPage = 10; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle

  // Attribut pour faire les recherche
  searchArticle = '';
  itemSearchs: any;

  // Propriétés de pagination
  itemsPerPage: number = 6;
  currentPage: number = 1;

  
  //methode qui permet de faire la recherche
  articleFound() {
    if (this.searchArticle.trim() === '') {
      this.itemSearchs = null; 
    } else {
      this.itemSearchs = this.articles.filter(
        (item: Article) => item.titre.toLowerCase().includes(this.searchArticle.toLowerCase())
      );
    }
    this.currentPage = 1;
  }

  //methode pour gerer la pagination
  get paginatedArticles(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.itemSearchs ? this.itemSearchs.slice(startIndex, endIndex) : this.articles.slice(startIndex, endIndex);
  }

  getPageForArticle(article: any): number {
    const articleIndex = this.itemSearchs ? this.itemSearchs.indexOf(article) : this.articles.indexOf(article);
    return Math.ceil((articleIndex + 1) / this.itemsPerPage);
  }
  
  
  // methodes qui gerent les page pour la pagination

  changePage(page: number): void {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
  }

  getTotalPages(): number {
    return Math.ceil((this.itemSearchs ? this.itemSearchs.length : this.articles.length) / this.itemsPerPage);
  }

  getPages(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }



  // Récupération des articles 
  loadArticles() {
      this.articleService.getArticles().subscribe((reponse : any) => {
        console.log("LISTE DATAS");
        console.log(reponse);
      this.articles = reponse.data;

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
        // console.log('ok');
        // this.articles.unshift(newArticle);
        document.getElementById("close-modal")?.click()
        this.alertMessage("success","Bravo!","Article ajouté avec succés");
        this.loadArticles();
        
      // Réinitialiser les champs après l'ajout
      this.titreArticle = "";
      this.articlePhoto = "";
      this.descriptionArticle = "";

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


