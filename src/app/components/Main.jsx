import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import { Router, Link } from 'react-router-dom';
import { ConnectedDashboard } from './Dashboard';
import { history } from '../store/history'

export const  Main = () =>{
    return (
        <Router history={history}>
            <Provider store={store}>
            <div>
              
              <Link 
                exact
                path="/dashboard"
                render={ () =>
                (<ConnectedDashboard />) }
              />
            </div>     
         </Provider>
        </Router>
         
    )
}