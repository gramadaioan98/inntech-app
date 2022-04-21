import Link from "next/dist/client/link"
import Image from "next/dist/client/image"
const Hero = () =>{
  return (
    <section className="  lg:flex overflow-hidden lg:relative flex-col-reverse lg:flex-row  lg:h-510px xslg:h-670px 2xlg:h-900px px-15px">
      <div className=" basis-6/12  justify-center xlg:justify-end hidden lg:flex">
        <div className="flex flex-col justify-center items-start">
          <h1 className=" text-5xl xlg:text-sbig 2xlg:text-big font-bold text-violet-col pb-12px">LOREM ISPUM</h1>
          <p className="text-black-col pb-68px max-w-330px xlg:max-w-517px text-lg xlg:text-xl">Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
          </p>
          <Link href="/"><a className="bg-crem-col text-white mb-200px xslg:mb-280px xlg:mb-200px py-4 xslg:py-35px px-8 xslg:px-16 inline-block rounded-3xl text-lg xslg:text-xl duration-300 hover:bg-crem-black">FA-TI CONT GRATUIT</a></Link>
        </div>
      </div>
      <div className=" hidden lg:block basis-6/12">
        <div className="absolute  -right-200px hidden lg:block" ><Image  src="/Path 237.png" alt="circle" width={509} height={466} /></div>
        <div className="lg:absolute girl z-10" >
          <Image src="/girl.png" alt="girl" width={874} height={722} />
          </div>
        <div className="absolute hidden 2xlg:block -top-15px right-15px" ><Image  src="/circle.png" alt="circle" width={1049} height={760} /></div>
        <div className="absolute bottom-0 hidden lg:block"><Image  src="/Path 251.png" alt="circle" width={214} height={211} /></div>
        <div className="absolute bottom-0 hidden lg:block -right-31px"><Image  src="/Path 236.png" alt="circle" width={163} height={122} /></div>
      </div>
      <div className="hero-mobile block lg:hidden sm:h-510px flex justify-center py-10 sm:py-0">
      <div className="flex flex-col justify-center items-center sm:pt-60px text-center">
          <div className="background-opacity p-10">
          <h1 className="text-2xl sm:text-5xl xlg:text-sbig 2xlg:text-big font-bold text-white pb-12px">LOREM ISPUM</h1>
          <p className="text-white pb-35px lg:pb-68px max-w-330px xlg:max-w-517px text-sm sm:text-lg xlg:text-xl">Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
          </p>
          <Link href="/"><a className="bg-crem-col text-white mb-60px  py-4 xslg:py-35px px-8  inline-block rounded-3xl text-lg  duration-300 hover:bg-crem-black">FA-TI CONT GRATUIT</a></Link>
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default Hero 