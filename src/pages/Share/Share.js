import React from 'react';

import './Share.css';

export default function Share () {  
  
  return (
    <div className="share">
      <div className="row justify-content-center">
        <div className="col-lg-3 header-img-section">
            {/* {%- include svg/heart-eyes.svg -%} */}
        </div>
        <div className="share-content">
          <p className="header-subtitle">Thanks for signing up! You will be among the first to know when Endowl is ready.</p>
          <h1 className="header-title mb-3">One more thing before you go....</h1>
          <p>
              We are excited to share Endowl with the world. We feel that the ability to create and manage your
              estate plan is as important as managing your career, your personal budget, and your investments. We
              have taken a step back to look at how estate planning has been done in the past and how it can be
              done better with modern technology. We are passionate about bringing an easy-to-use system to
              market that considers the needs and desires of twenty-first century life.
          </p>
          <p>
              It may sound corny, but we believe that people are fundamentally good and that everyone brings
              something important and unique to the world. We want to build a system that helps people tell the
              story of their life and make sure that their legacy is preserved.
          </p>
          <p>
              If you agree, would you help us get the word out by sharing a brief message on social media
              about Endowl? We would appreciate it tremendously. Thanks!
          </p>
          <div className="content d-flex justify-content-center">

          {/* {%- include facebook-share-link.html -%} */}
          {/* {%- include tweet-interview-invitation.html -%} */}
          </div>
        </div>
      </div>
    </div>
  )
}