//css
import "./button.css"

export default function Button () {
    return (
        <>
        <div class="btn-group">
            <a href="#" class="btn-modify">
                <span class="a11y-hidden">modify</span>
            </a>
            <button type="button" class="btn-delete">
                <span class="a11y-hidden">delete</span>
            </button>
        </div>
        <a href="./" class="btn-back">
            <span class="a11y-hidden">Back</span>
        </a>
        </>
    )
}