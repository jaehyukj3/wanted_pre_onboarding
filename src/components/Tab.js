import { useState } from "react";

const tabs = ["감자", "고구마", "카레라이스"]

const Tab = () => {
    const [tab, setTab] = useState(0);

    const changeTab = (index) => {
        setTab(() => index)
    }

    return (
        <div className="Tab relative max-w-[600px] flex">
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
            <div style={{ width: `${20 * tabs.length}vw` }} className="absolute h-1 max-w-[600px] top-full bg-gray-200">
                <div style={{ left: `${100 * tab / tabs.length}%`, width: `${100 * 1 / tabs.length}%` }} className={
                    "absolute h-1 bg-teal-500 rounded-full transition-all"
                } />
            </div>
        </div>
    )
}

export default Tab