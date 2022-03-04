import React, { Component } from 'react';
import './index1.css';

class PopUp extends React.Component {
    render() {
        // function CheckPassword() {
        //    if this.Password === "Ogil@7190";
        //    alert('You are done') ;
        // }
        function ReadyToWrite() {
            console.log('Link is generated!');
        }
        return(
            <div>
                <div className="bagroundBox">
                <h1 className="text1">Your link is generated!</h1>
                <form>
                    <label className="link">Link:</label>
                    <input type="text"></input><br/><br/>
                    <label>Password:</label>
                    <input type="password"/> <br/>
                </form>
                <br/>
                <button className="btn-1" onClick={ReadyToWrite}>Copy Link</button>
            </div> 
            </div>
        );
    }
}
 
export default PopUp;