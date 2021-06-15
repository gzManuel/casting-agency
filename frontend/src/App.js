import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ActorDetailPage from './pages/ActorDetailPage';
import MovieDetailPage from './pages/MovieDetailPage';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';


function App() {

  return (
    <Layout>
      <Switch>

        <Route path='/actors/:actorId' >
          <ActorDetailPage />
        </Route>

        <Route path='/movies/:movieId'>
          <MovieDetailPage />
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
