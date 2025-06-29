// import Provider from '@/components/provider';
// import { ThemeInitializer } from '@/components/public';
import HeaderComponent from "@/components/(application)/header.server";
import FooterComponent from "@/components/(application)/footer"
import AnimalSidePanel from "@/components/(Inputs)/AnimalPanel"
import { Suspense } from 'react';

import { metadata as meta } from "@/setting/meta";
import './globals.css';
export const metadata = {
    metadataBase: new URL(meta.url  ),
    title:meta.title,
    description:meta.description,
    keywords:meta.keywords,
    openGraph:{
        title:meta.title,
        description:meta.description,
        url:meta.url,
        siteName:meta.title,
        images:meta.images.map(link=>({url:link})),
        locale:meta.locale,
        type:'website'
    },
    twitter:{
        card:'summary_large_image',
        title:meta.title,
        description:meta.description,
        images:meta.images
    },
    robots:{
        index:meta.index,
        follow:meta.follow,
        nocache:false
    },
    icons:{
        icon:meta.icon,
        apple:meta.appleicon,
        shortcut:meta.shortcut
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang={meta.locale} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/_next/static/chunks/app_globals_73c37791.css" as="style" />
      </head>
      
      <body className="min-h-[100dvh] flex flex-col">
      <Suspense>
        <HeaderComponent />

       
        <main className="w-full flex-1 m-0 p-0">
          <div className="w-full h-full">
            {children}
          </div>
        </main>

        {/* 오른쪽 사이드 패널 */}
        <div className="fixed top-[180px] right-[40px] z-10 hide-below-1550">
          {/* <AnimalSidePanel /> */}
        </div>

        <FooterComponent />
        </Suspense>
      </body>
    </html>
  );
}
