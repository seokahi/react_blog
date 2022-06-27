import {Link} from 'react-router-dom';
//모듈
import Category from "../category/Category"
import Author from "../author/Author"
//css
import "./post.css"

export default function Post({post,user}) {
    console.log(user);
    return (
        <li>
            <Link to="/post" class="post">
                <article>
                    <img src={`${process.env.PUBLIC_URL}${post.thumbnail}`} alt="" />
                    <div class="contents-wrap">
                        <Category />
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <Author user={user}/>
                        <p class="post-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                            dolor quas odio cum incidunt repudiandae vel."
                        </p>
                    </div>
                </article>
            </Link>
        </li>
    )
}
