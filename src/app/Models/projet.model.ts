export interface Projet {
    id?: number;
    nom: string;
    objectif: string;
    image: string;
    description: string;
    echeance: string;
    budget: string;
    etat: string;
    categorie_id: string;
    user_id: number;
}