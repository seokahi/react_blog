//이미지
import profile from "../../../assets/profile.jpg"
import wrtie  from "../../../assets/icon-modify-white.svg" 
import logout from "../../../assets/icon-logout.svg"

export default function Logout () {
    return (
        <>
        <li class="profile-img">
            <a href="#">
                <img src={profile} alt="My Page" />
            </a>
        </li>
        <li>
            <a href="#" class="button">
                <img src={wrtie} alt="" />
                <span>Write</span>
            </a>
        </li>
        <li>
            <button class="button white">
                <img src={logout}alt="" />
                <span>Logout</span>
            </button>
        </li>
        </>
    )
}