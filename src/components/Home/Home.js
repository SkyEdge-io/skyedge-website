import './Home.css';
import Spline from '@splinetool/react-spline';

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
   </div>
  )
};

export default Home;
