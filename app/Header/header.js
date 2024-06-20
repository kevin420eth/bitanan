import Image from 'next/image'
import logo_image from '@/assets/logo_image.svg'
import './header.css'

export default function Header() {
  return (
    <header className="fixed w-full flex justify-around items-center bg-black py-2 z-10">
      <a href="" className='flex justify-around	items-center gap-2'>
        <Image src={logo_image} alt='logo_image' height={50} className='rounded-full' />
        <h1 className='text-4xl'>Bitanan</h1>
      </a>
      <nav>
        <ul className='flex justify-center items-center gap-4'>
          <li><a href="/" className='text-slate-200 hover:text-slate-300'>首頁</a></li>
          <li><a href="/trade" className='text-slate-200 hover:text-slate-300'>交易</a></li>
          <li><a href="/about" className='text-slate-200 hover:text-slate-300'>關於我們</a></li>
          <li><a href="/contact" className='text-slate-200 hover:text-slate-300'>聯繫我們</a></li>
        </ul>
      </nav>
      <div className='auth_contaienr flex justify-center items-center gap-4'>
        <a href="" className='bg-white hover:bg-[#e6b832] px-4 py-2 text-black font-semibold flex justify-center items-center rounded-md'>登入</a>
        <a href="" className='bg-white hover:bg-[#e6b832] px-4 py-2 text-black font-semibold flex justify-center items-center rounded-md'>註冊</a>
      </div>
    </header>
  )
}
