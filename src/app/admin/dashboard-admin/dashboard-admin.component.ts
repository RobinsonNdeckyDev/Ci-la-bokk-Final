import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

constructor(private authService: AuthService){}
  // Gestion bouton
  boutonActif = 1;

  // Initialiser le contenu actuel
  currentContent: string = 'dashDefault';

  // Mettre à jour le contenu actuel
  showComponant(contentId: string): void {
    this.currentContent = contentId; 
  }



    ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js'; 
    document.body.appendChild(script);
  }

  logout() {
    // Logique de déconnexion
    this.authService.logout();
  }
}
