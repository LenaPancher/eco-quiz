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
      title: "Les pénuries d'eau",
      description: "Quand une goutte d'eau se transforme en super-héros",
      isDone: false,
      questions: [
        {
          question: "Quelle est la principale cause de la pénurie d'eau dans de nombreuses régions du monde ?",
          options: [
            "La pollution de l'eau",
            "Les précipitations insuffisantes",
            "La surconsommation de boissons gazeuses",
            "Le gaspillage excessif d'eau"
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
          question: "Comment l'agriculture durable peut-elle contribuer à la conservation de l'eau ?",
          options: [
            "L'abandon de l'agriculture",
            "L'utilisation intensive d'engrais chimiques",
            "La mise en place de techniques d'irrigation efficaces",
            "L'augmentation de la consommation d'eau dans l'agriculture"
          ],
          correctAnswer: "La mise en place de techniques d'irrigation efficaces"
        }
      ]
    },
    {
      level: 2,
      title: "Pollution de l'Industrie de la Pêche",
      description: "Testez vos connaissances sur l'impact de l'industrie de la pêche sur l'environnement !",
      isDone: false,
      questions: [
        {
          question: "Quel est l'un des principaux problèmes environnementaux liés à l'industrie de la pêche ?",
          options: [
            "La déforestation",
            "La pollution de l'air",
            "La surpêche",
            "L'épuisement des réserves d'eau douce"
          ],
          correctAnswer: "La surpêche"
        },
        {
          question: "Quel type de déchet est souvent associé à l'industrie de la pêche, en particulier la pêche aux filets ?",
          options: [
            "Plastique",
            "Verre",
            "Métal",
            "Bois"
          ],
          correctAnswer: "Plastique"
        },
        {
          question: "Quelle méthode de pêche est connue pour son impact destructeur sur les écosystèmes marins ?",
          options: [
            "La pêche à la ligne",
            "La pêche au harpon",
            "La pêche au chalut",
            "La pêche à la nasse"
          ],
          correctAnswer: "La pêche au chalut"
        }
      ]
    },
    {
      level: 3,
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
            "Jardiner en réduisant la consommation d'eau",
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

