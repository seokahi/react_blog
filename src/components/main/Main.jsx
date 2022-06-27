//모듈
import About  from  "../about/About"
import Posts from "../posts/Posts"
//css
import "./main.css"

export default function Main ({data}) {
    return (
        <main>
            <div class="max-width">
                <Posts posts={data.posts} user={data.users[0]}/>
                <About user={data.users[0]}/>
            </div>
        </main>
    )
}