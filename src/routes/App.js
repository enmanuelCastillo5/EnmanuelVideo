import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from  '../containers/Register';
import notFound from '../containers/notFound';
import Layout from '../component/Layout';


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route component={notFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);  

export default App;