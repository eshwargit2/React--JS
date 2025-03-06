import React, { useRef, useState } from 'react'
import './Chat1.css'
import img1 from './imgs/tim.jpg'
import Pin from './Pinicon'
import Leftarrow  from './Leftarrow'
import Call from './Callicon'
import Dot from './doticon'
import Emoji from './Emoji'
import Link from './Link'
import Send from './Send'


const Chat4 = () => {
     
    const contact = () =>{
        let navbar = document.getElementById('navbar')
        let chat1 = document.getElementById('chat1')
        let chat2 = document.getElementById('chat2')
        let chat3 = document.getElementById('chat3')
        let chat5 = document.getElementById('chat5')
        let chat6 = document.getElementById('chat6')
        let chat7 = document.getElementById('chat7')
        let chat8 = document.getElementById('chat8')
        let chat9 = document.getElementById('chat9')
    
        setchat('chat_con')//usestate parameter
         if(navbar && chat1){
           navbar.style.display="none";
           chat1.style.display="none";
            chat2.style.display="none"
            chat3.style.display="none"
             chat5.style.display="none"
              chat6.style.display="none"
               chat7.style.display="none"
                chat8.style.display="none"
                chat9.style.display="none"
        //    chat1.style.display="none"
           
         }
     }
     
     
       const view_ca =()=>{
        let navbar = document.getElementById('navbar')
        let chat1 = document.getElementById('chat1')
        let chat2 = document.getElementById('chat2')
        let chat3 = document.getElementById('chat3')
        let chat5 = document.getElementById('chat5')
        let chat6 = document.getElementById('chat6')
        let chat7 = document.getElementById('chat7')
        let chat8 = document.getElementById('chat8')
        let chat9 = document.getElementById('chat9')
    
         setchat('home_con');//usestate parameter
        
         if(navbar && chat1){
           navbar.style.display="block"
           chat1.style.display="block"
            chat2.style.display="block"
              chat3.style.display="block"
              chat5.style.display="block"
               chat6.style.display="block"
                chat7.style.display="block"
                 chat8.style.display="block"
                 chat9.style.display="block"

         }
       }
      
     
       const [chat ,setchat]=useState('home_con');
     
       return (
         <div>
            {chat ==='home_con' && (
             <div className="container" id='chat4'>
                 <div className="row">
     
                     <div className="col-12">
                       <div className="container chat  mt-2 " onClick={contact} id='chat-view' >
                             <div className="col-2 dp1 m-3">
                                 <img src={img1} alt="..." className='img1 mt-1' />
                             </div>
                             <div className="col-7 ms-2 ">
                                 <h2>Tim Cook</h2>
                                   <p>docs.pdf</p>
                             </div>
                             <div className="col-1 mt-4 ms-auto">
                                 <div className="date-pin">
                                        
                                          <p className='mb-5' >5.09</p>
                                 </div>            
                             </div>                   
                       </div>
                     </div>
                     <hr className='mt-2' />
     
                 </div>
             </div>
           )} 
           {chat ==='chat_con' && (
                   <div className='chat-msg-container'>
                   
                     <div className="container   ">
                       <div className="row">
                         <div className="col-2 text-center">
                         
                         <button className='btn' onClick={view_ca} ><Leftarrow/></button>
                         </div>
                         <div className="col-1  ">
                              <img src={img1} alt="...." className='img1 mt-1 ' width={20}  />
                              
                         </div>
                         <div className="col-7 text-white text-center"><h4 className='mt-3'>Tim Cook</h4></div>
                         <div className="col-1 mt-1  ">
                               <Call/>
                         </div>
                         <div className="col-1 ms-auto mt-1 ">
                              <Dot/>
                         </div>
                       </div>
                     </div>
     
                     <div className="container msg-container">
                       <div className="row">
                         <div className="col-12">
     
                         </div>
                       </div>
                     </div>
                    
                    <div className="container input-section">
                     <div className="row">
                       <div className="col-1"><Emoji/></div>
                       <div className="col-6 ms-2">
                         <input type="text" placeholder='Message' />
                       </div>
                       <div className="col-1"><Link/></div>
                        <div className="col-2 ms-auto"><Send/></div>
                     </div>
                    </div>
     
                     
                      </div>
           )}
         </div>
     
       
       )
}

export default Chat4