import React from 'react';
import './MyForm.css';

class MyForm extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.onHandleSubmit = this.onHandleSubmit.bind(this);
    // }

    state = {
        age: null,
        eligible: 'No',
        eligibleBackgroundColor: 'red'
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({ age: document.getElementById('age').value });
        
        const userAge = Number.parseInt(document.getElementById('age').value);

        if (userAge > 18) {
            this.setState({ eligible: 'Yes' });
            this.setState({ eligibleBackgroundColor: 'green' });
        }
        else {
            this.setState({ eligible: 'No' });
            this.setState({ eligibleBackgroundColor: 'red' })
        }

    }

    render() {
        return (
            <div className="form-content">
                <form className="form-container" action="#" method="POST" onSubmit={this.onHandleSubmit}>
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
                        style={{ background: this.state.eligibleBackgroundColor, color: '#fff' }}
                        id="eligiblity"
                        name="eligiblity"
                        type="text"
                        value={this.state.eligible}
                        readOnly={true}
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