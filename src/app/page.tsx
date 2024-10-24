import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function RootPage() {
    return (
        <div
            className='min-h-screen flex justify-center items-center root-bg p-4'
            style={{
                background: "linear-gradient(147deg, rgba(251,238,255,1) 0%, rgba(224,188,252,1) 100%)"
            }}
        >
            {/* Content */}
            <div className='w-full max-w-[450px] h-auto text-center flex flex-col gap-5'>
                {/* Logo */}
                <span className='font-bold text-3xl text-[rgb(235,159,255)]'>
                    Malika Studio
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
                            <InstagramIcon style={{ width: '30px', height: '30px' }} />
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
                            <TelegramIcon style={{ width: '30px', height: '30px' }} />
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
                            <PhoneIcon style={{ width: '30px', height: '30px' }} />
                            Call
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
