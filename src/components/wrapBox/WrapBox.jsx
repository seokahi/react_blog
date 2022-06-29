//모듈
import Author from "../author/Author"
import Category from "../category/Category"
import Button from "../button/Button"
//css
import "./wrapbox.css"

export default function WrapBox({data}) {
    return (
        <section class="wrap-box">
            <div class="inner">
                <Author user={data.users[0]}/>
                <Category />
                <div class="title-wrap">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <button class="btn-like">Like</button>
                </div>
                <hr />
                <div class="view-contents">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                        dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                        nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                        cum incidunt repudiandae vel.
                    </p>
                    <img src={`${process.env.PUBLIC_URL}/assets/post-background6.jpg`} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                        dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                        nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                        cum incidunt repudiandae vel.
                    </p>
                </div>
                <Button />
            </div>
        </section>
    )
}