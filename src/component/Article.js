import React from 'react'
import logo2 from './asset/icon-arrow-up.svg';
import logo3 from './asset/icon-comments.svg';

export default function Article(props) {
  return (
    <>
        <article class="suggestion-item">
            <section class="suggestion-upvotes-container">
                <section class="suggestion-upvotes">
                    <img src={logo2} alt="icon-arrow-up"></img>
                    <span>{props.upvoteNum}</span>
                </section>
            </section>
            <a href="/details/1" class="suggestion-info">
                <p class="suggestion-title">{props.suggTitle}</p>
                <p class="suggestion-description">{props.suggDescription}</p>
                <p class="suggestion-category">{props.suggcategory}</p>
            </a>
            <section class="suggestion-comments">
                <img src={logo3} alt="icon-comments"></img>
                <span>{props.commentValue}</span>
            </section>
        </article>

    </>
  )
}
