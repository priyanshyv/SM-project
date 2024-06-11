import React from 'react';
import './NewsletterContainer.css';
import SMfans from './media/SMfans.jpeg'
const NewsletterContainer = () => {
  return (
    <div className="newsletter_container">
      <div className="newsletter_content">
        {/* <!-- left part --> */}
        <div className="newsleft">
          <img src={SMfans} alt="sm fans" loading="lazy" />
        </div>
        {/* <!-- right part --> */}
        <div className="newsright">
          <div className="news_info">
            <h2 className="news_title">#SMNATION</h2>
            <p className="news_desc">Signup for our newsletter</p>
          </div>

          <form className="news_form">
            <input className="news_email" type="text" placeholder="Email" />
            <button className="news_sendbutton">send</button>
          </form>
          <div className="privacy_policy">
            By signing up for our newsletter you agree to our{' '}
            <a className="news_link" href="/*">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="news_link" href="/*">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterContainer;

