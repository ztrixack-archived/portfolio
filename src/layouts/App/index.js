/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'

const Container = tw.div`flex items-center justify-between h-12 mx-auto max-w-7xl`

const App = () => {
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <Container>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/skill">
            <div />
          </Route>
          <Route path="/experience">
            <div />
          </Route>
          <Route path="/about">
            <div />
          </Route>
          <Route path="/contact">
            <div />
          </Route>
          <Route path="/">
            <div />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
