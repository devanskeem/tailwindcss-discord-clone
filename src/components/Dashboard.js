import image from '../resources/img.jpeg'

const Dashboard = () => {
    return(
        <div className="flex justify-end ml-16 w-screen h-screen bg-gray-700 text-white">
            <MessageBoard/>
        </div>
    )
}

const MessageBoard = ({text}) => {
    return(
            <div className="flex-auto  bg-gray-800 w-11/12 h-auto ml-5 shadow">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
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
        <div className="justify-center align-middle flex font-sans p-2">
            <img src={image} className='w-10 h-10 rounded-full m-2'/>
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

export default Dashboard