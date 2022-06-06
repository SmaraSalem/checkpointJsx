import logo from './logo.svg';
import './App.css';
import './style.css';

import gomycode from'./gomycode.jpg';

function App() {
  return (
    <>
    <div style={{border: 'Solid 1px black',maxWidth:'100vw'}}>

 <h1 className="title red">Salem smara</h1>

 <br />

 <img src={gomycode} alt="ici un image" />

 <br />

 <img className="img" src="/img/devlop.webp" alt="ici une image"/>

</div>

<video width="320" height="240" controls>

 <source src="https://youtu.be/olJOZp57FWM"  />

</video>
</>
  );
}

export default App;
