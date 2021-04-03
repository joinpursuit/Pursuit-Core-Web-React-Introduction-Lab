import React from "react";

import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App() {
	return (
		<>
				<NavBar />
				<UserProfile />
				<Posts />
				<Contacts />
		</>
	);
}

export default App;

// export default function App() {
//   return <p>Hello, world!</p>;
// }
