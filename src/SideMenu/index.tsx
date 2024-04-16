import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {AI} from '../AIComponent';

interface SideMenuProps {
    AI: AI; // Define prop type as AI
  }

// Functions to call setters from AI class
// Also includes setting the value of the current variable
// Each function includes the model, the changed value, and a method to update the value of the input
function callSetCookingScale(AI: AI, cookingScale: string, setter:React.Dispatch<React.SetStateAction<string>>) : undefined {
    setter(cookingScale);
    AI.setScale(cookingScale);
    return undefined;
}

function callSetTime(AI: AI, time: string, setter:React.Dispatch<React.SetStateAction<string>>) : undefined {
    setter(time);
    AI.setTime(time);
    return undefined;
}

function callSetRestrictions(AI: AI, restrictions: string, setter:React.Dispatch<React.SetStateAction<string>>) : undefined {
    setter(restrictions);
    AI.setDietRestrictions(restrictions);
    return undefined;
}

function callSetDietType(AI: AI, dietType: string, setter:React.Dispatch<React.SetStateAction<string>>) : undefined {
    setter(dietType);
    AI.setScale(dietType);
    return undefined;
}

function callSetGoals(AI: AI, goals: string, setter:React.Dispatch<React.SetStateAction<string>>) : undefined {
    setter(goals);
    AI.setGoals(goals);
    return undefined;
}

function callSetStyle(AI: AI, style: string, setter:React.Dispatch<React.SetStateAction<string>>) : undefined {
    setter(style);
    AI.setStyle(style);
    return undefined;
}

function callSetPreferences(AI: AI, preferences: string, setter:React.Dispatch<React.SetStateAction<string>>) : undefined {
    setter(preferences);
    AI.setPreferences(preferences);
    return undefined;
}

const SideMenu: React.FC<SideMenuProps> = ({ AI }) =>  {
    const [cookingScale, setCookingScale] = useState("3");
    const [timesPerWeek, setTimesPerWeek] = useState("5");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("None");
    const [dietType, setDietType] = useState("General");
    const [goals, setGoals] = useState("");
    const [style, setStyle] = useState("");
    const [preferences, setPreferences] = useState("");

    return (
        <div style={{ backgroundColor: "gray" }} className="container-fluid">
            <div>
                <h1 style={{ color: "aqua", fontStyle: "italic" }}>MealMaster</h1><hr style={{color: "white"}}/>
                <ol>
                    <li style={{ fontWeight: "bold" }}>What would you rate your cooking on a scale of 1 to 5?</li>
                    <ul>
                        <li>
                            <input type="radio" value="ONE" name="radio-scale" id="radio-one" onChange={(e) => callSetCookingScale(AI, e.target.value, setCookingScale)} />
                            <label htmlFor="radio-one">1 - instant ramen</label><br />
                        </li>
                        <li>
                            <input type="radio" value="TWO" name="radio-scale" id="radio-two" onChange={(e) => callSetCookingScale(AI, e.target.value, setCookingScale)} />
                            <label htmlFor="radio-two">2 - can use a stove</label><br />
                        </li>
                        <li>
                            <input type="radio" value="THREE" name="radio-scale" id="radio-three" onChange={(e) => callSetCookingScale(AI, e.target.value, setCookingScale)} />
                            <label htmlFor="radio-three">3 - comfortable with cooking</label><br />
                        </li>
                        <li>
                            <input type="radio" value="FOUR" name="radio-scale" id="radio-four" onChange={(e) => callSetCookingScale(AI, e.target.value, setCookingScale)} />
                            <label htmlFor="radio-four">4 - daily compliments on your cooking</label><br />
                        </li>
                        <li>
                            <input type="radio" value="FIVE" name="radio-scale" id="radio-five" onChange={(e) => callSetCookingScale(AI, e.target.value, setCookingScale)} />
                            <label htmlFor="radio-five">5 - MasterChef worthy</label>
                        </li>
                    </ul><br />
                    <li style={{ fontWeight: "bold" }}>How many times a week do you cook for yourself?</li>
                    <ul>
                        <li>
                            <input type="radio" value="ZERO" name="radio-week-scale" id="radio-week-zero" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-zero">0</label>
                        </li>
                        <li>
                            <input type="radio" value="ONE" name="radio-week-scale" id="radio-week-one" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-one">1</label>
                        </li>
                        <li>
                            <input type="radio" value="TWO" name="radio-week-scale" id="radio-week-two" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-two">2</label>
                        </li>
                        <li>
                            <input type="radio" value="THREE" name="radio-week-scale" id="radio-week-three" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-three">3</label>
                        </li>
                        <li>
                            <input type="radio" value="FOUR" name="radio-week-scale" id="radio-week-four" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-four">4</label>
                        </li>
                        <li>
                            <input type="radio" value="FIVE" name="radio-week-scale" id="radio-week-five" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-five">5</label>
                        </li>
                        <li>
                            <input type="radio" value="SIX" name="radio-week-scale" id="radi-week-six" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-six">6</label>
                        </li>
                        <li>
                            <input type="radio" value="SEVEN" name="radio-week-scale" id="radio-week-seven" onChange={(e) => callSetTime(AI, e.target.value, setTimesPerWeek)} />
                            <label htmlFor="radio-week-seven">7</label>
                        </li>
                    </ul><br />
                    <li style={{ fontWeight: "bold" }}>What dietary restrictions do you have, if any?</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => callSetRestrictions(AI, e.target.value, setDietaryRestrictions)}></textarea>
                    </form><br />
                    <li style={{ fontWeight: "bold" }}>What kind of diet do you adhere to?<br />
                        (General, vegetarian, pescatarian, vegan, etc.)</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => callSetDietType(AI, e.target.value, setDietType)}></textarea>
                    </form><br />
                    <li style={{ fontWeight: "bold" }}>Do you have any overall goals when you are cooking?<br />
                        (Are you looking to make something quick, easy, healthy?)</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => callSetGoals(AI, e.target.value, setGoals)}></textarea>
                    </form><br />
                    <li style={{ fontWeight: "bold" }}>What style of cuisine do you prefer? (American, Italian, Chinese, Japanese, etc)</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => callSetStyle(AI, e.target.value, setStyle)}></textarea>
                    </form><br />
                    <li style={{ fontWeight: "bold" }}>What food do you not like?</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => callSetPreferences(AI, e.target.value, setPreferences)}></textarea>
                    </form><br />
                </ol>
                <hr/>
                <h6 style={{color: "white", textAlign: "center"}}>Click "Press to see recipes!" on the right to get your recipes!</h6>
            </div>
            <br />
        </div>
    );
};

export default SideMenu;
