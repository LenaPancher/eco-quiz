import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type Level = {
  level: number;
  title: string;
  description: string;
  questions: QuestionItem[];
  isDone: boolean;
};

export type QuestionItem = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const initialState = {
  isLoading: false,
  game: <Level[]> [
    {
      level: 1,
      title: "Le recyclage",
      description: "Challengez vous sur vos connaissances en recyclage",
      isDone: false,
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
      title: "Le Co2",
      isDone: false,
      description: "Challengez vous sur vos connaissances en Co2",
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
          question: "Lequel est un aliment non périssable ?",
          options: ["Lait", "Poisson", "Pain", "Riz"],
          correctAnswer: "Riz"
        }
      ]
    },
    {
      level: 3,
      title: "Les pénuries d'eau",
      description: "Quand une goutte d'eau se transforme en super-héros",
      isDone: false,
      questions: [
        {
          question: "Quelle est la principale cause de la pénurie d'eau dans de nombreuses régions du monde ?",
          options: [
            "Le gaspillage excessif d'eau",
            "La pollution de l'eau",
            "Les précipitations insuffisantes",
            "La surconsommation de boissons gazeuses"
          ],
          correctAnswer: "Le gaspillage excessif d'eau"
        },
        {
          question: "Quel pourcentage de l'eau sur Terre est disponible pour la consommation humaine ?",
          options: [
            "Moins de 1%",
            "Environ 25%",
            "Près de 50%",
            "Plus de 75%"
          ],
          correctAnswer: "Moins de 1%"
        },
        {
          question: "Qu'est-ce que l'agriculture durable peut contribuer à la conservation de l'eau ?",
          options: [
            "La mise en place de techniques d'irrigation efficaces",
            "L'abandon de l'agriculture",
            "L'utilisation intensive d'engrais chimiques",
            "L'augmentation de la consommation d'eau dans les exploitations agricoles"
          ],
          correctAnswer: "La mise en place de techniques d'irrigation efficaces"
        }
      ]
    },
    {
      level: 4,
      title: "L'eau sur terre",
      description: "Pourquoi l'eau ne dit jamais de blagues ?",
      isDone: false,
      questions: [
        {
          question: "Quelle est la principale source d'eau douce utilisée par les humains dans le monde ?",
          options: [
            "Les eaux souterraines",
            "Les rivières",
            "Les lacs",
            "Les glaciers"
          ],
          correctAnswer: "Les eaux souterraines"
        },
        {
          question: "Combien de litres d'eau utilise-t-on en moyenne par jour pour une douche de 10 minutes ?",
          options: [
            "Environ 80 litres",
            "Environ 20 litres",
            "Environ 50 litres",
            "Environ 120 litres"
          ],
          correctAnswer: "Environ 80 litres"
        },
        {
          question: "Qu'est-ce que la xéropaysagisme ?",
          options: [
            "Une technique de jardinage permettant de réduire la consommation d'eau",
            "Une maladie des plantes causée par un excès d'arrosage",
            "La construction d'un barrage pour stocker de l'eau",
            "Une méthode pour purifier l'eau"
          ],
          correctAnswer: "Une technique de jardinage permettant de réduire la consommation d'eau"
        }
      ]
    }
  ],
  error: <null | unknown> null
};

export const getOneGame = createAsyncThunk(
  "getOneGame",
  async (topic: string, {rejectWithValue}) => {
    const response = await fetch(`https://je sais pas/${topic}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    try {
      const result = await response.json();
      if (result.error) {
        return rejectWithValue(result.error);
      }
      return result;
    } catch (err) {
      return rejectWithValue("network error");
    }
  }
);

export const GameSlice = createSlice({
  name: "Game",
  initialState,
  reducers: {
    displayOneGame: (state, action) => {
      state.game.filter((game) => game.level === action.payload.level);
    },
    updateIsDoneInGame: (state, action) => {
      const game = state.game.find((game) => game.level === action.payload);
      if (game) {
        game.isDone = true;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getOneGame.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOneGame.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.game.push(action.payload);
    });
    builder.addCase(getOneGame.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const {displayOneGame, updateIsDoneInGame} = GameSlice.actions;

export default GameSlice.reducer;

