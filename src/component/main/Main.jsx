import React, { useContext,useEffect } from 'react'
import './main.css'
import profile from '../../../public/profile_img.WEBP'
import Icon from '../../assets/icon.png'
import { Context } from '../../context/Context'




const Main = () => {

  

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
                <img src={profile} alt="" className='nav_img' />
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
                                  <img src={profile} alt="" />
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

                        </div>

                        <div className='right_side'>
                        {input ? <i onClick={()=>onSent()} className='bx bx-send' ></i>
                        :
                        <>
                           {/* <i className="uil uil-image-plus image_icon"></i> */}
                           <i  className='bx bx-microphone' ></i>
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
