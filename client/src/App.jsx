import { useState } from 'react'

function App() {
  const [visibility, setVisibility] = useState(true);

  const toggleDiv = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      {visibility && (
        <div id='myDiv'>
          <p>Hello World!</p>
        </div>
      )}
      <button onClick={toggleDiv}>Toogle Div</button>
    </div>
  );
}

export default App
