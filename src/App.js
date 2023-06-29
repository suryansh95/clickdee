import { useState } from 'react';
import './App.css';
function App() {
const [ishover , setHover] = useState(false);
const handleMouseHover = () =>{
  setHover(true);
};
const handleMouseLeave = () =>{
  setHover(false)
}


  return (
    <>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '2', marginRight: '10px' }}>
       <h1>Why The Industry <br/> Chooses Clickdee</h1>
       <p>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>
      </div>
      <div style={{ flex: '1', marginRight: '10px' }}  onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
        <div className="card">
        <div className='box-content'>
     <span> Choose Your Local Targeting</span>
     {ishover && (
      <span className='additional-info'>Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</span>
     )}
    
     </div>
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <div className="card">
          <h3>Card 2</h3>
          <p>This is the content of Card 2.</p>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
