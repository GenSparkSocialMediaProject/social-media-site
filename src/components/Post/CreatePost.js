import axios from "axios";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export const CreatePost = (props) => {

    const postMaxLength = 256;
    const [text, setText] = useState("");

    const updateCharCount = (event) => {
        setText(event.target.value);
    }
    
    const handleSubmit = () => {
        if(text.length < 1){
            return false;
        }
        console.log(text);
    }

    return (
    <Card style={{width: "26vw", padding: "20px", margin: "15px", flexDirection: "Column"}}>

        <h2 style={{margin:"auto"}}>Speak your mind!</h2>
        
        <div style={{background: "grey", margin: "2rem 0", opacity: 0.25,width: "100%", height: "2px"}}></div>

        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="newPost" class="form-label">Text</label>
                <textarea class="form-control" id="newPost" 
                    rows="6" 
                    maxlength={postMaxLength}
                    placeholder="Tell us what you're thinking.."
                    onChange={updateCharCount}></textarea>
            </div>
            <p id="charCount">{text.length}/{postMaxLength}</p>
            {/* <div class="mb-3">
                <label for="addImage" class="form-label">Attach image</label>
                <input class="form-control" type="file" id="addImage"/>
            </div> */}
            <div class="mb-3" style={{margin:"auto"}}>
                <button type="submit" class="btn btn-primary btn-sm">Submit</button>
            </div>
        </form>

    </Card>
    );
};
