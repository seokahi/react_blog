//css
import "./banner.css"

export default function Banner (props) {
    
    return (
        <>
        <div class="banner">
			<div class="max-width">
				<div class="banner-contents">
					<p class="sub-text">{props.blog.mainTitle}</p>
					<p class="main-text">{props.blog.subTitle}</p>
					<p class="description">
                        {props.blog.description}
					</p>
				</div>
			</div>
		</div>
        </>
    )
    
}