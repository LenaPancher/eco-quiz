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
          question: "Quel est un aliment non périssable ?",
          options: ["Lait", "Poisson", "Pain", "Riz"],
          correctAnswer: "Riz"
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

