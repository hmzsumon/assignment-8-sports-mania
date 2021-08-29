import { Route, Switch } from 'react-router-dom';
import LeagueDetails from './components/LeagueDetails';
import Leagues from './components/Leagues';

function App(props) {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Leagues />
				</Route>
				<Route exact path='/details/:id'>
					<LeagueDetails />
				</Route>
			</Switch>
		</>
	);
}

export default App;
