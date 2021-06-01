import './App.css';
import UserList from './Component/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>The Users List (with API)</h1>
      </header>
      <div className="ListClass">
      <UserList/>
      </div>
      
    </div>
  );
}

export default App;
