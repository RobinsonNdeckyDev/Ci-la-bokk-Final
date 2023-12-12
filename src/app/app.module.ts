import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConditionUtilisationComponent } from './pages/condition-utilisation/condition-utilisation.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilBailleurComponent } from './bailleur/profil-bailleur/profil-bailleur.component';
import { ProfilPorteurComponent } from './porteur-projet/profil-porteur/profil-porteur.component';
import { AjoutProjetComponent } from './porteur-projet/ajout-projet/ajout-projet.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { GestionCatgoriesComponent } from './admin/gestion-catgories/gestion-catgories.component';
import { GestionBlogComponent } from './admin/gestion-blog/gestion-blog.component';
import { GestionPorteursComponent } from './admin/gestion-porteurs/gestion-porteurs.component';
import { GestionBailleursComponent } from './admin/gestion-bailleurs/gestion-bailleurs.component';
import { GestionNewslettersComponent } from './admin/gestion-newsletters/gestion-newsletters.component';
import { GestionContactsComponent } from './admin/gestion-contacts/gestion-contacts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeInvestissementBailleurComponent } from './bailleur/liste-investissement-bailleur/liste-investissement-bailleur.component';
import { ListeProjetsBailleurComponent } from './bailleur/liste-projets-bailleur/liste-projets-bailleur.component';
import { InvestissementPorteurComponent } from './porteur-projet/investissement-porteur/investissement-porteur.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { LoginComponent } from './auth/login/login.component';
import { InscriptionBailleurComponent } from './auth/inscription-bailleur/inscription-bailleur.component';
import { InscriptionPorteurComponent } from './auth/inscription-porteur/inscription-porteur.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AproposComponent,
    BlogComponent,
    ProjetComponent,
    DetailBlogComponent,
    ContactComponent,
    ConditionUtilisationComponent,
    PolitiqueConfidentialiteComponent,
    HeaderComponent,
    FooterComponent,
    ProfilBailleurComponent,
    ProfilPorteurComponent,
    AjoutProjetComponent,
    DashboardAdminComponent,
    GestionCatgoriesComponent,
    GestionBlogComponent,
    GestionPorteursComponent,
    GestionBailleursComponent,
    GestionNewslettersComponent,
    GestionContactsComponent,
    ListeInvestissementBailleurComponent,
    ListeProjetsBailleurComponent,
    InvestissementPorteurComponent,
    ProfilAdminComponent,
    LoginComponent,
    InscriptionBailleurComponent,
    InscriptionPorteurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
