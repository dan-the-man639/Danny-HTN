//elements with lower case is consider html by react and upper case is non html

//custom components
import { useEffect, useState } from "react";
// import Expenses from "./components/Expenses/Expenses";
import api from './Api/posts'
import RenderEvent from "./components/RenderEvent";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventSubPage from "./components/EventSubPage";
import "./App.css"

function App() {

  const [posts, setPosts] = useState([]);

  { posts.length > 0 && console.log("post") }
  console.log(posts)



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
    <div className="nightSky">
      <h1>Hack The North Event Board</h1>
      <BrowserRouter>
        <Routes>
          {posts.length > 0 &&
            <>
              <Route exact path='/Danny-HTN/' element={<RenderEvent events={posts}/>} />
              <Route exact path='/Danny-HTN/login' element={<Login/>} />
              <Route exact path='/Danny-HTN/:eventId' element={<EventSubPage events={posts} />} />
            </>
          }
          <Route path='/' element={<div>empty array</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

/* <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<RenderEvent events={posts} />}/>
        </Routes>
      </BrowserRouter> */