import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './pages/App'
import store from './store'

const Redux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Redux />, document.getElementById('root'))
