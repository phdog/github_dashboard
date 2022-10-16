import { Provider as ReduxProvider } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { createRoot } from 'react-dom/client'
import { store, history } from 'state/store'
import Routing from './Routing'
import 'normalize.css'
import 'styles/app.scss'


const container = document.getElementById('react-root')
const root = createRoot(container)
root.render(
  <ReduxProvider store={store}>
    <Router history={history}>
        <Routing />
    </Router>
  </ReduxProvider>
)
