"use client"
import { useState } from 'react'
import { TbArrowsDownUp } from "react-icons/tb";
import './page.css'

export default function Page() {
    const [buy, setBuyCondition] = useState(true)
    const [mainValue, setMainValue] = useState(NaN)
    const [receive, setReceive] = useState(NaN)
    const [payIsMain, setPayIsMain] = useState(true)

    function handlebuySwitch(condition){
        if(condition){
            setBuyCondition(true)
        }else{
            setBuyCondition(false)
        }
        
        setPayIsMain(true)
        setMainValue(NaN)
        setReceive(NaN)
    }

    function handleInputChange(mainValue) {
        if (buy){
            if(payIsMain){
                setReceive(mainValue / 32.33)
            }else{
                setReceive(mainValue * 32.33)
            }
        }else{
            if(payIsMain){
                setReceive(mainValue * 32.33)
            }else{
                setReceive(mainValue / 32.33)
            }
        }

        if (mainValue>1000000){
            setMainValue(1000000)
        }else{
            setMainValue(mainValue)
        }
    }

    function handleSwitch() {
        setPayIsMain(!payIsMain)
        setMainValue(NaN)
        setReceive(NaN)
    }

    return (
        <section className='h-screen flex flex-col justify-center items-center'>
            <h1 className='mb-8 text-3xl'>交易USDT</h1>
            <form action="" className="relative flex flex-col items-center border-2 border-white p-6 gap-3 rounded-md w-1/2">

                <div className='flex justify-around w-full mb-6'>
                    <h1 className={buy? "buy_button cursor-pointer text-3xl pb-2 border-b-4": "buy_button cursor-pointer text-3xl"} onClick={()=>handlebuySwitch(true)}>購買</h1>
                    <h1 className={buy? "buy_button cursor-pointer text-3xl": "buy_button cursor-pointer text-3xl pb-2 border-b-4"} onClick={()=>handlebuySwitch(false)}>販賣</h1>
                </div>

                <div className='relative pay_input_container flex flex-col border-2 border-gray-500 rounded-lg justify-center items-start px-4 py-2 gap-2'>
                    <label htmlFor="" className=''>{buy?(payIsMain ? "我要支付" : "我要購買"):(payIsMain ? "我要賣出" : "我將收到")}</label>
                    <input className="pay_input bg-transparent outline-none" type="number" id="pay" name="pay" placeholder="0" required value={mainValue} onChange={(e) => handleInputChange(e.target.value)} />
                    <p className="absolute right-2 bottom-3 text-xs">{buy?(payIsMain ? "TWD" : "USDT"):(payIsMain ? "USDT" : "TWD")}</p>
                </div>

                <div className='border-4 border-white bg-[#facd37] p-2 rounded-full cursor-pointer text-black text-4xl hover:bg-[#e6b832]' onClick={() => handleSwitch()}><i><TbArrowsDownUp /></i></div>

                <div className='relative pay_input_container flex flex-col border-2 border-gray-500 rounded-lg justify-center items-start px-4 py-2 gap-2'>
                    <label htmlFor="" className=''>{buy?(payIsMain ? "我要購買" : "我要支付"):(payIsMain ? "我將收到" : "我要賣出")}</label>
                    <input type="number" id="pay" name="pay" placeholder="0" required className="pay_input bg-transparent outline-none" value={receive} />
                    <p className="absolute right-2 bottom-3 text-xs">{buy?(payIsMain ? "USDT" : "TWD"):(payIsMain ? "TWD" : "USDT")}</p>
                </div>

                <a href="" className='text-center border-2 border-white self-center w-1/2 rounded-md p-4 mt-4 hover:bg-[#e6b832] hover:text-black'>送出訂單</a>
                {/* <input type="submit" value="Submit" className="border-2 border-white" /> */}
                <i className='absolute bottom-8 left-2 text-xs'>* 1 USDT = 32.33 TWD</i>
            </form>
        </section>
    )
}
