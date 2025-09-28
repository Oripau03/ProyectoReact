import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import diseno1 from '../img/diseno1.jpg';
import diseno2 from '../img/diseno2.jpg';
import diseno3 from '../img/diseno3.jpg';
import diseno4 from '../img/diseno4.jpg';

function ImgRow() {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);

  return (
    <>
      <section className="gallery m-2 p-md-5 d-flex row">
        <div className="row">
          <button onClick={() => setImg1(true)} className="col-md-3 px-md-1 py-1 btn-modal">
            <img src={diseno1} alt="Diseño de Interiores"/>
          </button>
          <button onClick={() => setImg2(true)} className="col-md-3 px-md-1 py-1 btn-modal">
            <img src={diseno2} alt="Diseño de Interiores"/>
          </button>
          <button onClick={() => setImg3(true)} className="col-md-3 px-md-1 py-1 btn-modal">
            <img src={diseno3} alt="Diseño de Interiores"/>
          </button>
          <button onClick={() => setImg4(true)} className="col-md-3 px-md-1 py-1 btn-modal">
            <img src={diseno4} alt="Diseño de Interiores"/>
          </button>
        </div>

        <Modal show={img1} onHide={() => setImg1(false)} size="sm" aria-labelledby="example-modal-sizes-title-sm">
          <Modal.Header closeButton />
          <Modal.Body>
            <img src={diseno1} alt="Diseño de Interiores"/>
          </Modal.Body>
        </Modal>

        <Modal show={img2} onHide={() => setImg2(false)} size="sm" aria-labelledby="example-modal-sizes-title-sm">
          <Modal.Header closeButton />
          <Modal.Body>
            <img src={diseno2} alt="Diseño de Interiores"/>
          </Modal.Body>
        </Modal>

        <Modal show={img3} onHide={() => setImg3(false)} size="sm" aria-labelledby="example-modal-sizes-title-sm">
          <Modal.Header closeButton />
          <Modal.Body>
            <img src={diseno3} alt="Diseño de Interiores"/>
          </Modal.Body>
        </Modal>

        <Modal show={img4} onHide={() => setImg4(false)} size="sm" aria-labelledby="example-modal-sizes-title-sm">
          <Modal.Header closeButton />
          <Modal.Body>
            <img src={diseno4} alt="Diseño de Interiores"/>
          </Modal.Body>
        </Modal>
      </section>

      {/* CSS para que los botones no se vean como botones */}
      <style>{`
        .btn-modal {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default ImgRow;
