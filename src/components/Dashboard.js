import image from '../resources/img.jpeg'

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
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className='flex flex-wrap justify-center m-5'>
                    <TextBox/>
                </div>
            </div>

    )
}

const date = new Date();
const now = date.toLocaleString()

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
                        {time}
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