import { useDispatch } from 'react-redux'
import './App.css'
import { headerProfile } from './redux/reducers/headerProfileOptions'
import Router from './router/Router'

const App = () => {
  const dispatch = useDispatch()
  return (
    <div
      className="app"
      onClick={() => {
        dispatch(headerProfile(false))
      }}
    >
      <Router />
    </div>
  )
}

export default App
