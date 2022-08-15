import { Button, ButtonGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Img from "./128x128.png";

export const Post = (props) => {
    let { username, name, timestamp, upvotes, downvotes, content } = props;
    // username = "LexiHensonDev";
    // name = "Lexi";
    // timestamp = "08-23-2022";
    // upvotes = "255k"
    // downvotes = "-10"
    // content = "Cillum eu sint sint adipisicing cillum incididunt voluptate culpa excepteur excepteur pariatur ut mollit. Voluptate et dolore ut laboris dolor sint sint dolore excepteur commodo deserunt aute qui do. Exercitation fugiat enim cupidatat adipisicing quis minim. Non incididunt irure nulla reprehenderit. Ad adipisicing excepteur et incididunt occaecat dolor dolore elit reprehenderit sunt cupidatat."

    return (
        <Card
            style={{
                width: "65vw",
                padding: "20px",
                alignSelf: "flex-end",
                display: "flex",
                margin: "15px",
                flexDirection: "Column",
            }}
        >
            <span style={{ whiteSpace: "nowrap" }}>
                <img
                    alt="profilePicture"
                    style={{
                        height: "128px",
                        width: "128px",
                        margin: "20px",
                        borderRadius: "50%",
                    }}
                    src={Img}
                />
                <b>
                    <a href="##" name={`/user/${username}`}>
                        @{username}
                    </a>
                </b>{" "}
                - <i>{name}</i>
            </span>
            <span>{content}</span>
            <ButtonGroup style={{ width: "80px" }}>
                <Button
                    style={{ fontSize: "2rem", minWidth: "8rem" }}
                    variant="outline-success"
                >
                    ↑ {upvotes}
                </Button>
                <Button
                    style={{ fontSize: "2rem", minWidth: "8rem" }}
                    variant="outline-danger"
                >
                    ↓ {downvotes}
                </Button>
            </ButtonGroup>
            <span style={{ alignSelf: "flex-end" }}>{timestamp}</span>
        </Card>
    );
};
