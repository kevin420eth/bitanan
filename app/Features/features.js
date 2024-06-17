import Image from "next/image"
import pass from '@/assets/pass.png'
import crypto from '@/assets/crypto.png'
import { FaArrowRight } from "react-icons/fa";

export default function Features() {
    return (
        <>
            <section class='min-h-screen flex justify-around items-center'>
                <div class='w-2/4 flex flex-col justify-start items-start'>
                    <h1 class='text-3xl mb-8'>金管會認證</h1>
                    <p class='mb-8'>我們是通過金管會認證的交易商，致力於提供安全、透明且高效的交易環境。我們的專業團隊具備豐富的金融知識和經驗，能夠為客戶提供最佳的投資建議和服務。無論您是新手還是有經驗的投資者，我們都能滿足您的需求，幫助您實現財務目標。透過我們的平臺，您可以放心地進行各種金融交易，因為我們始終將客戶的利益放在首位，並嚴格遵守相關法規和標準。加入我們，開啟您的智慧投資之旅。</p>
                    <a href="https://www.fsc.gov.tw/ch/index.jsp" target="_blank" class='text-black font-semibold bg-[#facd37] hover:bg-[#e6b832] flex justify-center items-center rounded-md py-4 px-8'>前往金管會<span><FaArrowRight /></span></a>
                </div>
                <Image src={pass} alt='pass' width={300} class='rounded-full' />
            </section>
            <section class='min-h-screen flex justify-around items-center'>
                <Image src={crypto} alt='pass' width={300} class='rounded-full' />
                <div class='w-2/4'>
                    <h1 class='text-3xl mb-8 '>多元交易渠道</h1>
                    <p>我們提供各種交易渠道，讓您能夠靈活地選擇最適合自己的投資方式。無論是線上交易平台、移動應用程式，還是電話交易服務，我們都能滿足您的需求。我們的線上交易平台功能強大、操作簡便，讓您能夠隨時隨地掌握市場動態，快速進行交易。移動應用程式則讓您在移動中也能輕鬆管理投資組合。對於偏好傳統方式的投資者，我們的電話交易服務提供專業的客服團隊，隨時為您解答疑問並協助完成交易。無論您身處何地，我們都致力於為您提供便捷、高效的交易體驗。</p>
                </div>
            </section>
        </>
    )
}
