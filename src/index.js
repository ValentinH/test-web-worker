import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Link as MuiLink, Box } from '@material-ui/core'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Home from './Home'
import Pdp from './Pdp'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Demo</Typography>
        <Box margin="0 16px">
          <MuiLink component={Link} color="inherit" to="/">
            Home
          </MuiLink>
        </Box>
        <MuiLink component={Link} color="inherit" to="/pdp">
          Pdp
        </MuiLink>
      </Toolbar>
    </AppBar>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header />
        <Box padding="24px">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/pdp">
              <Pdp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
