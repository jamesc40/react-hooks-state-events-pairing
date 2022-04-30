import { useState } from 'react';
import RenderComment from './RenderComment';

const Comments = ({ comments }) => {

    const [whichComments, setWhichComments] = useState([...comments.sort((a, b) => b.comment.length - a.comment.length)]);
    const [showComments, setComments] = useState(true); 
    const [text, setText] = useState('');

    //changes the setComments bool based on a button press
    const handleShowComments = () => setComments(prev => !prev)

    //deletes a comment
    const handleWhichComments = (e) => setWhichComments(whichComments.filter(el => parseInt(el.id) !== parseInt(e.target.id)))

    //keeps track of the search value
    const handleTextChange = (e) => setText(e.target.value);

    // stops the page from refreshing on submit
    const handleFormSubmit = (e) => e.preventDefault();

    //creates a filtered arr based on search input
    const filteredComments = whichComments.filter((comment) => comment.user.includes(text))

    //maps an arr
    const renderOrNah = (someArr) => {
        if(showComments === true){
            return (
            <>
                <h2> {someArr.length} Comments </h2>
                {someArr.map(comment => 
                <RenderComment 
                    key={comment.id} 
                    id={comment.id}
                    user={comment.user}
                    comment={comment.comment}
                    deleteCb={handleWhichComments}
                />)}
            </>
            )
        }
    }
    
    return(
        <div> 

            <button value={showComments} onClick={handleShowComments}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            
            <hr />

            <form onSubmit={handleFormSubmit}>
                <label>
                    <input type='text' placeholder='search by user'  value={text} onChange={handleTextChange} ></input>
                </label>
            </form>

            {text === '' ? renderOrNah(whichComments) : renderOrNah(filteredComments) }

            <br />
        </div>
    )

}

export default Comments;