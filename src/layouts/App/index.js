/** @jsxImportSource @emotion/react */
import { useRef } from 'react'
import tw from 'twin.macro'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from '../../components/Header'

const Container = tw.div`flex items-center justify-between h-12 mx-auto max-w-7xl`
const HeaderNav = tw.nav`flex`
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4`

const App = () => {
  const ref = useRef(null)

  return (
    <>
      <Header />
      <Router>
        <Container>
          <HeaderNav>
            <ul>
              <li>
                <Link to="/">.home()</Link>
              </li>
              <li>
                <Link to="/skill">.skill()</Link>
              </li>
              <li>
                <Link to="/experience">.experience()</Link>
              </li>
              <li>
                <Link to="/about">.about()</Link>
              </li>
              <li>
                <Link to="/contact">.contact()</Link>
              </li>
            </ul>
          </HeaderNav>

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
    </>
  )
}

export default App
