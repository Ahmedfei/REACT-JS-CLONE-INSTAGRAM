
import React, {useState} from 'react';
 import Posts from "./components/Posts/Posts"
import SearchBar from "./components/SearchBar/SearchBar"




 import dummyData from "./dummy-data"
import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const [posts, setPosts] = useState(dummyData);
  

return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar/>
      <Posts data = {posts}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
