import { useState } from 'react';

const RenderComment = ({id, user, comment, deleteCb }) => {
    const [votes, setVotes] = useState({
        upVotes: 0,
        downVotes: 0
    })

    const handleVotes = (e) => setVotes({...votes, [e.target.name]: parseInt(e.target.textContent) + 1})

    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button name='upVotes' onClick={handleVotes}>{votes.upVotes}👍</button>
            <button name='downVotes' onClick={handleVotes}>{votes.downVotes}👎</button>
            <button id={id} onClick={deleteCb}>delete</button>
        </div>
    )
}

export default RenderComment;