import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from "next/image";
import Logo from '@/assets/images/logo.png';
import BgFon from '@/assets/images/beautiful-feathers-arrangement.jpg'

export default function RootPage() {
    return (
        <div className="relative">
            <Image src={BgFon} alt="This is BG" className="absolute h-screen z-10"/>
            <div className="absolute inset-0 bg-black opacity-40 z-20"></div>
            <div
                className='min-h-screen flex justify-center items-center root-bg p-4 z-20 relative'
            >
                {/* Content */}
                <div className='w-full max-w-[450px] h-auto text-center flex flex-col gap-5'>
                    {/* Logo */}
                    <span className='font-bold text-3xl mx-auto mb-3 w-1/2 text-[rgb(235,159,255)]'>
                    <Image src={Logo} alt="Logo Malika Studio"/>
                </span>
                    <ul className="flex flex-col gap-5">
                        <li
                            className='rounded-[8px]'
                            style={{
                                background: "linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)",
                            }}
                        >
                            <a
                                className="py-4 text-white text-[20px] md:text-[22px] flex items-center justify-center gap-2"
                                href="https://www.instagram.com/xina_brow_malika/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon style={{width: '30px', height: '30px'}}/>
                                Instagram
                            </a>
                        </li>

                        <li
                            className='rounded-[8px]'
                            style={{
                                background: "linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)",
                            }}
                        >
                            <a
                                className="py-4 text-white text-[20px] md:text-[22px] flex items-center justify-center gap-2"
                                href="https://t.me/Shopmalikaa" target="_blank" rel="noopener noreferrer"
                            >
                                <TelegramIcon style={{width: '30px', height: '30px'}}/>
                                Telegram
                            </a>
                        </li>

                        <li
                            className='rounded-[8px]'
                            style={{
                                background: "linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)",
                            }}
                        >
                            <a
                                className="py-4 text-white text-[20px] md:text-[22px] flex items-center justify-center gap-2"
                                href="tel:+998999935106" rel="noopener noreferrer"
                            >
                                <PhoneIcon style={{width: '30px', height: '30px'}}/>
                                Call
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
