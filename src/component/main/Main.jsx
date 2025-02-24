import React, { useContext,useState } from 'react'
import 'regenerator-runtime/runtime';
import './main.css'
// import profile from '../../../public/profile_img.WEBP'
import Icon from '../../assets/icon.png'
import { Context } from '../../context/Context'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'




const Main = () => {

  
  
    const [isListening, setIsListening] = useState(false); // State to track listening status
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  
    // Start listening
    const startListening = () => {
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true); // Set listening state to true
    };
  
    // Stop listening
    const stopListening = () => {
      SpeechRecognition.stopListening();
      setIsListening(false); // Set listening state to false
    };
   
     if (!browserSupportsSpeechRecognition) {
       return null
     }

//        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     console.log("Microphone access is supported.");
//     navigator.mediaDevices.getUserMedia({ audio: true })
//         .then(stream => {
//             console.log("Microphone access granted.");
//             stream.getTracks().forEach(track => track.stop()); // Stop the stream
//         })
//         .catch(error => {
//             console.log("Microphone access denied:", error);
//         });
// } else {
//     console.log("Microphone access is not supported in this browser.");
//  }

  

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  const handleKeyDown = (e) =>{
    if (e.key === "Enter") {
      onSent()
      
    }
  }
  return (
    <div className='main'>

           {/* ======= Navbar start ========= */}
           <div className="nav">
                <p className="nav_text">Chat ai</p>

                <div className="side_nav_content">
                <i className="uil uil-apps"></i>
                <img src="/profile_img.webp" alt="" className='nav_img' />
                </div>
           </div>
          {/* ======= Navbar end ========= */}

          {/* =========  main start =========== */}
           <div className="main_container">

            {!showResult  ? 
                            <div className="greet">
                               <p className="greet_text"> Hello, I'm ChatAi</p>
                            </div> 
           
                          :  
                              <div className='result'>
                                <div className="result_title">
                                  <img src="/profile_img.webp" alt="" />
                                  <p>{recentPrompt}</p>
                                </div>

                                <div className="result_data">
                                  { <img src={Icon} alt="" /> }
                                  {loading ? <div className='loader'>
                                                <hr />
                                                <hr />
                                                <hr />

                                             </div>
                                           :
                                           <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                                  }
                                 
                                </div>
                              </div>
                               
                             
                            
                            
            }
                


                <div className="main_bottom">

                    <div className="search_box">
                        
                        <div className='left_side'>
                            {/* <i className='bx bx-plus plus_icon' ></i> */}
                            <input onKeyDown={handleKeyDown} onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask ChatAi' /> 
                            {transcript}

                        </div>

                        <div className='right_side'>
                        {input ? <i onClick={()=>onSent()} className='bx bx-send' ></i>
                        :
                        <>
                           {isListening ? (
                                  
                                    <i className='bx bx-stop-circle' onClick={stopListening} style={{cursor:'pointer'}}></i> 
                                  
                                ) : (
                                  
                                    <i className='bx bx-microphone' onClick={startListening} style={{cursor:'pointer'}}></i>
                                  
                            )}
                           
                        </>}
                               
 

                        </div>

                        
                       
                    </div>
                </div>
            </div>
          {/* =========  main end =========== */}
      
    </div>
  )
}

export default Main
