// img
import login from "../../../assets/icon-login.svg"
import register from "../../../assets/icon-register.svg"

export default function Login () {
    return (
        <>
        <li>
            <a href="#" class="button gray">
                <img src={login} alt="" />
                <span>Login</span>
            </a>
        </li>
        <li class="only-pc">
            <a href="#" class="button gray">
                <img src={register} alt="" />
                <span>Register</span>
            </a>
        </li>
        </>
    )
} 