import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UtilisateurServiceService } from 'src/app/services/utilisateur-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription-bailleur',
  templateUrl: './inscription-bailleur.component.html',
  styleUrls: ['./inscription-bailleur.component.css']
})
export class InscriptionBailleurComponent {

  nom: string= "";
  email: string= "";
  password: string= "";
  telephone: string= "";
  image: string = "";
  organisation: string = "";
  description: string = "";
  role: string = "";

  emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

  tabUtilisateurs: any[] = [];

  constructor(private userService: UtilisateurServiceService, private route: Router){}


  ngOnInit(): void {
    this.loadArticles();
  }


  // Récupération des articles 
  loadArticles() {
      this.userService.getUsers().subscribe((data) => {
      this.tabUtilisateurs = data;
      console.log(this.tabUtilisateurs);
    });
  }

  inscription(){
    if (this.nom == "") {
      this.alertMessage("error","Attention","Merci de renseigner votre nom!");
    }else if(this.email == "") {
      this.alertMessage("error","Attention","Merci de renseigner votre email!");
    }else if(!this.email.match(this.emailPattern)){
      this.alertMessage("error","Attention","Merci de renseigner un email valide!");
    }else if(this.password == "") {
      this.alertMessage("error","Attention","Merci de renseigner le mot de passe!");
    }else if(this.password.length < 8){
      this.alertMessage("error","Attention","le mot de ppasse doit etre supérieur ou égal à 8!");
    }else if(this.telephone == "") {
      this.alertMessage("error","Attention","Merci de renseigner votre numéro de téléphone!");
    }else if(this.image == "") {
      this.alertMessage("error","Attention","Merci de renseigner image de profil!");
    }else if(this.description == ""){
      this.alertMessage("error","Attention","Merci de renseigner votre description!");
    }else {
      let newUser: User = {
        name: this.nom,
        email: this.email,
        password:this.password,
        telephone: this.telephone,
        image: this.image,
        organisation: this.organisation,
        description: this.description,
        role: "Bailleur"
      };

      // Appel du service pour ajouter le nouvel utilisateur
      this.userService.addUser(newUser)
      .subscribe(
        (addedUser) => {
          // L'utilisateur a été ajouté avec succès
          this.alertMessage("success","Super","Inscription réussie avec succés!");
          console.log('Utilisateur ajouté:', addedUser);

          // Rediriger vers la page de connexion
          this.route.navigate(['/login']);
        },
        (error) => {
          // Gestion des erreurs lors de l'ajout de l'utilisateur
          console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
          this.alertMessage("error", "Erreur", "Erreur lors de l'inscription. Veuillez réessayer.");
        }
      );

    }
  }



  alertMessage(icon:any, title:any,text:any){
    Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
  }

}
