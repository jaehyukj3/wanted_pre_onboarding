import { useState } from "react";

const tabs = ["감자", "고구마", "카레라이스"]

const Tab = () => {
    const [tab, setTab] = useState(0);

    const changeTab = (index) => {
        setTab(() => index)
    }

    return (
        <div className="Tab relative flex">
            {tabs.map((tabName, index) => (
                <>
                    <div onClick={() => changeTab(index)}
                        className={tab === index
                            ? "flex items-center w-[20vw] h-[40px] bg-white justify-around opacity-100"
                            : "flex items-center w-[20vw] h-[40px] bg-white justify-around opacity-50"
                        }>
                        <span>{tabName}</span>
                    </div>
                </>))}
            <div className="absolute w-[60vw] h-1 top-full bg-gray-200">
                <div className={
                    `absolute ${tab === 0 ? "left-0" : (tab === 1 ? "left-1/3" : "left-2/3")} w-1/3 h-1 bg-teal-500 rounded-full transition-all`
                } />
            </div>
        </div>
    )
}

export default Tab