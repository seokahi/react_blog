//모듈
import WrapBox from "../wrapBox/WrapBox"
//css 
import "./view.css"

export default function View ({data}) {
    return (
        <div class="view">
            <div class="max-width">
                <WrapBox data={data} />
            </div>
        </div>
    )
}