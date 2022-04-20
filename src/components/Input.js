import React, { useState } from 'react';
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { AiFillCheckCircle } from "react-icons/ai";

const Input = () => {

    const [validEmail, setValidEmail] = useState(false);

    const [passwordType, setPasswordType] = useState({
        type: 'password',
        visible: false
    });

    const isValidEmail = (e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if (!emailRegex.test(e.target.value)) {
            setValidEmail(() => false)
        } else {
            setValidEmail(() => true)
        }
    }
    const changePasswordType = () => {
        if (!passwordType.visible) {
            setPasswordType({ type: 'text', visible: true })
        } else {
            setPasswordType({ type: 'password', visible: false })
        }
    }
    return (
        <dib className='input flex-row space-y-8'>
            <div className='email'>
                <span className='text-sm py-2 pl-2 pr-3'>E-mail</span>
                <div className='relative'>
                    <input type='email' onChange={isValidEmail} className='block bg-white w-[30vw] h-full border border-slate-100 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1' placeholder='E-mail'></input>
                    <span className='absolute right-2 bottom-1/2 translate-y-1/2'>
                        <AiFillCheckCircle size="23" color={validEmail ? "#14b8a6" : "#000000"} className="transition-colors" />
                    </span>
                </div>
            </div>
            <div className='password'>
                <span className='text-sm py-2 pl-2 pr-3'>Password</span>
                <div className='relative'>
                    <input type={passwordType.type} className='block bg-white w-[30vw] h-full border border-slate-100 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1' placeholder='Password'></input>
                    <span onClick={changePasswordType} className='absolute right-2 bottom-1/2 translate-y-1/2 transition-colors'>
                        {passwordType.visible ? <ImEye size="23" color="#14b8a6" /> : <ImEyeBlocked size="23" />}
                    </span>
                </div>
            </div>

        </dib>
    )
}

export default Input