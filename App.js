import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Restaurant User</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Food Match</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

function Home() {
  return (
    <div>
      <h1 >My Posts</h1>
    </div>
  )
}

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      try {
        const posts = await axios.get("http://127.0.0.1:8000/api/post/");
        console.log(posts.data);
        setPosts(posts.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPosts();
  }, []);

  return (
    <div className="container-fluid">
      <div class="row">
      {posts.map((post) => (
          <div class="col-sm-4 d-flex justify-content-center">
          <div class="card" style={{width: "100%"}}>
            <img class="card-img-top" src={post.image} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">{post.title}</h5>
              <p class="card-text">{post.content}</p>
              <p class="card-text"><b>Location:</b> {post.location}</p>
              <p class="card-text"><b>Distance:</b> {post.distance} miles</p>
              <a href="#" class="btn btn-success">View Status</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

function Create() {
  return (
  <button type="button" class="btn btn-success" href="/post">Create New Post</button>
)
}

function CreatePostForm() {
  return (
    <div>
      <h1>Create A Post</h1>
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title"></input>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="textarea" class="form-control" id="description" placeholder="Describe the contents of the food here."></input>
      </div>
      <div class="mb-3">
        <label for="location" class="form-label">Type</label>
        <input type="text" class="form-control" id="location" placeholder="Describe your restaurant's type (i.e. Diner, Cafe)."></input>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image Link</label>
        <input type="text" class="form-control" id="image"></input>
      </div>
</form>
</div>
  )
}

function App() {
  return (
    <div className="App" class="text-start">
      <NavBar /> 
      <div className="p-4">
        <Home />
        <Posts />
        <br></br>
        <CreatePostForm />
        <Create />
      </div>
    </div>
  );
}

export default App;
