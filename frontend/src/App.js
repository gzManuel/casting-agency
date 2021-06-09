import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';

function App() {

  return (
    <Layout>
      <Switch>
        <Route path='/actors'>
          <ActorsPage />
        </Route>
        <Route path='/movies'>
          <MoviesPage />
        </Route>
        <Route path='/'>
          <Redirect to='/actors' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
