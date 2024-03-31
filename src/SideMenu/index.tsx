import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function SideMenu() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            {isOpen ? (
                <div>
                    <button className="btn btn-primary" style={{ marginLeft: '5px' }} onClick={toggleMenu} type="button">
                        Hide Menu
                    </button>
                    <div style={{ marginLeft: " 5px" }}>
                        <h1 style={{ color: "blue" }}>Questions</h1>
                        <ol>
                            <li style={{ fontWeight: "bold" }}>What would you rate your cooking on a scale of 1 to 5?</li>
                            <ul>
                                <li>
                                    <input type="radio" value="ONE" name="radio-scale" id="radio-one" />
                                    <label htmlFor="radio-one">1 - instant ramen</label><br />
                                </li>
                                <li>
                                    <input type="radio" value="TWO" name="radio-scale" id="radio-two" />
                                    <label htmlFor="radio-two">2 - can use a stove</label><br />
                                </li>
                                <li>
                                    <input type="radio" value="THREE" name="radio-scale" id="radio-three" />
                                    <label htmlFor="radio-three">3 - comfortable with cooking</label><br />
                                </li>
                                <li>
                                    <input type="radio" value="FOUR" name="radio-scale" id="radio-four" />
                                    <label htmlFor="radio-four">4 - your cooking is complimented by friends and family on a regular basis</label><br />
                                </li>
                                <li>
                                    <input type="radio" value="FIVE" name="radio-scale" id="radio-five" />
                                    <label htmlFor="radio-five">5 - restaurant level</label>
                                </li>
                            </ul><br />
                            <li style={{ fontWeight: "bold" }}>How many times a week do you cook for yourself?</li>
                            <ul>
                                <li>
                                    <input type="radio" value="ZERO" name="radio-week-scale" id="radio-week-zero" />
                                    <label htmlFor="radio-week-zero">0</label>
                                </li>
                                <li>
                                    <input type="radio" value="ONE" name="radio-week-scale" id="radio-week-one" />
                                    <label htmlFor="radio-week-one">1</label>
                                </li>
                                <li>
                                    <input type="radio" value="TWO" name="radio-week-scale" id="radio-week-two" />
                                    <label htmlFor="radio-week-two">2</label>
                                </li>
                                <li>
                                    <input type="radio" value="THREE" name="radio-week-scale" id="radio-week-three" />
                                    <label htmlFor="radio-week-three">3</label>
                                </li>
                                <li>
                                    <input type="radio" value="FOUR" name="radio-week-scale" id="radio-week-four" />
                                    <label htmlFor="radio-week-four">4</label>
                                </li>
                                <li>
                                    <input type="radio" value="FIVE" name="radio-week-scale" id="radio-week-five" />
                                    <label htmlFor="radio-week-five">5</label>
                                </li>
                                <li>
                                    <input type="radio" value="SIX" name="radio-week-scale" id="radi-week-six" />
                                    <label htmlFor="radio-week-six">6</label>
                                </li>
                                <li>
                                    <input type="radio" value="SEVEN" name="radio-week-scale" id="radio-week-seven" />
                                    <label htmlFor="radio-week-seven">7</label>
                                </li>
                            </ul><br />
                            <li style={{ fontWeight: "bold" }}>What dietary restrictions do you have, if any?</li><br/>
                            <form id="textarea">
                                <textarea cols={44} rows={2}></textarea>
                            </form><br/>
                            <li style={{ fontWeight: "bold" }}>What kind of diet do you adhere to?<br/>
                             (General, vegetarian, pescatarian, vegan, etc.)</li><br/>
                            <form id="textarea">
                                <textarea cols={44} rows={2}></textarea>
                            </form><br/>
                            <li style={{ fontWeight: "bold" }}>Do you have any overall goals when you are cooking?<br/>
                             (Are you looking to make something quick, easy, healthy?)</li><br/>
                            <form id="textarea">
                                <textarea cols={44} rows={2}></textarea>
                            </form><br/>
                        </ol>
                        <button style={{marginLeft: "135px"}}className="btn btn-primary" type="button">Submit</button>
                    </div>
                </div>
            ) : (
                <button className="btn btn-primary" style={{ marginLeft: '5px' }} onClick={toggleMenu} type="button">
                    Show Menu
                </button>
            )}
            <br />
        </div>
    );
};

export default SideMenu;
