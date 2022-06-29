//모듈
import View from "../components/view/View"
//css
import "./postpage.css"
export default function PostPage({data}) {
    return (
		<>
        <div class="banner" style={{ backgroundImage : `url(${process.env.PUBLIC_URL}/assets/post-background6.jpg)`}}>
			<div class="max-width">
				<div class="banner-contents">
					<p class="today">May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
		<View data={data}/>
		</>
    )
};