//모듈
import Post from "../post/Post" 
//css
import "./posts.css"

export default function Posts({posts,user}) {
    const  reverseData = posts.slice().reverse();
    console.log(reverseData);
    return (
        <>
            <h2 className="a11y-hidden">Post</h2>
            <ul className="posts">
                {reverseData.map( (value) => {
                    return (<Post key={value.id} post={value} user={user}/>);
                })}
            </ul>
        </>
    )
}