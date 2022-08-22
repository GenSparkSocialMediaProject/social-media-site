
import * as r from "react-bootstrap"
import { AccountTab } from "./AccountTab"
import { useNavigate } from "react-router-dom";
import Logo from "./SpeakrSimplfiied"


export const Navbar = (props) => {
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    navigate(event.target.name);
  }

  return (
    <r.Navbar variant="dark" style={{ maxHeight: "100px" }} bg="dark" fixed="top">
      <r.Container>
        <r.Navbar.Brand name="/" href="#">
          <Logo style={{width: "128px", height: "128px", marginTop: "20%"}}/>
          Speakr!
        </r.Navbar.Brand>
        <r.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <r.Navbar.Collapse id="basic-navbar-nav">
          <r.Nav style={{
            justifyContent: 'right',
            flexGrow: 1
          }} className="me-auto">
            <r.Nav.Link onClick={handleClick} href="" name="/">Home</r.Nav.Link>
            <r.Nav.Link onClick={handleClick} href="" name="/about">About</r.Nav.Link>
            <AccountTab handleClick={handleClick} />
          </r.Nav>
        </r.Navbar.Collapse>
      </r.Container>
    </r.Navbar>)
}


