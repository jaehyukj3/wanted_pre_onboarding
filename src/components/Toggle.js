import { useState } from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(true)

    const changeToggle = () => {
        setToggle(() => !toggle)
    }

    return (
        <div className="Toggle">
            <label
                onClick={changeToggle}
                className={"relative max-w-[400px] flex items-center w-[40vw] h-[50px] bg-gray-200 rounded-full justify-around"}>
                <span className={`z-10 ${toggle ? "opacity-100" : "opacity-50"}`}>기본</span>
                <span className={`z-10 ${!toggle ? "opacity-100" : "opacity-50"}`}>상세</span>
                <div className={`absolute ${toggle ? "left-0" : "left-1/2"} w-1/2 h-full bg-white rounded-full border-gray-200 border-2 transition-all`} />
            </label>
        </div>
    )
}

export default Toggle