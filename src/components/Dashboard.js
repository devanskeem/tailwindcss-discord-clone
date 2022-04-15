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


const MessageBoard = ({text}) => {
    const [messages, updateMessages] = useState([]);
    const newMessage = (msg) => {
        updateMessages(arr => [[...arr, msg]])
    }

    return(

            <div className="flex flex-col align-middle justify-between bg-gray-800 w-full h-screen shadow">
                <div className='flex flex-wrap m-2 overflow-auto scroll-auto h-auto >
                    <Message/>
                    <Message/>
                    <Message/>
                    {messages.map(({ msg, img, user, time, id }) => (
                        <Message key={id} msg={msg} img={img} user = {user}/>
                    ))}
                </div>
                <div className='flex flex-wrap justify-center m-5 h-16'>
                    <TextBox/>
                </div>
            </div>

    )
}

const Message = ({   time = faker.date.recent(),
                     img = faker.image.avatar(),
                     user = faker.internet.userName(),
                     message = faker.lorem.words(Math.random() * 40)
}) => {
    return(
        <div className="justify-center align-middle m-2 p-2 rounded flex font-sans hover:bg-gray-700 hover:bg-opacity-40 transition-all duration-200 delay-75 ease-linear ">
            <img src={img} alt='avatar' className='w-12 h-12 rounded-full m-2 hover:h-20 hover:w-20 hover:ml-0 cursor-pointer transition-all duration-100' />
            <div className="flex-auto">
                <div className='flex flex-wrap'>
                    <div className='text-purple-500 font-bold w-full'>
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

const TextBox = () => {
    const [content, setContent] = useState('');
    const onClick = () => {
        setContent('')
    }

    return(
        // <textarea type="textarea" className='break-words p-1 bg-gray-600 w-full h-fit focus: outline-none'/>

        <span
            className="bg-gray-700 text-gray-500 resize-y overflow-hidden w-full focus:text-gray-300 outline-[1em] focus:outline-gray-50
                       focus:before:"
            role="textbox"
            contentEditable>{content == ''? 'SEND A MESSAGE' : content
            }
        </span>


    )

}

export default Dashboard