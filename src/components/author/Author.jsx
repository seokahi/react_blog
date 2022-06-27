//css
import "./author.css"

export default function Author({user}) {
    console.log(user);
    return (
        <dl class="author-wrap">
            <dt class="a11y-hidden">Author</dt>
            <dd class="author"><img src={`${process.env.PUBLIC_URL}${user.profileImg}`} alt="" /> Chilli</dd>
            <dt class="a11y-hidden">Created</dt>
            <dd class="created">2022.05.25</dd>
        </dl>
    )
}