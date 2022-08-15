
import * as r from "react-bootstrap"

export const AccountTab = (props) => {
    return (

        <r.Nav className="justify-content-end">
            <r.NavDropdown className="align-right" title="Account" id="basic-nav-dropdown">
                <r.NavDropdown.Item onClick={props.handleClick} href="#" name="/login" >Login</r.NavDropdown.Item>
                <r.NavDropdown.Item onClick={props.handleClick} href="#" name="/register" >
                    Register
                </r.NavDropdown.Item>
                <r.NavDropdown.Divider />
                <r.NavDropdown.Item onClick={props.handleClick} href="#" >
                    Account
                </r.NavDropdown.Item>
            </r.NavDropdown>
        </r.Nav>
    )
}