import { useState } from 'react';

const Description = ({ title, views, createdAt, upVotes, downVotes}) => {
    const [votes, setVotes] = useState({
        upVotes: upVotes,
        downVotes: downVotes
    })
    const handleVotes = (e) => setVotes({...votes, [e.target.name]: parseInt(e.target.value) + 1})

    return (
    <div>
        <h1>{title}</h1>
        <p>{views} views | Uploaded {createdAt}</p>
        <button onClick={handleVotes} name='upVotes' value={votes.upVotes}>{votes.upVotes} 👍 </button>
        <button onClick={handleVotes} name='downVotes' value={votes.downVotes}>{votes.downVotes} 👎 </button>
        <br /><br />
    </div>
    )
}

export default Description;