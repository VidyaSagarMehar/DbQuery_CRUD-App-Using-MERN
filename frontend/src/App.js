import './App.css';
import axios from 'axios';
import { Form } from './components/Form';
import { UserList } from './components/UserList';
import './index.css';

const BASE_URL = 'https://dbquerycrud-app-using-mern-production.up.railway.app';

function App() {
	return (
		<div>
			<Form />
			<UserList />
		</div>
	);
}

export default App;
