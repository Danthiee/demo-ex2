import './App.css';
import hello from './hello.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hello} alt="hello world" />
        <p>
          welcome to my page
        </p>


        <h2> click here! </h2>
        <a href="https://www.youtube.com/watch?v=82ZTNQNEQgE"> clickkkk </a>
      </header>
    </div>
  );
}

export default App;
