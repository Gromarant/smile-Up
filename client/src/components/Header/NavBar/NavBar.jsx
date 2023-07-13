import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  

  const collapseItems = [
    {
      name: "Home",
      link: "/",
    }
  ];

  return (
    <>
      <Navbar className='navBar' isBordered>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
          <img className='navBar_logo' src='../../../../public/vite.svg' alt='Logo smile-Up' />
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Link className='navBar_link' to="/">Home</Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item) => (
              <Link to={item.link} key={item.name}>{item.name}</Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;