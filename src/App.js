import './style.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import MyForm from './MyForm';
import About from './About';

const MainApp = () => {
    return (
        <div className="flex-container">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/MyForm" component={MyForm} />
                    <Route path="/About" component={About} />
                </Switch>
                <Footer />
            </Router>
            
        </div>
    );
}

export default MainApp;