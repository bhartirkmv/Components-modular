

import Link from "./Link";

function Sidebar () {

  // This array contains objects that contains details about individual links 
  // that we are going to show to the user.
  // We are using this , because we do not want to write all of them one by one.
  const links = [
    { label: 'Dropdown', path: '/'},
    { label: 'Accordion', path: '/accordion'},
    { label: 'Buttons', path: '/buttons'},
    { label : 'Modal' , path: '/modal'},
    { label: 'Table', path: '/table' },
    { label: 'Count', path: '/counter'}
    

  ];

  const renderedLinks = links.map((link) => {
    return <Link key = {link.label} to= {link.path} className= 'mb-3' activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
