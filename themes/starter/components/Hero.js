  /* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
/**
 * 英雄大图区块
 */
export const Hero = () => {
  return <>
     {/* <!-- ====== Hero Section Start --> */}
    </* 由此开始 */>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/starter/custom-images/background1.webp)' }}>
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content mx-auto max-w-[780px] text-center mt-[60px]"
                data-wow-delay=".2s"
              >
    </* 到此结束 */>
    </* ----------------------------------- */>
    </* Mobile和PC图片版本 由此开始>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center bg-[url('/images/starter/custom-images/Mobile.webp')] md:bg-[url('/images/starter/custom-images/PC.webp')]">
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content mx-auto max-w-[780px] text-center mt-[60px]"
                data-wow-delay=".2s"
              >
    </* 到此结束 */>
              {/* 主标题 */}
              <h1
                className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
              >
                {siteConfig('STARTER_HERO_TITLE_1', null, CONFIG)}
              </h1>
              {/* 次标题 */}
              <p
                className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
              >
                {siteConfig('STARTER_HERO_TITLE_2', null, CONFIG)}
              </p>
              {/* 按钮组 */}
              <ul
                className="mb-10 flex flex-wrap items-center justify-center gap-5"
              >
                {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, CONFIG) &&
                <li>
                  <a
                    href={siteConfig('STARTER_HERO_BUTTON_1_URL', null, CONFIG)}
                    className="inline-flex items-center justify-center rounded-md bg-[#ff6666] px-7 py-[14px] text-center text-lg font-bold text-white shadow-1 transition duration-300 ease-in-out hover:bg-[#cda780]" rel="noreferrer nofollow"
                  >
                     {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, CONFIG)}
                  </a>
                </li>
                }
                {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, CONFIG) &&
                <li>
                  <a
                    href={siteConfig('STARTER_HERO_BUTTON_2_URL', null, CONFIG)}
                    target="_self"
                    className="hidden md:flex items-center rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:text-[#cda780]" rel="noreferrer nofollow"
                  >
                    {siteConfig('STARTER_HERO_BUTTON_2_ICON', null, CONFIG) && <img className='mr-4' src={siteConfig('STARTER_HERO_BUTTON_2_ICON', null, CONFIG)}/>}
                    {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, CONFIG)}
                  </a>
                </li>
                }
              </ul>

            </div>
          </div>

          {/* 产品预览图片 */}
          { siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, CONFIG) && <div className="w-full px-4">
            <div
              className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
              data-wow-delay=".25s"
            >

              <div className="mt-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, CONFIG)}
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>

              {/* 背景图 */}
              <div className="absolute -left-9 bottom-0 z-[-1]">
                <img src='/images/starter/bg-hero-circle.svg'/>
              </div>
              <div className="absolute -right-6 -top-6 z-[-1]">
              <img src='/images/starter/bg-hero-circle.svg'/>
              </div>
            </div>
          </div>
           }

        </div>
      </div>
    </div>
    {/* <!-- ====== Hero Section End --> */}
    </>
}
