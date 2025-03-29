import { Be_Vietnam_Pro, Merriweather, Open_Sans, Roboto } from 'next/font/google';

const georgia = { className: 'font-georgia' };
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const beVietnamPro = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400', '700'] });

export const fonts: Record<string, { className: string }> = {
  georgia,
  merriweather,
  openSans,
  roboto,
  beVietnamPro
};
