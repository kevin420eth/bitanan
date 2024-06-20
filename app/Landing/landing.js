import './landing.css'
import { SiTether } from "react-icons/si";

export default function Landing() {
    return (
        <section className="landing_section h-screen flex justify-start items-center ">
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-5xl leading-relaxed">台灣<br />最安全的<br />泰達幣 USDT<span className='inline text-green-500'><SiTether  className='inline'/></span><br/>交易平台</h1>
                <p className='mb-8'>即時入帳 完整KYC</p>
                <a href="/trade" className='text-black font-semibold bg-[#facd37] hover:bg-[#e6b832] flex justify-center items-center rounded-md py-4 px-8'>開始使用</a>
            </div>
        </section>
    )
}
