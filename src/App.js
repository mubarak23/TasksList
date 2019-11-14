import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/app/store/index';
import { Router, Route } from 'react-router-dom';
import { ConnectedDashboard } from '../src/app/components/Dashboard';
import { history } from '../src/app/store/history'
import { ConnectedNavigation } from '../src/app/components/Navigation';
import { ConnectTaskDetail } from '../src/app/components/TaskDetail';

 const App = () =>{
    return (
        <Router history={history}>
            <Provider store={store}>
            <div>
              <ConnectedNavigation />
              <Route 
                exact
                path="/dashboard"
                render={ () =>
                (<ConnectedDashboard />) }
              />
              <Route 
                exact
                path="/task/:id"
    render = { ({match}) =>(<ConnectTaskDetail match={match} />)}
              />
            </div>     
         </Provider>
        </Router>
         
    )
}
export default App;
