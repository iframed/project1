import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    
  }

  redirectToLink(link: string): void {
    // Redirection vers le lien spécifié
    window.location.href = link;
  }



  valeurs = [
    { titre: 'Sensibilité sociétale', texte: 'La sensibilité sociétale et environnementale est une boussole qui guide chacune de nos démarches. Nous sommes profondément engagés dans l utilisation de la technologie pour créer des solutions digitales innovantes tout en étant responsables sur le plan environnemental. Cette perspective guide notre réflexion et nos choix techniques, nous permettant de concevoir des solutions qui non seulement contribuent à la croissance de votre entreprise, mais aussi à un monde plus durable et social.' },
    { titre: 'Proximité', texte: 'Vous ne travaillez pas avec une simple agence de développement classique. Vous travaillez avec un partenaire impliqué, qui vous accompagne à chaque étape. Vos projets sont pilotés par un chef de projet dédié et une équipe complète. Notre accompagnement prend toujours en compte vos retours et ceux de vos utilisateurs, en adaptant et en livrant un produit final qui répond aux besoins de tous.' },
    { titre: 'Excellence', texte: 'Durant tout ce que nous faisons, nous cherchons l excellence. Veille constante et montée en compétence de nos équipes, nous sommes motivés par un seul objectif : être à la pointe de la technologie et de la performance.' }
  ];
  titre: string = this.valeurs[0].titre; // Initialisez avec le premier titre
  texte: string = this.valeurs[0].texte; // Initialisez avec le premier texte
  // Variable pour stocker le titre sélectionné
  titreSelectionne: string = '';

 

  // Méthode appelée lorsqu'un élément de la liste est sélectionné
  onValeurSelectionnee(titre: string, texte: string): void {
    this.titre = titre;
    this.texte = texte;

    // Vérifie si le titre sélectionné est différent du titre actuel
    if (this.titreSelectionne !== titre) {
      // Si différent, mettez à jour le titre sélectionné et réinitialisez les éléments sélectionnés
      this.titreSelectionne = titre;
    }else {
      // Si le titre est le même, réinitialisez le titre sélectionné
      this.titreSelectionne = '';
    }

    // Réinitialisez les éléments sélectionnés
     //this.valeursSelectionnees = [];

    // Ajoutez l'élément actuel aux éléments sélectionnés
    //this.valeursSelectionnees.push(titre);

  }
}


  //[class.selected-title]="valeursSelectionnees.includes(valeur.titre)"

