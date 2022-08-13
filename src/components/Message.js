import dateFormat from "dateformat";
import { faker } from '@faker-js/faker';

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

const Message = ({ time,
    img,
    user,
    message
}) => {
    return (
        <div className="justify-center align-middle m-2 p-2 w-full rounded flex font-sans hover:bg-gray-700 hover:bg-opacity-40 transition-all duration-200 delay-75 ease-linear ">
            <img src={img} alt='avatar' className='w-12 h-12 rounded-full m-2 hover:h-20 hover:w-20 hover:ml-0 cursor-pointer transition-all duration-100' />
            <div className="flex-auto te">
                <div className='flex flex-wrap'>
                    <div className='font-bold w-full' style={{ color: faker.internet.color(255, 20, 100) }}>
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

export default Message