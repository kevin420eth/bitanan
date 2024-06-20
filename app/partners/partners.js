import Image from "next/image"
import binance_logo from '@/assets/binance_logo.svg'
import okx_logo from '@/assets/okx_logo.png'
import coinbase_logo from '@/assets/coinbase_logo.svg'
import bito_logo from '@/assets/bito_logo.svg'
import ace_logo from '@/assets/ace_logo.png'

export default function Partners() {
    return (
        <section className='flex flex-col justify-center items-center py-8 bg-blue-950'>
            <h1 className='text-3xl mb-8'>合作夥伴</h1>
            <div className='flex justify-center items-center gap-6'>
                <a href="https://www.okx.com/" target="_blank"><Image src={okx_logo} alt='binance_logo' width={120} /></a>
                <a href="https://binance.com/" target="_blank"><Image src={binance_logo} alt='binance_logo' width={80} /></a>
                <a href="https://coinbase.com/" target="_blank"><Image src={coinbase_logo} alt='binance_logo' width={150} /></a>
                <a href="https://ace.io/" target="_blank"><Image src={ace_logo} alt='binance_logo' width={150} /></a>
                <a href="https://www.bitopro.com/ns/home" target="_blank"><Image src={bito_logo} alt='binance_logo' width={170} /></a>
            </div>
        </section>
    )
}
