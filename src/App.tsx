// Importation du module REACT
import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

// Typage du composant App avec le type React.FunctionComponent
const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                { /* Barre de navigation */}
                <nav>
                    <div className='nav-wrapper teal'>
                        <Link to='/' className='brand-logo center'>Pokédex</Link>
                    </div>
                </nav>
                { /* Système de gestion des routes */}
                <Switch>
                    <PrivateRoute exact path='/' component={PokemonList} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path='/pokemons' component={PokemonList} />
                    <PrivateRoute exact path='/pokemons/add' component={PokemonAdd} />
                    <PrivateRoute path='/pokemons/edit/:id' component={PokemonEdit} />
                    <PrivateRoute path='/pokemons/:id' component={PokemonsDetail} />
                    { /* Interception des pages non prises en charges */}
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

// Permet d'exporter le composant pour qu'il soit utilisable dans le projet
export default App;