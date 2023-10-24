export type Level = {
  level: number;
  questions: QuestionItem[];
}

export class QuestionItem {
  question: string;
  options: string[];
  correctAnswer: string;

  constructor(question: string, options: string[], correctAnswer: string) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
}

export const QUESTIONS: Level[] = [
  {
    level: 1,
    questions: [
      new QuestionItem("Quel déchet peut être recyclé ?", ["Plastique", "Pain", "Carton", "Verre"], "Verre"),
      new QuestionItem("Où doit-on jeter les déchets électroniques ?", ["Poubelle", "Compost", "Évier", "Point de collecte spécialisé"], "Point de collecte spécialisé"),
      new QuestionItem("Quel matériau est biodégradable ?", ["Métal", "Plastique", "Verre", "Papier"], "Papier"),
      new QuestionItem("Comment réduire la consommation d'eau ?", ["Utiliser de l'huile", "Fermer le robinet", "Laisser couler", "Manger des légumes"], "Fermer le robinet")
    ]
  },
  {
    level: 2,
    questions: [
      new QuestionItem("Quel type de transport est le plus écologique ?", ["Vélo", "Voiture électrique", "Avion", "Moto"], "Vélo"),
      new QuestionItem("Quel déchet ne va jamais dans la poubelle verte ?", ["Papier", "Verre", "Piles", "Légumes"], "Piles"),
      new QuestionItem("Que signifie 'RE-RE-RE' dans le recyclage ?", ["Réduire, Réutiliser, Recycler", "Refuser, Rire, Ranger"], "Réduire, Réutiliser, Recycler"),
      new QuestionItem("Quel est un aliment non périssable ?", ["Lait", "Poisson", "Pain", "Riz"], "Riz")
    ]
  }
];
