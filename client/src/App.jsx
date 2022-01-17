import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'

const App = () => {

  const [view, setView] = useState('home');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let Orb;
    if(view==='home'){
      Orb=<button className='orb home'>Choose an excersise to get started
      </button>
    } else if (view==='4-4-4-4'){
      Orb=<button className='orb boxPulse'><div className='box-orb-text'></div></button>
    } else if(view==='4-4'){
      Orb=<button className='orb equalPulse'><div className='equal-orb-text'></div></button>
    } else if(view==='4-4-4'){
      Orb=<button className='orb trianglePulse'><div className='tri-orb-text'></div></button>
    }

    return(
      <div className='overall-container'>
        <div className='title'>Take a minute to breathe</div>
        {Orb}
         <nav className='menubar-container'>
                <button className='descriptions-button' onClick={handleShow}>Descriptions</button>
              <button className='equal-button' onClick={() => setView('4-4')}>Equal Breathing</button>
              <button className='box-button' onClick={() => setView('4-4-4-4')}>Box Breathing</button>
              <button className='triangle-button' onClick={() => setView('4-4-4')}>Triangle Breathing</button>
              <button className='stop-button' onClick={() => setView('home')}>Stop Excersise</button>
        </nav>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header className="off-header" closeButton>
            <Offcanvas.Title className='offcanvas-title'>Descriptions</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='offcanvas-body'>
            <div className='offcanvas-description-container'>
              <div className='offcanvas-description-header'>Equal Breathing</div>
              <div className='offcanvas-description-text'>Breathe in for four seconds and out for four seconds.</div>
            </div>
            <div className='offcanvas-description-container'>
              <div className='offcanvas-description-header'>Box Breathing</div>
              <div className='offcanvas-description-text'>Breathe in for four seconds, hold for four seconds, breathe out for four seconds, and hold for four seconds.</div>
            </div>
            <div className='offcanvas-description-container-tri'>
              <div className='offcanvas-description-header'>Triangle Breathing</div>
              <div className='offcanvas-description-text'>Breathe in for four seconds, out for four seconds, and hold for four seconds.</div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
};

export default App;