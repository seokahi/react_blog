import React, {useState} from "react";
//css
import "./header.css"
//이미지
import logo from "../../assets/Logo.svg"
//모듈
import Login from "./Login/Login";
import Logout from "./Logout/Logout";

export default function Header () {
    const [login, setLogin] = useState("false");
	function handleButtonClick() {
		setLogin(!login);
	}
    return (
        <header>
			<div class="max-width">
				<h1>
					<a href="./">
						<img src={logo} alt="My Blog" />
					</a>
				</h1>
				<ul onClick={handleButtonClick}>
                    {login?<Login />:<Logout />}
				</ul>
			</div>
		</header>
    )
}
