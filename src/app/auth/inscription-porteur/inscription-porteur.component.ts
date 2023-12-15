import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UtilisateurServiceService } from 'src/app/services/utilisateur-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription-porteur',
  templateUrl: './inscription-porteur.component.html',
  styleUrls: ['./inscription-porteur.component.css']
})
export class InscriptionPorteurComponent {

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

  inscription() {
  console.log('Début de la fonction inscription');

  if (this.nom == "") {
    console.log('Validation échouée: Merci de renseigner votre nom!');
    this.alertMessage("error", "Attention", "Merci de renseigner votre nom!");
  } else if(this.email == "") {
    console.log('Validation échouée: Merci de renseigner votre email!');
    this.alertMessage("error", "Attention", "Merci de renseigner votre email!");
  } else if(!this.email.match(this.emailPattern)){
    console.log('Validation échouée: Merci de renseigner un email valide!');
    this.alertMessage("error", "Attention", "Merci de renseigner un email valide!");
  } else if(this.password == "") {
    console.log('Validation échouée: Merci de renseigner le mot de passe!');
    this.alertMessage("error", "Attention", "Merci de renseigner le mot de passe!");
  } else if(this.password.length < 8){
    console.log('Validation échouée: le mot de passe doit être supérieur ou égal à 8!');
    this.alertMessage("error", "Attention", "Le mot de passe doit être supérieur ou égal à 8!");
  } else if(this.telephone == "") {
    console.log('Validation échouée: Merci de renseigner votre numéro de téléphone!');
    this.alertMessage("error", "Attention", "Merci de renseigner votre numéro de téléphone!");
  } else if(this.image == "") {
    console.log('Validation échouée: Merci de renseigner une image de profil!');
    this.alertMessage("error", "Attention", "Merci de renseigner une image de profil!");
  } else if(this.description == ""){
    console.log('Validation échouée: Merci de renseigner votre description!');
    this.alertMessage("error", "Attention", "Merci de renseigner votre description!");
  } else {
    console.log('Validation réussie. Prêt à ajouter un nouvel utilisateur.');

    let newUser: User = {
      name: this.nom,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
      image: this.image,
      organisme: this.organisation,
      description: this.description,
      role: "Porteur"
    };

    // Appel du service pour ajouter le nouvel utilisateur
    this.userService.addUser(newUser)
    .subscribe(
      (addedUser) => {
        // L'utilisateur a été ajouté avec succès
        console.log('Utilisateur ajouté:', addedUser);
        this.alertMessage("success", "Super", "Inscription réussie avec succès!");

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
