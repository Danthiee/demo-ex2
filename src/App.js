import './App.css';
import inf from './inf.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <p>
          Wellcome to my page &hearts;
        </p>
        
        <nav class="menu">
          <ul>
            <li><a href="https://www.youtube.com/watch?v=8j309_McnC4">&hearts;Hello homie  </a></li>
            <li><a href="https://www.instagram.com/ngw.yhtie/">&hearts;About me 
            </a>
            </li>

          </ul>
        </nav>
        
        <a href="https://www.facebook.com/ddanthiee/">
          <img src={inf} width="1024" height="1024" alt="Me" />
        </a>
    
        
      
        </header>
    </div>
  );
}

export default App;