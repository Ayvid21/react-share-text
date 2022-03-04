// import React from 'react';
// import './index1.css';
// import './popup';

// export class Share_text extends React.Component {
//     render() {
//         function ReadyToWrite() {
//                         console.log('Link is generated!');
//                     }
        
//         function PopUp() {
//             return (
//                 <div>
//                     <div className="backgroundBox">
//                         <h1 className="text1">Your Link Is Generated!</h1>
//                         <form>
//                             <label className="link">Link:</label>
//                             <input type= "text"></input><br/><br/><br/>
//                             <label>Password:</label>
//                             <input type = "password"/> <br/>
//                         </form>
//                         <br/>
//                         <button className="btn-1" onClick={ReadyToWrite}>Copy Link</button>
//                     </div>
//                 </div>
//             );
//         }
//         return (
//             <>
//             <div>
//                 <h1 className="text">Write your Text and Share it!</h1>
//                 <div>
//                     <br />
//                     <label className="label1">Enter text : </label>
//                     <br />
//                     <textarea
//                         className="textAreaSize"
//                         placeholder="Describe yourself here..."
//                         autoFocus
//                         />
//                 </div>
//                 <div className="button1">
//                     <button className="btn1" name="login" type="submit" onClick={PopUp}>Share</button>
//                 </div>
//             </div>
//             </>
//         );
//     }
// }