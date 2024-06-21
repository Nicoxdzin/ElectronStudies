import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from '../../../../web-test/node_modules/react-router-dom/dist'
import App from './App'
import HelloWorld from './components/HelloWorld'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <div>
      <Route path="/" exact component={ HelloWorld }/>
    </div>
  </HashRouter>
)
