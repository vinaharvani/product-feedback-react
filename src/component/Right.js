import React from 'react';
import Article from './Article';
import logo2 from './asset/icon-arrow-up.svg';
import logo3 from './asset/icon-comments.svg';
import logo1 from './asset/icon-suggestions.svg';
import comment from './data/comment.json';

export default function Right() {
    return (
        <>
            <section className="right">
                <section className="nav-bar">
                    <section className="left-side">
                        <section className="bar-heading">
                            <img src={logo1} alt="Suggestions" />
                            <p className="heading-text">6 Suggestions</p>
                        </section>
                        <section className="bar-sorting">
                            <p className="sorting-label">Sort by: <strong>Most Upvotes</strong></p>
                        </section>
                    </section>
                    <section className="right-side">
                        <a href="#" className="bar-button">+ Add Feedback</a>
                    </section>
                </section>
                <section className="suggestions-list">
                    {/* {
                        comment.map((data:any) => (
                          
                                {data.comments.commentValue}
                             
                        ))
                    } */}
                </section>
            </section>
        </>
    );
}