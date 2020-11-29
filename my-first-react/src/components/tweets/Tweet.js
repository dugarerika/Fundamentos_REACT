import React from 'react';
import './Tweet.css'
import Photo from '../shared/Photo'
import defaultPhoto from '../../assets/default_profile.png'

const Tweet = ({ tweet }) => (
    <li className="tweet bordered">
        <div className="left">
            <Photo src={defaultPhoto} />
        </div>
        <div className="right">
            <div className="tweet-header">
                <span className="tweet-nombre">{tweet.user.name}</span>
                <span className="tweet-username">{tweet.user.username}</span>
                <span className="tweet-separador">.</span>
                <time>{tweet.createdAt}</time>
            </div>
            <div>
                {tweet.content}
                <div className="tweet-actions"></div>
            </div>
        </div>
    </li>
);

export default Tweet;