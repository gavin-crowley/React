import myCV from "./jv-cv.PNG";


import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <h4>Single Page</h4>
      <a
        href='https://drive.google.com/file/d/1KS5oaaK6jvyUPadPzTLLwedD4mMJ4PBs/view?usp=sharing'
        download
      >
        Download the pdf
      </a>

      <img src={myCV} alt="my cv"  />
    </div>
  );
}
