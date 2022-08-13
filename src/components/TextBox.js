import {useState} from "react";
import { faker } from '@faker-js/faker';


const TextBox = ({newMessage}) => {
    const [content, setContent] = useState();
    const [submit, setSubmit] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        setContent('')
        if (submit) newMessage({text: content,
                                time: new Date(),
                                img: faker.image.avatar(),
                                user: faker.internet.userName()})
        setSubmit(false)

    }
    const handleChange = e => {
        setContent(e.target.value)
        if (content === '') setSubmit(false)
        else setSubmit(true)
    }

    return(
        <form onSubmit={handleSubmit}
              className=" bg-gray-600 text-gray-500 w-full flex justify-between align-middle
                           focus:text-gray-100 border-solid border-white border-0 focus:outline-none focus:border-[1px]
                           max-h-full resize-none overflow-auto">
            <textarea className='bg-gray-600 outline-none resize-none overflow-auto w-full focus:text-gray-100'
                value={content}
                onChange={handleChange}
                placeholder=" Send a message"
            >
            </textarea>
            <button type="submit" className={submit ? 'cursor-pointer font-bold p-2 text-blue-400 bg-gray-500 hover:bg-blue-400 hover:text-gray-700 transition-all active:bg-blue-500' : 'pointer-events-none p-2 font-bold'}>
                Send
            </button>

        </form>


    )

}

export default TextBox