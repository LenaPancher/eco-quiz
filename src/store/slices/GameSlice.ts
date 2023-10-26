import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Level = {
  level: number;
  title: string;
  description: string;
  questions: QuestionItem[];
}

export type QuestionItem = {
  question: string;
  options: string[];
  correctAnswer: string;
}

const initialState: Level[] = [
  {
    level: 1,
    title: "Niveau 1",
    description: "Découvrez les bases de l'écologie",
    questions: [
      {
        question: "Quel déchet peut être recyclé ?",
        options: ["Plastique", "Pain", "Carton", "Verre"],
        correctAnswer: "Verre"
      },
      {
        question: "Où doit-on jeter les déchets électroniques ?",
        options: ["Poubelle", "Compost", "Évier", "Point de collecte spécialisé"],
        correctAnswer: "Point de collecte spécialisé"
      },
      {
        question: "Quel matériau est biodégradable ?",
        options: ["Métal", "Plastique", "Verre", "Papier"],
        correctAnswer: "Papier"
      },
      {
        question: "Comment réduire la consommation d'eau ?",
        options: [
          "Utiliser de l'huile",
          "Fermer le robinet",
          "Laisser couler",
          "Manger des légumes"
        ],
        correctAnswer: "Fermer le robinet"
      }
    ]
  },
  {
    level: 2,
    title: "Niveau 2",
    description: "Approfondissez vos connaissances",
    questions: [
      {
        question: "Quel type de transport est le plus écologique ?",
        options: ["Vélo", "Voiture électrique", "Avion", "Moto"],
        correctAnswer: "Vélo"
      },
      {
        question: "Quel déchet ne va jamais dans la poubelle verte ?",
        options: ["Papier", "Verre", "Piles", "Légumes"],
        correctAnswer: "Piles"
      },
      {
        question: "Que signifie 'RE-RE-RE' dans le recyclage ?",
        options: ["Réduire, Réutiliser, Recycler", "Refuser, Rire, Ranger"],
        correctAnswer: "Réduire, Réutiliser, Recycler"
      },
      {
        question: "Quel est un aliment non périssable ?",
        options: ["Lait", "Poisson", "Pain", "Riz"],
        correctAnswer: "Riz"
      }
    ]
  }
];

export const GameSlice = createSlice({
  name: "Game",
  initialState,
  reducers: {
    populateGames: (state, action: PayloadAction<Level[]>) => {
      state = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {populateGames} = GameSlice.actions;

export default GameSlice.reducer;
