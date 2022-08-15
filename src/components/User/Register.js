import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export const Register = (props) => {
    return <Card style={{ margin: "3vh 0", minWidth: "50%", maxWidth: "80%", alignSelf: "center" }}>
        <Form style={{ fontSize: "2rem", padding: "2vw", alignSelf: "center" }}>
            <h1>Register</h1>
            <div style={{background: "grey", margin: "2rem 0", opacity: 0.25,width: "100%", height: "2px"}}></div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control style={{ fontSize: "2rem" }} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control style={{ fontSize: "2rem" }} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control style={{ fontSize: "2rem" }} type="password" placeholder="Password" />
            </Form.Group>
            
            <ButtonGroup style={{ display: "flex" }}>
                <Button size="lg" variant="primary" style={{ fontSize: "2.5rem" }} type="submit">
                    Register
                </Button>
                <Button size="lg" style={{ fontSize: "2.5rem" }} variant="outline-primary" type="submit">
                    Login
                </Button>
            </ButtonGroup>
        </Form>
    </Card>
}