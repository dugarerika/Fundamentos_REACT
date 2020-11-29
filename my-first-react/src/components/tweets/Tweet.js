import React from 'react';
import T from "prop-types"

import defaultPhoto from '../../assets/default_profile.png'
import Photo from '../shared/Photo'
import './Tweet.css'

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
    
const Tweet = ({ user, createdAt, content }) => (
    <li className="tweet bordered">
        <article className="tweet bordered">
        <div className="left">
            <Photo src={defaultPhoto} />
        </div>
        <div className="right">
            <div className="tweet-header">
                <span className="tweet-nombre">{user.name}</span>
                <span className="tweet-username">{user.username}</span>
                <span className="tweet-separador">.</span>
                <time>{createdAt}</time>
                <time dateTime={createdAt}>
                    {formatDistanceToNow(new Date(createdAt))}
                </time>
            </div>
            <div>
                {content}
                <div className="tweet-actions"></div>
            </div>
            </div>
        </article>
    </li>     
);

Tweet.prototype = {
    user: T.shape({name: T.string, username:T.string}).isRequired,
    createdAt: T.string.isRequired,
    content: T.string.isRequired,
};

export default Tweet;