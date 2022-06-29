import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// 페이지
import HomePage from "./pages/HomePage" 
import PostPage  from "./pages/PostPage";
//컴포넌트
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
// css
import "./reset.css"
import "./global.css"
// 데이터
import data from "./data"

function App() {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route path="/"  element={<HomePage data={data}/>}/>
					<Route path="/post" element={<PostPage data={data}/>} />
				</Routes>
			</Router>
			<Footer />
		</>
	)
}

export default App;
