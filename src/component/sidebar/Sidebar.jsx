import React,{useContext,useState} from 'react'
import './sidebar.css'
import { Context } from '../../context/Context'

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompt,setRecentPrompt,newChat} =  useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
       await onSent(prompt)

    }

    const extend = (e) =>{
        e.preventDefault()
        setExtended(prev => !prev)
    }


  return (
    <div className='sidebar'>
        <div className="top">
            <a href="" className="menu_link" >
            <i className='bx bx-menu' onClick={extend}></i></a>

            <div onClick={()=>newChat()} className="new_chats">
                <a href="" className='new_chats-link'>
                <i className='bx bx-plus'  ></i>
                </a>
                {extended?<p className="new_chats_add">New Chat</p>:null}
            </div>

            {extended ? <div className="recent">
                            <p className="recent_title">Recent</p>
                            {prevPrompt.map((item, index) => {
                            return (
                                <div onClick={()=>loadPrompt(item)} key={index} className="recent_chat_entry">
                                    <i className='bx bx-message'></i>
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            );
                        })}
                            
                        </div> : null
                        
                    
            }
            

        </div>

        <div className="bottom">

            <div className="bottom_items recent_chat_entry">
               <i className="uil uil-question-circle"></i>
               {extended ? <p>Help</p> : null }
            </div>

            <div className="bottom_items recent_chat_entry">
                <i className='bx bx-history'></i>
                {extended ? <p>Activity</p> : null } 
            </div>

            <div className="bottom_items recent_chat_entry">
            <i className="uil uil-setting"></i>
            {extended ? <p>Settings</p> : null } 
            </div>

        </div>
    </div>
  )
}

export default Sidebar
