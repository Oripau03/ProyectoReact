import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import diseno1 from '../img/diseno1.jpg'
import diseno2 from '../img/diseno2.jpg'
import diseno3 from '../img/diseno3.jpg'
import diseno4 from '../img/diseno4.jpg'



function ImgRow() {
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(false);
    const [img3, setImg3] = useState(false);
    const [img4, setImg4] = useState(false);
  
    return (
      <>
        <div className='row'>
            <a onClick={() => setImg1(true)} className="col-md-3 px-md-1 py-1" data-bs-toggle="modal" data-bs-target="#modal2"><img src={diseno1} /></a>
            <a onClick={() => setImg2(true)} className="col-md-3 px-md-1 py-1" data-bs-toggle="modal" data-bs-target="#modal2"><img src={diseno2} /></a>
            <a onClick={() => setImg3(true)} className="col-md-3 px-md-1 py-1" data-bs-toggle="modal" data-bs-target="#modal2"><img src={diseno3} /></a>
            <a onClick={() => setImg4(true)} className="col-md-3 px-md-1 py-1" data-bs-toggle="modal" data-bs-target="#modal2"><img src={diseno4} /></a>
        </div>

        <Modal
          size="sm"
          show={img1}
          onHide={() => setImg1(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body><img src={diseno1} /></Modal.Body>
        </Modal>        
        
        <Modal
          size="sm"
          show={img2}
          onHide={() => setImg2(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body><img src={diseno2} /></Modal.Body>
        </Modal>

        <Modal
          size="sm"
          show={img3}
          onHide={() => setImg3(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body><img src={diseno3} /></Modal.Body>
        </Modal>

        <Modal
          size="sm"
          show={img4}
          onHide={() => setImg4(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body><img src={diseno4} /></Modal.Body>
        </Modal>
      </>
    );
  }
  

export default ImgRow