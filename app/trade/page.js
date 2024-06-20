"use client"
import { useState } from 'react'
import { TbArrowsDownUp } from "react-icons/tb";
import './page.css'

export default function Page() {
    const [receive, setReceive] = useState(0)
    const [payIsMain, setPayIsMain] = useState(true)


    return (
        <section className='h-screen flex flex-col justify-center items-center'>
            <h1 className='mb-8 text-3xl'>交易USDT</h1>
            <form action="" className="flex flex-col items-center border-2 border-white p-6 gap-3 rounded-md w-1/2">

                <div className='flex justify-around w-full mb-6'>
                    <h1>購買</h1>
                    <h1>販賣</h1>
                </div>

                <div className='pay_input_container flex flex-col border-2 border-gray-500 rounded-lg justify-center items-start px-4 py-2 gap-2'>
                    <label htmlFor="" className=''>{payIsMain ? "我要支付" : "我將收到"}</label>
                    <input className="pay_input bg-transparent outline-none" type="number" id="pay" name="pay" placeholder={0} required onChange={(e) => setReceive(e.target.value * 10)} />
                </div>

                <div className='border-4 border-white bg-[#facd37] p-2 rounded-full cursor-pointer text-black text-4xl hover:bg-[#e6b832]' onClick={()=>setPayIsMain(!payIsMain)}><i><TbArrowsDownUp /></i></div>

                <div className='pay_input_container flex flex-col border-2 border-gray-500 rounded-lg justify-center items-start px-4 py-2 gap-2'>
                    <label htmlFor="" className=''>{payIsMain ? "我將收到" : "我要支付"}</label>
                    <input type="number" id="pay" name="pay" placeholder={0} required className="pay_input bg-transparent outline-none" value={receive} />
                </div>

                <a href="" className='text-center border-2 border-white self-center w-1/2 rounded-md p-4 mt-4 hover:bg-[#e6b832] hover:text-black'>送出訂單</a>
                {/* <input type="submit" value="Submit" className="border-2 border-white" /> */}
            </form>
        </section>
    )
}
