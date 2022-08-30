import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import DefaultContextProvider from './Context/DefaultContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <DefaultContextProvider>
    <App />
  </DefaultContextProvider>
)

// const ReactRouterSetup = () => {
//   return (
//     <Router>
//       <Route path='/'>
//         <DefaultContextProvider>
//           <App />
//         </DefaultContextProvider>
//       </Route>
//     </Router>
//   )
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
