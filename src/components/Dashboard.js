import image from '../resources/img.jpeg'
import dateFormat from "dateformat";
import { faker } from '@faker-js/faker';
import {useState} from "react";


const formatDate = (date) => {
    const now = new Date()
    //returns just now or the minutes since if date is less than an hour from now else Today @ h:MM TT
    if (dateFormat(date, "DDDD") === "Today") {
        const diff = dateFormat(now, "HMM") - dateFormat(date, "HMM");
        if (diff < 1) return 'Just now'
        if (diff < 40) return diff + " minutes ago"
        if (diff < 100) return diff - 40 + " minutes ago"
        else return dateFormat(date, "DDDD, h:MM TT")
    }

    //if within 4 days don't add number date or month
    const MILLI_IN_DAY = 86400000
    if (((Date.parse(now) - Date.parse(date)) / MILLI_IN_DAY) < 4){
        return dateFormat(date, "DDDD, h:MM TT")
    }

    //if same year don't add day or year
    if (dateFormat(date, 'yyyy') === dateFormat(now, 'yyyy')) return dateFormat(date, "mmmm dS, h:MM TT")

    //if different year / catch-all don't add day
    return dateFormat(date, "mmmm dS, yyyy, h:MM TT");
}


const Dashboard = () => {
    return(
        <div className="flex-auto w-screen ml-16 h-screen text-white">
            <MessageBoard/>
        </div>
    )
}


const MessageBoard = () => {
    const [messages, setMessages] = useState([]);
    const newMessage = (msg) => {
        setMessages(prev => [...prev, msg])
        console.log(messages)
    }
    const msgList = messages.map((text, index) =>
        <Message key={index} message={text}/>
    )

    return(

            <div className="flex flex-col align-middle justify-between bg-gray-800 w-full h-screen shadow">
                <div className='h-full scroll-auto overflow-auto'>
                    <div className='flex flex-wrap m-2 '>
                        {/*<Message/>*/}
                        {/*<Message/>*/}
                        {/*<Message/>*/}
                        {msgList}

                    </div>
                </div>
                <div className='flex flex-wrap justify-center m-5 h-16'>
                    <TextBox newMessage={newMessage}/>
                </div>
            </div>

    )
}

const Message = ({   time = faker.date.recent(),
                     img = faker.image.avatar(),
                     user = faker.internet.userName(),
                     message = faker.lorem.words(Math.random() * 50)
}) => {
    return(
        <div className="justify-center align-middle m-2 p-2 w-full rounded flex font-sans hover:bg-gray-700 hover:bg-opacity-40 transition-all duration-200 delay-75 ease-linear ">
            <img src={img} alt='avatar' className='w-12 h-12 rounded-full m-2 hover:h-20 hover:w-20 hover:ml-0 cursor-pointer transition-all duration-100' />
            <div className="flex-auto te">
                <div className='flex flex-wrap'>
                    <div className='font-bold w-full' style={{color: faker.internet.color(255, 20,100)}}>
                        {user}
                    </div>
                    <div className='text-gray-500 text-sm w-full '>
                        {formatDate(time)}
                    </div>
                    <div className='font-normal mr-24 width w-full'>
                        {message}
                    </div>
                </div>

            </div>


        </div>
    )
}

const TextBox = ({newMessage}) => {
    const [content, setContent] = useState();
    const [submit, setSubmit] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        setContent('')
        if (submit) newMessage(content)
        setSubmit(false)

    }
    const handleChange = e => {
        setContent(e.target.value)
        if (content === '') setSubmit(false)
        else setSubmit(true)
    }

    return(
        <form onSubmit={handleSubmit}
              className=" bg-gray-700 text-gray-500 w-full flex justify-between align-middle
                           focus:text-gray-100 border-solid border-white border-0 focus:outline-none focus:border-[1px]
                           max-h-full resize-none overflow-auto">
            <textarea className='bg-gray-700 outline-none resize-none overflow-auto w-full focus:text-gray-100'
                value={content}
                onChange={handleChange}
                placeholder="Send a message"
            >
            </textarea>

            <button type="submit" className={submit ? 'cursor-pointer font-bold p-2 text-blue-400 bg-gray-600 hover:bg-blue-400 hover:text-gray-700 transition-all active:bg-blue-500' : 'pointer-events-none p-2 font-bold'}>
                Send
                </button>
        </form>


    )

}

export default Dashboard