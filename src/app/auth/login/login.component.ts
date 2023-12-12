import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UtilisateurServiceService } from 'src/app/services/utilisateur-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email: string = "";
  password: string = "";
  tabUtilisateurs: any[] = [];
  userFound: any;

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userService: UtilisateurServiceService, private route: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.loadArticles();
  }


  // Récupération des articles 
  loadArticles() {
      this.userService.getUsers().subscribe((data : any) => {
      this.tabUtilisateurs = data.Users;
      console.log("List des users");
      console.log(this.tabUtilisateurs);
    });
  }

  login() {
    console.log(this.email);

    console.log(this.password);
    // Logique de connexion
    this.authService.login();
    
    if (this.email == "") {
      this.alertMessage("error", "Attention", "Renseigner l'email");
    } else if (this.password == "") {
      this.alertMessage("error", "Attention", "Renseigner le mot de passe");
    } else {

    
      if (this.tabUtilisateurs.length > 0) {
        // Recherche de l'utilisateur correspondant aux informations fournies
        const userFound = this.tabUtilisateurs.find((element: any) => element.email == this.email);

        if (userFound) {
          if (userFound.role === "Admin") {
            console.log("Admin user");
            this.route.navigate(['/admin']);
            this.alertMessage("success","Bienvenue","Connexion réussie avec succés");
          } else if(userFound.role === "Bailleur") {
            const idBailleur = userFound.id;
            console.log(idBailleur);
            console.log("Bailleur user");
            this.route.navigate(['/dashboardbailleur', idBailleur]);
            this.alertMessage("success","Bienvenue","Connexion réussie avec succés");
          }else if(userFound.role === "Porteur"){
            console.log("Porteur user");
            // Accéder à l'ID du porteur de projet connecté
            const idPorteur = userFound.id;
            console.log("ID du Porteur de Projet:", idPorteur);
                    
            this.route.navigate(['/dasboardPorteur', idPorteur]);
            this.alertMessage("success", "Bienvenue", "Connexion réussie avec succés");
            // this.route.navigate(['/dasboardPorteur/:id']);
            // this.alertMessage("success","Bienvenue","Connexion réussie avec succés");
          }
        } else {
          console.log("No user found");
          // Aucun utilisateur trouvé avec ces informations
          this.alertMessage("error", "Erreur", "Email ou mot de passe incorrect");
        }
      } else {
        // Aucun utilisateur disponible dans le tableau
        this.alertMessage("error", "Erreur", "Aucun utilisateur trouvé");
      }
    }

  }


  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }


  alertMessage(icon:any, title:any,text:any){
    Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
  }

}
