import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Dhaka" special="Bivag"></District>
      <District name="Komilla" special="My app"></District>
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return (
    <div style={{backgroundColor: 'lightgreen', margin: '20px', border: '20px', padding: '10px', borderRadius: '20px'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'green',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}

function District(props){
  const [power, setPower] = useState(1);

  const boostPower = () =>{
   const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>The Power</button>
    </div>
  )
}

export default App;
