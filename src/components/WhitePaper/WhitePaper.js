import './WhitePaper.css';
import whitepaper from '../../assets/write-paper.svg';
import {useState} from 'react';
import {useEffect} from 'react';
import step1 from '../../assets/steps/step1.svg';
import step2 from '../../assets/steps/step2.svg';
import step3 from '../../assets/steps/step3.svg';
import step4 from '../../assets/steps/step4.svg';

const WhitePaper = () => {

  const stepsInitial = [
    {
      heading: 'Apps onboard our platform',
      id: 1,
      text: 'Step 1',
      isActive: false,
      url: step1,
      content: 'The apps that use data for their amazing performance, onboard our platform as they respect your privacy when it comes to your data'
    },
    {
      heading: 'You allow us to run your data on our machine',
      id: 2,
      text: 'Step 2',
      isActive: false,
      url: step2,
      content: 'The apps that use data for their amazing performance onboard our platform as they respect your privacy when it comes to your data'
    },
    {
      heading: 'Our model runs on your data to provide you the best experience',
      id: 3,
      text: 'Step 3',
      isActive: false,
      url: step3,
      content: 'Our model learns what you like and tries its best to provide you the best experience while using any app signed up with us.'
    },
    {
      heading: 'You get tokens for helping us and get amazing dealsfrom apps on these',
      id: 4,
      text: 'Step 4',
      isActive: false,
      url: step4,
      content: 'Well, thats the best part. Get tokens for helping us and avail all of the amazing deals provided by te apps you use on these tokens'
    },
  ];

  const [index, setIndex] = useState(1);
  const [steps, setSteps] = useState(JSON.parse(JSON.stringify(stepsInitial)));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => {
        if (index + 1 > 4) return 1;
        return index + 1;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const stepsCopy = JSON.parse(JSON.stringify(steps));
    stepsCopy.forEach(step => {
      if (step.id == index) step.isActive = true;
      else step.isActive = false;
    });
    setSteps(stepsCopy);
  }, [index]);

  return (
    <div className="container whitepaper" id="whitepaper">
      <h1>How we transform</h1>
      <div className="whitepaper-content">
        <img src={whitepaper} alt="img" style={{width: "12vw"}} className="whitepaper-img"/>
        <div className="steps-container">
          {steps.map(step => (
            <div key={step.id} className={step.isActive ? "step active-step" : "step"} onClick={() => setIndex(step.id)}>{step.text}</div>
          ))}
        </div>
        {steps.map(step => (
          <div className={step.isActive ? "whitepaper-hero active-whitepaper-hero" : "whitepaper-hero"}>
            <img src={step.url} className="whitepaper-hero-img"/>
            <div className="whitepaper-hero-content">
              <h2>{step.heading}</h2>
              <p>{step.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default WhitePaper;
