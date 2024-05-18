import React from 'react'
import logo5 from "./asset/icon-arrow-left.svg"
import victoria from "./asset/image-victoria.jpg"
import zena from "./asset/image-zena.jpg"
import Article from './Article'
import './style/detail.css'

export default function Detail() {
    return (
        <>
            <div className='container'>
                <section className='detail-page'>
                    <section className='top-bar'>
                        <section className='arrow-icon'>
                            <img src={logo5} alt='arrow-icon'></img>
                            <a className='back-link' href='#'>Go Back</a>
                        </section>
                        <a className='bar-button' href='#'>Edit feedback</a>
                    </section>
                    {/* <Article
                        upvoteNum="112"
                        suggTitle="Add tags for solutions"
                        suggDescription="Easier to search for solutions based on a specific stack."
                        suggcategory="Enhancement"
                        commentValue="2"
                    >
                    </Article> */}
                    <section className='feedback-comment'>
                        <p className='comment-title'>2 Comments</p>
                        <section className='comment-first'>
                            <section className='comment-info'>
                                <section className='img-container'>
                                    <img src={victoria} alt='victoria'></img>
                                </section>
                                <section className='center'>
                                    <p className='author-name'>victoria Chang</p>
                                    <p className='author-username'>@upbeat1811</p>
                                </section>
                                <section className='last'>
                                    <p className='reply-link'>Reply</p>
                                </section>
                            </section>
                            <p className='comment-text'>
                                Awesome idea! Trying to find framework-specific projects within the hubs can be tedious
                            </p>
                        </section>
                        <section className='comment-first'>
                            <section className='comment-info'>
                                <section className='img-container'>
                                    <img src={zena} alt='zena'></img>
                                </section>
                                <section className='center'>
                                    <p className='author-name'>Zena Hood</p>
                                    <p className='author-username'>@brawnybrave</p>
                                </section>
                                <section className='last'>
                                    <p className='reply-link'>Reply</p>
                                </section>
                            </section>
                            <p className='comment-text'>
                                Please use fun, color-coded labels to easily identify them at a glance
                            </p>
                        </section>
                    </section>
                    <section className='comment-form'>
                        <p className='form-heading'>Add Comment</p>
                        <textarea maxlength="225" class="form-textarea"></textarea>
                        <section class="footer-line">
                            <p class="char-left">225 characters left</p>
                            <button class="submit-btn">Post Comment</button>
                        </section>
                    </section>
                </section>
            </div>
        </>
    )
}
