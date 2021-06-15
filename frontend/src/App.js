import { Switch, Route, Redirect } from 'react-router-dom';
import Actor from './components/Actors/Actor';

import Layout from './components/Layout/Layout';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';

function App() {

  return (
    <Layout>
      <Switch>
        <Route path='/actors/:actorId' >
          <Actor />
        </Route>
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
