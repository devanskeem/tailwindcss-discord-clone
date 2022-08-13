import MessageBoard from "./MessageBoard";

//potentially get rid of MessageBoard component and only have Dashboard
const Dashboard = () => {
    return(
        <div className="flex-auto w-screen ml-16 h-screen text-white">
            <MessageBoard/>
        </div>
    )
}

export default Dashboard