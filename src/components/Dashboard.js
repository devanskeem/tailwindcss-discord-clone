import image from '../resources/img.jpeg'
import dateFormat from "dateformat";
const now = new Date()
const lastYear = "2021-12-31T01:53:25.739Z";
const yesterday = "2022-04-10T03:41:25.739Z";
const lastWeek = "2022-04-08T02:51:25.739Z";
const aMinuteAgo = "2022-04-11T03:42:29.537Z";
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
    if (dateFormat(date, 'yyyy') === dateFormat(now, 'yyyy')) return dateFormat(date, "DDDD, mmmm dS, h:MM TT")

    //if different year don't add day
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
    return(

            <div className="flex flex-col align-middle justify-between bg-gray-800 w-full h-screen shadow">
                <div className='flex flex-wrap m-2'>
                    <Message time={lastYear} user="young_internet"/>
                    <Message time={lastWeek} user="kangaroo_jack21"/>
                    <Message time={yesterday} user="stormyAccept1512"/>
                    <Message time={aMinuteAgo} user="CultureSn@il"/>
                    <Message time={now} user="random_guy"/>
                </div>
                <div className='flex flex-wrap justify-center m-5'>
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
        <div className="justify-center align-middle m-1 p-2 rounded flex font-sans hover:bg-gray-700 transition-all duration-300 ease-linear ">
            <img src={image} className='w-12 h-12 rounded-full m-2 hover:h-20 hover:w-20 hover:ml-0 cursor-pointer transition-all duration-100' />
            <div className="flex-auto">
                <div className='flex flex-wrap'>
                    <div className='text-purple-500 font-bold w-full'>
                        {user}
                    </div>
                    <div className='text-gray-500 text-sm '>
                        {formatDate(time)}
                    </div>
                    <div className='font-normal'>
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