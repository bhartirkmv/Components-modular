import React from 'react';
import Accordion from '../components/Accordion';

function AccordionPage () {
  const items = [
    {
      id:'xnxnbx',
      label: 'Can i use React on a project?',
      content: 'You can react on any project you want'
    },
    {
      id: 'sbndbs',
      label: 'Can i use Javascript on a project?',
      content: 'You can Javascript on any project you want'

    },
    {
      id: 'sbgnsms',
      label: 'Can i use CSS on a project?',
      content: 'You can CSS on any project you want'
    }
  ];
  

  return (<Accordion items = {items}/>);
}

export default AccordionPage;