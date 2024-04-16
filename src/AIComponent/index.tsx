export class AI {
  model: any;
  input: string;
  cookingScale: string;
  timesPerWeek: string;
  dietaryRestrictions: string;
  dietType: string;
  goals: string;
  style: string;
  preferences: string;

  constructor(model: any, input:string) {
      this.model = model;
      this.input = input;
      this.cookingScale = "";
      this.timesPerWeek = "";
      this.dietaryRestrictions = "";
      this.dietType = "";
      this.goals = "";
      this.style = "";
      this.preferences = "";
  }

  // public setters
  public setModel(newModel:any) {
      this.model = newModel;
  }

  public setInput(newInput:string) {
      this.input = newInput;
  }

  public setScale(newScale:string) {
    this.cookingScale = newScale;
  }

  public setTime(newTime:string) {
    this.timesPerWeek = newTime;
  }

  public setDietRestrictions(newDiet:string) {
    this.dietaryRestrictions = newDiet;
  }

  public setDietType(newType:string) {
    this.dietType = newType;
  }

  public setGoals(newGoals:string) {
    this.goals = newGoals;
  }

  public setStyle(newStyle:string) {
    this.style = newStyle;
  }

  public setPreferences(newPreferences:string) {
    this.preferences = newPreferences;
  }
  
  // call to the model for a response
  public async run() {
    const prompt = "You are a recipe generator. The only information about the recipes that will be returned is time, difficulty, and what diet the recipe falls under. " + 
    "All responses must be in English. All recipes must have a title. " +
    "Generate 2 or 3 detailed recipes from the following information: The user rates their cooking a " + this.cookingScale + 
    " on a scale from 1 to 5, 1 - instant ramen, 2 - can use a stove, 3 - comfortable with cooking, 4 - daily compliments on your cooking, and 5 being an expert. " +
    "The user cooks " + this.timesPerWeek + " times per week. " + 
    "The user has the following dietary restrictions/allergies: " + this.dietaryRestrictions + 
    ". The user adheres to the following diet: " + this.dietType + 
    ". The user has the following goals when making a meal: " + this.goals + 
    ". The user prefers this style of cuisine: " + this.style + 
    ". The recommended recipes should not include the following food: " + this.preferences +
    ". Here is the prompt for the recipe: " + this.input;
  
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().replace(/\*/g, "");
      return text; 
    } catch (e) {
      if (typeof e === "string") {
        return e.toUpperCase() // works, `e` narrowed to string
      } else if (e instanceof Error) {
        return e.message // works, `e` narrowed to Error
      }
    }
  }
}

