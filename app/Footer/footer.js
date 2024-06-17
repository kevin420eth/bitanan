import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const date = new Date
  const current_year = date.getFullYear()

  return (
    <footer class="flex flex-col justify-center items-center w-full pt-12 pb-8">

      <nav>
        <ul class='flex justify-center items-center gap-4 mb-8'>
          <li><a href="">產品</a></li>
          <li><a href="">支援</a></li>
          <li><a href="">部落格</a></li>
          <li><a href="">關於我們</a></li>
        </ul>
        <ul class='flex justify-center items-center gap-4 mb-8'>
          <li><a href="https://facebook.com/" target="_bland"><FaFacebook /></a></li>
          <li><a href="https://instagram.com/" target="_bland"><FaInstagram /></a></li>
          <li><a href="https://twitter.com/" target="_bland"><FaXTwitter /></a></li>
          <li><a href="https://discord.com/" target="_bland"><FaDiscord /></a></li>
        </ul>
      </nav>
      <p>©{current_year} Bitanan Inc. All rights reserved.</p>
    </footer>
  )
}
