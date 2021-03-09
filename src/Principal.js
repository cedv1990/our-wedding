import React from 'react';
import { Provider } from 'react-redux';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { AdminScreen } from './components/AdminScreen';

import { WeddingApp } from './components/WeddingApp';
import { store } from './store/store';

export const Principal = () => {
    return (
        <Provider store={ store }>
            <Router>
                <Switch>
                    <Route
                        path="/admin"
                        exact
                        component={ () => <AdminScreen /> }
                    />
                    <Route
                        path="/"
                        component={ () => <WeddingApp /> }
                    />
                </Switch>
            </Router>
        </Provider>
    )
}
