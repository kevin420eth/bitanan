import Image from 'next/image'
import logo_image from '@/assets/logo_image.svg'
import './header.css'

export default function Header() {
  return (
    <header class="fixed w-full flex justify-around items-center bg-black py-2">
      <a href="" class='flex justify-around	items-center gap-2'>
        <Image src={logo_image} alt='logo_image' height={50} class='rounded-full'/>
        <h1 class='text-4xl'>Bitanan</h1>
      </a>
      <nav>
        <ul class='flex justify-center items-center gap-4'>
          <li><a href="/" class='text-slate-200 hover:text-slate-300'>首頁</a></li>
          <li><a href="/trade" class='text-slate-200 hover:text-slate-300'>交易</a></li>
          <li><a href="/about" class='text-slate-200 hover:text-slate-300'>關於我們</a></li>
          <li><a href="/contact" class='text-slate-200 hover:text-slate-300'>聯繫我們</a></li>
        </ul>
      </nav>
    </header>
  )
}
