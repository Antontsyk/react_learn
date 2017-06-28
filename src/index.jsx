import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

import Main from './common/common.component.jsx';
import Home from './common/home.component.jsx';
import About from './common/about.component.jsx';
import Car from './car/car.component.jsx';
import CarDetail from './car/car-detail.component.jsx';


import DataAll from './data.jsx';

render(
     <Router history={browserHistory}>     
        <Main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cars/:id" component={CarDetail} />
                <Route path="/cars" render={() => <Car list={DataAll} />}/>
                <Route path="/about" component={About} />
            </Switch>
		</Main>
    </Router>,
    document.getElementById('container')
);		