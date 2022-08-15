import { useParams } from "react-router-dom"

export const User = (props) => {
    const {username} = useParams();
    console.log(username);
}