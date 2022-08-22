import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


export const Register = (props) => {

    const navigate = useNavigate()

    const handleClick = (event) => {
        navigate(event.target.name);
      }

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const passwordConfirm = event.target.passwordConfirm.value;

        document.getElementById("emailFeedback").innerText = "";
        document.getElementById("passwordFeedback").innerText = "";
        document.getElementById("passwordConfirmFeedback").innerText = "";

        if(!validateEmail(email)){
            console.log("Bad email");
            document.getElementById("emailFeedback").innerText = "Please enter a valid email.";
            return;
        }

        if(password.length < 8){
            console.log("Bad password length");
            document.getElementById("passwordFeedback").innerText = "Password must be greater than 8 characters.";
            return;
        }

        if(password != passwordConfirm){
            console.log("Bad password match");
            document.getElementById("passwordConfirmFeedback").innerText = "Password must be the same.";
            return;
        }

        console.log("We good");
        document.getElementById("registerForm").reset();
        navigate("/login");
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    return (
    <Card style={{ margin: "3vh 0", minWidth: "50%", maxWidth: "80%", alignSelf: "center" }}>
        


        
        <Form id="registerForm" style={{ fontSize: "1rem", padding: "2vw", alignSelf: "center" }}
            onSubmit={handleSubmit}>

            <h1>Register</h1>
            
            <div style={{background: "grey", margin: "1rem 0", opacity: 0.25,width: "100%", height: "2px"}}></div>
            
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control style={{ fontSize: "1rem" }} name="email" type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                <br/>
                <Form.Text id="emailFeedback" style={{color:"red"}}></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control style={{ fontSize: "1rem" }} name="password" type="password" placeholder="Password"/>
                <Form.Text id="passwordFeedback" style={{color:"red"}}></Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control style={{ fontSize: "1rem" }} name="passwordConfirm" type="password" placeholder="Password"/>
                <Form.Text id="passwordConfirmFeedback" style={{color:"red"}}></Form.Text>
            </Form.Group>
            
            <ButtonGroup style={{ display: "flex" }}>
                <Button size="lg" variant="primary" style={{ fontSize: "1rem" }} type="submit">
                    Register
                </Button>
                <Button size="lg" style={{ fontSize: "1rem" }} variant="outline-primary" name="/login" onClick={handleClick}>
                    Login
                </Button>
            </ButtonGroup>
        </Form>
    </Card>
    )
}