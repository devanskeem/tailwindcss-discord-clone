import {useState} from "react";
import TextBox  from './TextBox';
import Message from './Message';


const MessageBoard = () => {
    const [messages, setMessages] = useState([]);
    const newMessage = (msg) => {
        setMessages(prev => [...prev, msg])
        console.log(messages)
    }
    const msgList = messages.map((msg, index) =>
        <Message key={index} message={msg.text} time={msg.time} img={msg.img} user={msg.user}/>
    )

    return(

            <div className="flex flex-col align-middle justify-between bg-gray-800 w-full h-screen shadow">
                <div className='h-full scroll-auto overflow-auto'>
                    <div className='flex flex-wrap m-2 '>              
                        {msgList}
                    </div>
                </div>
                <div className='flex flex-wrap justify-center m-5 h-16'>
                    <TextBox newMessage={newMessage}/>
                </div>
            </div>

    )
}

export default MessageBoard