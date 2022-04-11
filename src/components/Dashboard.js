import image from '../resources/img.jpeg'
import dateFormat from "dateformat";
const now = new Date()

const formatDate = (date) => {
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

const secondsAgo = Date.parse(now) - 5000;
const minutesAgo = Date.parse(now) - 1600000;
const today = Date.parse(now) - 15000000;
const yesterday = new Date("April 9, 2022 13:24:00");
const lastWeek = new Date("April 7, 2022 05:12:00");
const lastMonth = new Date("March 23, 2022 16:43:00");
const yearsAgo = new Date("December 9, 1998 10:24:00");

const MessageBoard = ({text}) => {
    return(

            <div className="flex flex-col align-middle justify-between bg-gray-800 w-full h-screen shadow">
                <div className='flex flex-wrap m-2 overflow-auto scroll-auto'>
                    <Message time={yearsAgo} user="young_internet"/>
                    <Message time={lastMonth} user="kangaroo_jack21"/>
                    <Message time={lastWeek} user="stormyAccept1512"/>
                    <Message time={yesterday} user="CultureSn@il"/>
                    <Message time={today} user="random_guy53"/>
                    <Message time={minutesAgo} user="si11y_g00se"/>
                    <Message time={secondsAgo} user="fat_catzzz"/>
                </div>
                <div className='flex flex-wrap justify-center m-5 h-16'>
                    <TextBox/>
                </div>
            </div>

    )
}

const Message = ({   time = now,
                     img = image,
                     user = "username",
                     message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam id iste magnam, modi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam id iste magnam, modi odit quasi sunt unde veritatis voluptas."
}) => {
    return(
        <div className="justify-center align-middle m-2 p-2 rounded flex font-sans hover:bg-gray-700 hover:bg-opacity-40 transition-all duration-200 delay-75 ease-linear ">
            <img src={image} className='w-12 h-12 rounded-full m-2 hover:h-20 hover:w-20 hover:ml-0 cursor-pointer transition-all duration-100' />
            <div className="flex-auto">
                <div className='flex flex-wrap'>
                    <div className='text-purple-500 font-bold w-full'>
                        {user}
                    </div>
                    <div className='text-gray-500 text-sm '>
                        {formatDate(time)}
                    </div>
                    <div className='font-normal mr-24'>
                        {message}
                    </div>
                </div>

            </div>


        </div>
    )
}

const TextBox = () => {
    return(
        // <textarea type="textarea" className='break-words p-1 bg-gray-600 w-full h-fit focus: outline-none'/>

        <span
            className="bg-gray-700 text-gray-500 resize-y overflow-hidden w-full focus:text-gray-300 focus:outline-none
                       focus:content-['']"
            role="textbox"

            contentEditable>Send a message
        </span>


    )

}

export default Dashboard