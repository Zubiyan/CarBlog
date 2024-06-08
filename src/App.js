import React, { useState } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import AddPost from './components/AddPost';
import './styles/styles.css'; 

function App() {
  const [posts, setPosts] = useState([
    { 
      title: 'Toyota Newest Updates', 
      content: 'Honed on the track. At home on the streets. The 2024 GR Supra is more dynamic than ever, with elevated levels of ride and handling, and your choice of a 2.0L (automatic only) or 3.0L powerplant, available with an automatic or six-speed intelligent Manual Transmission (iMIT) to put you even more in tune and in touch with the road.', 
      image: 'car.png' 
    },
    { 
      title: 'Porsche New Engine', 
      content: 'Porsche celebrated its 75th anniversary in 2023 with the Mission X supercar. The concept offered a glimpse into the electric future, but there hasnt been much news since then. Recently though, Porsche CEO Oliver Blume said a decision regarding whether or not to put the car into production will happen later this year.', 
      image: 'car2.png' 
    },
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="App">
      <Header postCount={posts.length} />
      <AddPost onAdd={addPost} />
      <BlogList posts={posts} />

      {/* Inline styles */}
      <style>
        {`
          .App {
            font-family: Arial, sans-serif;
            background-color: #D2F1E4;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default App;