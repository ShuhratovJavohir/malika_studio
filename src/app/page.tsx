import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function RootPage() {
    return (
        <div
            className='h-screen flex justify-center items-center root-bg '
            style={{
                background: "rgb(251,238,255)",
                background: "linear-gradient(147deg, rgba(251,238,255,1) 0%, rgba(224,188,252,1) 100%)",
            }}
        >
            {/* Content */}
            <div className='w-[450px] h-[400px] text-center flex flex-col gap-5'>
                {/* Logo */}
                <span className='font-bold text-white text-3xl'>Logo</span>
                {/* Subtitle */}
                <p className='font-medium text-white text-xl'>This is text for чтобы просто хотябы был какой то
                    текст</p>
                <ul className="flex flex-col gap-5">
                    <li
                        className='rounded-[8px]'
                        style={{
                            background: "rgb(235,159,255)",
                            background: "linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)",
                        }}
                    >
                        <a
                            className="py-4 text-white flex items-center justify-center gap-2"
                            href="https://www.instagram.com/shukhratov.j_/" target="_blank" rel="noopener noreferrer"
                        >
                            <InstagramIcon style={{ width: '30px', height: '30px' }}/>
                            <div className='flex flex-col gap-0'>
                                <h4 className='text-[16px] uppercase'>Instagram</h4>
                                <p className='text-[14px]'>Тут про наше творчество</p>
                            </div>
                        </a>
                    </li>

                    <li
                        className='rounded-[8px]'
                        style={{
                            background: "rgb(235,159,255)",
                            background: "linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)",
                        }}
                    >
                        <a
                            className="py-4 text-white text-[22px] flex items-center justify-center gap-2"
                            href="https://www.instagram.com/shukhratov.j_/" target="_blank" rel="noopener noreferrer"
                        >
                            <TelegramIcon style={{ width: '30px', height: '30px' }} />
                            Telegram
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}