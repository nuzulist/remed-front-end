import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home'
import LoginPage from './pages/login'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>
        )
    }
}

export default App