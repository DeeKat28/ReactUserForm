import React from 'react';
import './MyForm.css';

class MyForm extends React.Component {

    render() {
        return (
            <div className="form-content">
                <form className="form-container" action="#" method="POST">
                    <label htmlFor="name">Name: </label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text"
                        placeholder="Please enter your name here" 
                        autoComplete="off"    
                    />
                    <br />
                    <label htmlFor="gender">Gender: </label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br />
                    <label htmlFor="age">Age: </label>
                    <input 
                        id="age"
                        name="age"
                        type="text"
                        placeholder="Please enter your age"
                        autoComplete="off"
                    />
                    <br />
                    <label htmlFor="phone">Phone No: </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Please enter your phone number"
                        autoComplete="off"
                    />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Please enter your Email"
                        autoComplete="off"
                    />
                    <br />
                    <label htmlFor="eligiblity">Eligible for Voting: </label>
                    <input
                        id="eligiblity"
                        name="eligiblity"
                        type="text"
                        value="No"
                        disabled="true"
                    />
                    {/* <input 
                        className="radioBtn"
                        type="radio"
                        name="eligiblityYes"
                        value="Yes"
                        checked={true}
                    />
                    Yes
                    <input
                        className="radioBtn"
                        type="radio"
                        name="eligiblityNo"
                        value="No"
                        checked={true}
                    />
                    No */}
                    <br />
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default MyForm;