import {BrowserRouter, Route} from "react-router-dom"; 
// 페이지
import HomePage from "./pages/HomePage" 
import PostPage  from "./pages/PostPage";
//컴포넌트
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
// css
import "./reset.css"
import "./global.css"
function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Route path="/" exact component={HomePage} />
				<Route path="/post" exact component={PostPage} />
			</BrowserRouter>
			<Footer />
		</>
	)
}

export default App;