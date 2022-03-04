import React, { Component } from 'react';
import './index1.css';
import './popup.jsx';

class Counter extends React.Component {
    state = {
        text : "",
    }

    render() { 
        function ReadyToWrite() {
            console.log('Link is generated!');
        }
        return( 
            <div>
                <h1 className="text">Write your Text and Share it!</h1>
                <span><textarea className="textAreaSize" placeholder='Write here!'></textarea></span>
                <br/>
                <button className="btn-1" onClick={ReadyToWrite}>Share</button>
            </div>
        );
    }
}
 
export default Counter;








// function PopUp() {
//         <div>
//             <div className="backgroundBox">
//                 <h1 className="text1">Your Link Is Generated!</h1>
//                 <form>
//                     <label className="link">Link:</label>
//                     <input type= "text"></input><br/><br/><br/>
//                     <label>Password:</label>
//                     <input type = "password"/> <br/>
//                 </form>
//                 <br/>
//                 <button className="btn-1" onClick={ReadyToWrite}>Copy Link</button>
//             </div>
//         </div>
// }



// formatChange() {
//     const { text } = this.state;
//    return text === "" ? " Describe yourself here." : text;
    // }