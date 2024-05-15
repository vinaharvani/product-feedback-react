import React from 'react';
import logo4 from './asset/icon-hamburger.svg';

export default function Left() {
  return (
    <>
        <section class="mobile-nav">
                <div>
                    <p data-v-30a547e3="" class="heading-title">Frontend Mentor</p>
                    <p data-v-30a547e3="" class="heading-text">Feedback Board</p>
                </div>
                <div>
                    <img src={logo4} alt=""></img>
                </div>
            </section>

            <section class="left">
                <section class="left-heading">
                    <p class="heading-title">Frontend Mentor</p>
                    <p class="heading-text">Feedback Board</p>
                </section>
                <section class="aside-categories">
                    <div class="aside-category is-active"> All </div>
                    <div class="aside-category"> UI </div>
                    <div class="aside-category"> UX </div>
                    <div class="aside-category"> Enhancement </div>
                    <div class="aside-category"> Bug </div>
                    <div class="aside-category"> Feature </div>
                </section>
                <section class="aside-roadmap">
                    <section class="roadmap-heading">
                        <p class="heading-title">Roadmap</p>
                        <a href="/roadmap" class="heading-link">View</a>
                    </section>
                    <section class="roadmap-statuses">
                        <section class="roadmap-status orange">
                            <p class="status-name">Planned</p>
                            <p class="status-number">2</p>
                        </section>
                        <section class="roadmap-status pink">
                            <p class="status-name">In-Progress</p>
                            <p class="status-number">3</p>
                        </section>
                        <section class="roadmap-status blue">
                            <p class="status-name">Live</p>
                            <p class="status-number">1</p>
                        </section>
                    </section>
                </section>
            </section>
    </>
  );
}
