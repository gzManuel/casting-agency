import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import FormActor from './components/Actors/FormActor';
import FormMovie from './components/Movies/FormMovie';

function App() {


  return (
    <Layout formActor={<FormActor />} formMovie={<FormMovie />}>
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
