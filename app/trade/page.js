import './page.css'

export default function page() {
    return (
        <section class='h-screen border-2 border-white flex flex-col justify-center items-center'>
            <h1 class='mb-8 text-3xl'>交易USDT</h1>
            <form action="" class="flex flex-col border-2 border-white p-6 gap-8 rounded-md w-1/2">

                <div class='flex justify-around'>
                    <h1>購買</h1>
                    <h1>販賣</h1>
                </div>

                <div class='pay_input_container flex flex-col border-2 border-gray-500 rounded-lg justify-center items-start px-4 py-2 gap-2'>
                    <label htmlFor="" class=''>我要支付</label>
                    <input type="text" inputmode="numeric" id="pay" name="pay" placeholder='0.00' required class="pay_input bg-transparent outline-none" />
                </div>

                <div class='pay_input_container flex flex-col border-2 border-gray-500 rounded-lg justify-center items-start px-4 py-2 gap-2'>
                    <label htmlFor="" class=''>我將收到</label>
                    <input type="text" inputmode="numeric" id="pay" name="pay" placeholder='0.00' required class="pay_input bg-transparent outline-none" />
                </div>

                <a href="" class='text-center border-2 border-white self-center w-1/2 rounded-md p-4 hover:bg-[#e6b832] hover:text-black'>送出訂單</a>
                {/* <input type="submit" value="Submit" class="border-2 border-white" /> */}
            </form>
        </section>
    )
}
