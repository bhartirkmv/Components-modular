
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal ({onClose, children, actionBar}) {

  useEffect(() => {
    // syntax to add a class to the body element
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose}>

      </div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>
            {actionBar}
          </div>
          
        </div>
        
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
  
    // First div is going to function as our gray background.
    
  
}

export default Modal;