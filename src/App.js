import './App.css';
import Navbar from './components/navbar/Navbar';
import Img1 from "./images/Image.svg"
import Img2 from "./images/Image1.png"
import Img3 from "./images/Image.png"
import Img4 from "./images/Screen.png"
import Img5 from "./images/Screen1.png"
import Img6 from "./images/Screen2.png"
import Img7 from "./images/Screen3.png"
import Img8 from "./images/Screen4.png"
import Img9 from "./images/Screen5.png"
import Main from './components/main/Main';
import Qism from "./components/qism/Qism"
import Img10 from "./images/qism1.png"
import Img11 from "./images/qism2.png"
import Img12 from "./images/qism3.png"
import Img13 from "./images/qism4.png"
import List from './components/list/List';
import { users } from "./static_data"
function App() {
  return (
    <div className="App">
      <Navbar Img9={Img9} Img8={Img8} Img7={Img7} Img6={Img6} Img5={Img5} Img4={Img4} Img3={Img3} Img2={Img2} Img1={Img1} />
      <Main Img9={Img9} Img8={Img8} Img7={Img7} Img6={Img6} />
      <Qism Img13={Img13} Img12={Img12} Img11={Img11} Img10={Img10} />
      <h1 className="list_h11">Testimonials</h1>
      <div className="list_element">
        {
          users.map(user => (
            <List user={user} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
