import SideBar from
        "./components/SideBar"
import Dashboard from "./components/Dashboard"

export default function App() {
    return (
        <div className="flex">
                <SideBar></SideBar>
                <Dashboard></Dashboard>
        </div>
    )
}