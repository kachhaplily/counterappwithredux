import React from 'react'
import store from './store/Store'
import { Provider } from 'react-redux'
import Countrtpage from './components/Countrtpage'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Countrtpage />
    </Provider>
  )
}

export default App