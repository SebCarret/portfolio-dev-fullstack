import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Skills from './Skills';
import Portfolio from './Portfolio'

export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/portfolio" component={Portfolio}/>
            </div>
        </Router>
    )
}
