import React from 'react';
import './Tweet.css'

const Tweet = ({ tweet }) => (
    <li className="tweet">
        <div className="left">
        </div>
        <div className="right">
            <div className="tweet-header">
                <span className="tweet-name"></span>
                <span className="tweet-username"></span>
                <span className="tweet-separator"></span>
                <time></time>
            </div>
            <div></div>
        </div>
    </li>
);

export default Tweet;