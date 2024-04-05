import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

function SideMenu() {
    const [cookingScale, setCookingScale] = useState("");
    const [timesPerWeek, setTimesPerWeek] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    const [dietType, setDietType] = useState("");
    const [goals, setGoals] = useState("");

    const genAI = new GoogleGenerativeAI('AIzaSyDPCMGRnDcsGi1HzjuMRsro5uo52QGJ_G8')

    async function run() {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Generate some detailed recipes from the following information: The user rates their cooking a " + cookingScale + " on a scale from 1 to 5, 1 - instant ramen, 2 - can use a stove, 3 - comfortable with cooking, 4 - daily compliments on your cooking, and 5 being an expert. " +
        "The user cooks " + timesPerWeek + " times per week. " + 
        "The user has the following dietary restrictions/allergies: " + dietaryRestrictions + 
        " The user adheres to the following diet: " + dietType + 
        " The user has the following goals when making a meal: " + goals;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().replace(/\*/g, "");
        console.log(text); // test output in console for now
    }


    return (
        <div style={{ backgroundColor: "gray" }} className="container-fluid">
            <div style={{ marginLeft: " 5px" }}>
                <h1 style={{ color: "aqua", fontStyle: "italic" }}>MealMaster</h1>
                <ol>
                    <li style={{ fontWeight: "bold" }}>What would you rate your cooking on a scale of 1 to 5?</li>
                    <ul>
                        <li>
                            <input type="radio" value="ONE" name="radio-scale" id="radio-one" onChange={(e) => setCookingScale(e.target.value)} />
                            <label htmlFor="radio-one">1 - instant ramen</label><br />
                        </li>
                        <li>
                            <input type="radio" value="TWO" name="radio-scale" id="radio-two" onChange={(e) => setCookingScale(e.target.value)} />
                            <label htmlFor="radio-two">2 - can use a stove</label><br />
                        </li>
                        <li>
                            <input type="radio" value="THREE" name="radio-scale" id="radio-three" onChange={(e) => setCookingScale(e.target.value)} />
                            <label htmlFor="radio-three">3 - comfortable with cooking</label><br />
                        </li>
                        <li>
                            <input type="radio" value="FOUR" name="radio-scale" id="radio-four" onChange={(e) => setCookingScale(e.target.value)} />
                            <label htmlFor="radio-four">4 - daily compliments on your cooking</label><br />
                        </li>
                        <li>
                            <input type="radio" value="FIVE" name="radio-scale" id="radio-five" onChange={(e) => setCookingScale(e.target.value)} />
                            <label htmlFor="radio-five">5 - MasterChef worthy</label>
                        </li>
                    </ul><br />
                    <li style={{ fontWeight: "bold" }}>How many times a week do you cook for yourself?</li>
                    <ul>
                        <li>
                            <input type="radio" value="ZERO" name="radio-week-scale" id="radio-week-zero" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-zero">0</label>
                        </li>
                        <li>
                            <input type="radio" value="ONE" name="radio-week-scale" id="radio-week-one" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-one">1</label>
                        </li>
                        <li>
                            <input type="radio" value="TWO" name="radio-week-scale" id="radio-week-two" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-two">2</label>
                        </li>
                        <li>
                            <input type="radio" value="THREE" name="radio-week-scale" id="radio-week-three" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-three">3</label>
                        </li>
                        <li>
                            <input type="radio" value="FOUR" name="radio-week-scale" id="radio-week-four" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-four">4</label>
                        </li>
                        <li>
                            <input type="radio" value="FIVE" name="radio-week-scale" id="radio-week-five" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-five">5</label>
                        </li>
                        <li>
                            <input type="radio" value="SIX" name="radio-week-scale" id="radi-week-six" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-six">6</label>
                        </li>
                        <li>
                            <input type="radio" value="SEVEN" name="radio-week-scale" id="radio-week-seven" onChange={(e) => setTimesPerWeek(e.target.value)} />
                            <label htmlFor="radio-week-seven">7</label>
                        </li>
                    </ul><br />
                    <li style={{ fontWeight: "bold" }}>What dietary restrictions do you have, if any?</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => setDietaryRestrictions(e.target.value)}></textarea>
                    </form><br />
                    <li style={{ fontWeight: "bold" }}>What kind of diet do you adhere to?<br />
                        (General, vegetarian, pescatarian, vegan, etc.)</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => setDietType(e.target.value)}></textarea>
                    </form><br />
                    <li style={{ fontWeight: "bold" }}>Do you have any overall goals when you are cooking?<br />
                        (Are you looking to make something quick, easy, healthy?)</li><br />
                    <form id="textarea">
                        <textarea className="form-control" onChange={(e) => setGoals(e.target.value)}></textarea>
                    </form><br />
                </ol>
                <button style={{ marginLeft: "190px" }} className="btn btn-success" onClick={run} type="button">Submit</button>
            </div>
            <br />
        </div>
    );
};

export default SideMenu;
