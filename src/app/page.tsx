'use client'

import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import BgFon from '@/assets/images/beautiful-feathers-arrangement.jpg';
import { useEffect, useState } from 'react';

export default function RootPage() {
    const [tiltStyle, setTiltStyle] = useState({ transform: 'translate(0px, 0px)' });

    useEffect(() => {
        // Обработчик наклона устройства
        const handleOrientation = (event: DeviceOrientationEvent) => {
            const gamma = event.gamma ?? 0; // gamma - горизонтальный наклон, значение по умолчанию 0
            const beta = event.beta ?? 0;   // beta - вертикальный наклон, значение по умолчанию 0

            // Коэффициенты для регулировки силы параллакса
            const offsetX = gamma * -2; // Поворот по горизонтали
            const offsetY = beta * -2; // Поворот по вертикали

            setTiltStyle({
                transform: `translate(${offsetX}px, ${offsetY}px)`,
            });
        };

        // Добавляем слушатель для deviceorientation
        window.addEventListener('deviceorientation', handleOrientation);

        // Убираем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-black">
            {/* Фоновое изображение с эффектом параллакса */}
            <Image
                src={BgFon}
                alt="This is BG"
                className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500"
                style={tiltStyle}
            />

            {/* Темный overlay поверх фонового изображения */}
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

            {/* Основное содержимое */}
            <div className="relative z-20 w-full max-w-[450px] h-auto text-center flex flex-col gap-5 p-4">
        <span className="font-bold text-3xl mx-auto mb-3 w-1/2 text-[rgb(235,159,255)]">
          <Image src={Logo} alt="Logo Malika Studio" />
        </span>
                <ul className="flex flex-col gap-5">
                    <li
                        className="rounded-[8px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)',
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
                        className="rounded-[8px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)',
                        }}
                    >
                        <a
                            className="py-4 text-white text-[20px] md:text-[22px] flex items-center justify-center gap-2"
                            href="https://t.me/Xina_by_malika_admin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TelegramIcon style={{ width: '30px', height: '30px' }} />
                            Telegram
                        </a>
                    </li>

                    <li
                        className="rounded-[8px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(235,159,255,1) 0%, rgba(126,149,252,1) 100%)',
                        }}
                    >
                        <a
                            className="py-4 text-white text-[20px] md:text-[22px] flex items-center justify-center gap-2"
                            href="tel:+998999935106"
                            rel="noopener noreferrer"
                        >
                            <PhoneIcon style={{ width: '30px', height: '30px' }} />
                            Call
                        </a>
                    </li>
                </ul>

                {/* Элемент "Created by", прикрепленный к нижней части контейнера */}
                <div className="flex justify-center">
          <span className="text-white font-medium mt-8">
            Created by <a href="https://t.me/ShukhratovJ">@ShukhratovJ</a>
          </span>
                </div>
            </div>
        </div>
    );
}
