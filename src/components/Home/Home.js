import './Home.css';
import Spline from '@splinetool/react-spline';
import scrolldown from '../../assets/scroll-down.svg';

const Home = () => {
  const spline = (
    <div style={{width: '750px', height: '750px', transform: 'scale(0.5)'}}>
      <Spline scene="https://prod.spline.design/66GC2JNzbIEqjhb2/scene.splinecode" />
    </div>
  );
 
  return (
    <div className="container home">
      <h1>Making distributed computing native to mobile</h1>
      <p>Building the future of data and ML on edge devices</p>
      <img src={scrolldown} className="scrolldown" />
      {spline}
   </div>
  )
};

export default Home;
