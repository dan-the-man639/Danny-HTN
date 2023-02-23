//elements with lower case is consider html by react and upper case is non html

//custom components
import { useEffect, useState } from "react";
// import Expenses from "./components/Expenses/Expenses";
import api from './Api/posts'
import RenderEvent from "./components/RenderEvent";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventSubPage from "./components/EventSubPage";

function App() {

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
 

  //fetch api data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/events');
        setPosts(response.data);
        // console.log(response.data);

      } catch (err) {
        //if not in 200 range
        //console.log(err.response.status);
      }
    }
    fetchPosts();
  }, []);
  ///////////////////////////////////////////////////

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<RenderEvent events={posts} onSetPost={setPost}/>}/>
          <Route exact path='/:eventId' element={<EventSubPage events={posts}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

{/* <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<RenderEvent events={posts} />}/>
        </Routes>
      </BrowserRouter> */}