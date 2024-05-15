import React from 'react'
import Article from './Article';

import logo1 from './asset/icon-suggestions.svg';

export default function Right() {
  return (
    <>
        <section class="right">
            <section class="nav-bar">
                <section class="left-side">
                    <section class="bar-heading">
                        <img src={logo1} alt="Suggestions"></img>
                        <p class="heading-text">6 Suggestions</p>
                    </section>
                    <section class="bar-sorting">
                        <p class="sorting-label">Sort by: <strong>Most Upvotes</strong></p>
                    </section>
                </section>
                <section class="right-side">
                    <a href="#" class="bar-button">+ Add Feedback</a>
                </section>
            </section>
            <section class="suggestions-list">

                <Article
                    upvoteNum = "112"
                    suggTitle = "Add tags for solutions"
                    suggDescription = "Easier to search for solutions based on a specific stack."
                    suggcategory = "Enhancement"
                    commentValue = "2"
                >     
                </Article>

                <Article
                    upvoteNum = "99"
                    suggTitle = "Add a dark theme option"
                    suggDescription = "It would help people with light sensitivities and who prefer dark mode."
                    suggcategory = "Feature"
                    commentValue = "5"
                >     
                </Article>
                
                <Article
                    upvoteNum = "65"
                    suggTitle = "Q&A within the challenge hubs"
                    suggDescription = "Challenge-specific Q&A would make for easy reference."
                    suggcategory = "Feature"
                    commentValue = "1"
                >     
                </Article>

                <Article
                    upvoteNum = "51"
                    suggTitle = "Add image/video upload to feedback"
                    suggDescription = "Image and screen can enhance comments on solutions."
                    suggcategory = "Enhancement"
                    commentValue = "2"
                >     
                </Article>
            
                <Article
                    upvoteNum = "42"
                    suggTitle = "Ability to follow others"
                    suggDescription = "Stay updated on comments and solutions other people post."
                    suggcategory = "Feature"
                    commentValue = "2"
                >     
                </Article>
                
                <Article
                    upvoteNum = "3"
                    suggTitle = "Preview images not loading"
                    suggDescription = "Challenge preview images are missing when you apply a  filter."
                    suggcategory = "Bug"
                    commentValue = "0"
                >     
                </Article>

            </section>
        </section>
    </>
  );
}
