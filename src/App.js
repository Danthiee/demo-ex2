import './App.css';
import me from './me.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wellcome to my page &hearts;
        </p>
        <a href="https://www.facebook.com/ddanthiee/"> 
        <img src={me} width="500" height="700" />
          </a>
          
      </header>
    </div>
  );
}

export default App;
