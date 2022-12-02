import './App.css';
import { Form } from './components/Form';
import { UserList } from './components/UserList';
import './index.css';
import axios from 'axios';

const BASE_URL = 'https://dbquerycrud-app-using-mern-production.up.railway.app';

function App() {
	const [userData, setUserData] = useState(null);
	const fetchUsersData = async () => {
		const resp = await axios.get(`${BASE_URL}/getUsers`);

		setUserData(resp.data.users);
	};
	useEffect(() => {
		fetchUsersData();
	}, []);

	return (
		<div className="App">
			{/* Form Component */}
			<Form fetchUserData={fetchUsersData} BASE_URL={BASE_URL} />
			{/* All users list */}
			<UserList
				userData={userData}
				setUserData={setUserData}
				fetchUsersData={fetchUsersData}
				BASE_URL={BASE_URL}
			/>
		</div>
	);
}

export default App;
