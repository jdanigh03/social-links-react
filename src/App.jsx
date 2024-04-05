import './App.css';
import avatarJessica from '../public/avatar-jessica.jpeg';

function App() {
 

  return (
    <>
      <div class="contenedor">
        <div class="texto">
          <img src={avatarJessica} alt="jess"/>
          <h2>Jessica Randall</h2>
          <h3>London, United Kingdom</h3>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div class="botones">
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </>
  )
}

export default App