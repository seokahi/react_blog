//css
import "./about.css"

//img
import facebook from "../../assets/Facebook.svg"
import twitter from "../../assets/Twitter.svg"
import instagram from "../../assets/Instagram.svg"
import github from "../../assets/Github.svg"

export default function About ({user}) {
    return (
        <aside class="about">
            <h2>About Me</h2>
            <img src={`${process.env.PUBLIC_URL}${user.profileImg}`} alt="" class="user-profile" />
            <p class="user-name">{user.name}</p>
            <p class="user-description">{user.userInfo}</p>
            <h3>Categories</h3>
            <ul class="categories">
                {user.category.map((v,i)=> <li key={i}><a href="#">{v}</a></li>)}
            </ul>
            <h3>Follow</h3>
            <ul class="sns">
                <li>
                    <a href="#">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={github} alt="GitHub" />
                    </a>
                </li>
            </ul>
        </aside>
    ) 
}