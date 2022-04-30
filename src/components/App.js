import video from "../data/video.js";
import RenderVideo from './RenderVideo'
import Description from "./Description.js";
import Comments from './Comments';

const {embedUrl, title, views, createdAt, upvotes, downvotes, comments} = video

function App() {
  return (
    <div className="App">
      <RenderVideo url={embedUrl} />
      <Description 
        title={title} 
        views={views} 
        createdAt={createdAt} 
        upVotes={upvotes}
        downVotes={downvotes}
      />
      <Comments comments={comments}/>
    </div>
  );
}

export default App;
