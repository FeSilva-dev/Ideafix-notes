import {Route, BrowserRouter} from 'react-router-dom'
import { HomePage } from './pages/HomePage'

export function Routes(){
  return(
    <BrowserRouter>
      <Route component={HomePage} path="/" exact/>
    </BrowserRouter>
  )
};