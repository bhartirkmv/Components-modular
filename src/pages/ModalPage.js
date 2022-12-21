import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage () {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  // The children prop goes inside of the tags.
  // The actionBar is going to contain some string, jsx that we want
  // to display inside the Modal bar.
  // We can very well send a jsx element like a prop.
  const actionBar = <div><Button onClick= {handleClose} primary>I accept</Button></div>;
  const modal = <Modal onClose = {handleClose} actionBar ={actionBar }> 
    <p>
      Here is an important agreement for you to accept.
    </p>
  </Modal>

  
  return (
    <div className='relative'>
      <Button onClick= {handleClick} primary>Open Modal</Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;