export class AI {
  model: any;
  input: string;
  cookingScale: string;
  timesPerWeek: string;
  dietaryRestrictions: string;
  dietType: string;
  goals: string;
  style: string;

  constructor(model: any, input:string) {
      this.model = model;
      this.input = input;
      this.cookingScale = "";
      this.timesPerWeek = "";
      this.dietaryRestrictions = "";
      this.dietType = "";
      this.goals = "";
      this.style = "";
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
  
  // call to the model for a response
  public async run() {
    const prompt = "You are a recipe generator. You do not need to return or print out any of the given information. All responses must be in English. " +
    "Generate some detailed recipes from the following information: The user rates their cooking a " + this.cookingScale + 
    " on a scale from 1 to 5, 1 - instant ramen, 2 - can use a stove, 3 - comfortable with cooking, 4 - daily compliments on your cooking, and 5 being an expert. " +
    "The user cooks " + this.timesPerWeek + " times per week. " + 
    "The user has the following dietary restrictions/allergies: " + this.dietaryRestrictions + 
    " The user adheres to the following diet: " + this.dietType + 
    " The user has the following goals when making a meal: " + this.goals + 
    " The user prefers this style of cuisine: " + this.style + 
    this.input;
  
    try{
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

