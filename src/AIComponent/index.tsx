export class AI {
  model: any;
  input: string;
  cookingScale: string;
  timesPerWeek: string;
  dietaryRestrictions: string;
  dietType: string;
  goals: string;

  constructor(model: any, input:string) {
      this.model = model;
      this.input = input;
      this.cookingScale = "";
      this.timesPerWeek = "";
      this.dietaryRestrictions = "";
      this.dietType = "";
      this.goals = "";
  }

  setModel(newModel:any) {
      this.model = newModel;
  }

  setInput(newInput:string) {
      this.input = newInput;
  }

  setParams(cookingScale: string, timesPerWeek: string, dietaryRestrictions: string, dietType: string, goals: string) {
      this.cookingScale = cookingScale;
      this.timesPerWeek = timesPerWeek;
      this.dietaryRestrictions = dietaryRestrictions;
      this.dietType = dietType;
      this.goals = goals;
  }

  async run(): Promise<string> {
    const prompt = "Generate some detailed recipes from the following information: The user rates their cooking a " + this.cookingScale + " on a scale from 1 to 5, 1 - instant ramen, 2 - can use a stove, 3 - comfortable with cooking, 4 - daily compliments on your cooking, and 5 being an expert. " +
    "The user cooks " + this.timesPerWeek + " times per week. " + 
    "The user has the following dietary restrictions/allergies: " + this.dietaryRestrictions + 
    " The user adheres to the following diet: " + this.dietType + 
    " The user has the following goals when making a meal: " + this.goals + 
    this.input;
  
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().replace(/\*/g, "");
    return text; // test output in console for now
  }
}

