import Versions from './components/Versions'
import HelloWorld from './components/HelloWorld'

function App() {

  return (
    <>
      <HashRouter basename="/app">
        <Routes>
          <Route path="/HelloWorld" exact component={ HelloWorld } /> {/* 👈 Renders at /#/app/ */}
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

