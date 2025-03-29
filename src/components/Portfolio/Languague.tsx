import { images } from '@/assets/image-bases';
import { useTranslation } from '@/utils/i18n/i18';
import { Dropdown } from 'antd';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';

const languages = [
  { code: 'vi', name: 'Tiếng Việt', flag: images.flagsVn },
  { code: 'en', name: 'English', flag: images.flagsEn },
  { code: 'ja', name: '日本語', flag: images.flagsJa },
  { code: 'ko', name: '한국어', flag: images.flagsKr }
] as const;

const Languague = () => {
  const { i18n, changeLanguage } = useTranslation();

  // Lấy ngôn ngữ từ localStorage một lần khi component mount
  const selectedLang = useMemo(() => {
    const savedLang = typeof window !== 'undefined' && localStorage.getItem('selectedLang');
    return savedLang || i18n.language;
  }, [i18n.language]);

  const currentLang = useMemo(() => {
    return languages.find((lang) => lang.code === selectedLang) || languages[0];
  }, [selectedLang]);

  const handleLanguageChange = useCallback((langCode: string) => {
    changeLanguage(langCode);
    localStorage.setItem('selectedLang', langCode);
  }, [changeLanguage]);

  const menuItems = useMemo(() => languages.map((lang) => ({
    key: lang.code,
    label: (
      <div
        className="flex items-center p-2 cursor-pointer"
        onClick={() => handleLanguageChange(lang.code)}
      >
        <Image src={lang.flag} alt={lang.name} width={30} height={24} />
      </div>
    )
  })), [handleLanguageChange]);

  return (
    <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottom">
      <button>
        <Image src={currentLang.flag} alt={currentLang.name} width={30} height={24} />
      </button>
    </Dropdown>
  );
};

export default Languague;
