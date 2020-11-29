import React from 'react'
import { getLatestTweets } from '../../API/tweets'
import Tweet from './Tweet'


class TweetsPage extends React.Component{

    state = {
    tweets: null,
    };

    // async componentDidMount() { 
    //     const tweets = await getLatestTweets();
    //     this.setState({tweets});
    // }


    getTweets = async () => { 
        const tweets = await getLatestTweets();
        this.setState({ tweets });
    }

    componentDidMount() { 
        this.getTweets();
    }

    render() {
        const {tweets} = this.state;
        return (
            tweets && (
            <ul>
                    {tweets.map(tweet => (
                        // destructuring
                        <Tweet key={tweet.id} {...tweet} />
                ))}
            </ul>
            )
        );
    }
}

export default TweetsPage;