
import React from 'react';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage () {
  const handleClick = () => {
    
  }

  return (
    <div>
      <div>
        <Button secondary outline rounded onClick={handleClick}  className= 'mb-5'>
          <GoBell/>
          Click Me! </Button>
      </div>
      <div>
        <Button warning outline onMouseLeave= {handleClick} >
          <GoCloudDownload  />
          Buy Now! </Button>
      </div>
      <div>
        <Button outline danger>
          <GoDatabase  />
          See Deal! </Button>
      </div>
      <div>
        <Button primary rounded>Hide Deals! </Button>
      </div>
    </div>
  );
}

export default ButtonPage;