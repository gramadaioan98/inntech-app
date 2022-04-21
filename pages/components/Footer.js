
import Image from "next/image";
import Link from "next/link";
const Footer = () =>{
  return(
    <footer className="bg-violet-col text-white pt-60px sm:pt-107px">
      <div className="flex max-w-1640px m-auto w-full flex-col lg:flex-row px-15px">
        <div className="social basis-2/5 gap-16 flex mb-5 lg:mb-0 justify-center">
          <Image src="/facebook.svg" alt="facebook" width={16} height={30} />
          <Image src="/instagram.svg" alt="instagram" width={30} height={30} />
          <Image src="/linkedin.svg" alt="linkedin" width={30} height={30} />
        </div>
        <div className="flex basis-3/5 justify-between pb-60px gap-5 flex-col sm:flex-row">
          <div className="flex flex-col gap-7  items-start">
            <h5 className="text-3xl font-bold">Platformă</h5>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Creează Cont</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Accesează Cont</a></Link>
          </div>
          <div className="flex flex-col gap-7 items-start">
            <h5 className="text-3xl font-bold">Meniu</h5>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Home</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Despre Noi</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Cum Funcționează</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Sfaturi</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">F.A.Q.</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Contact</a></Link>
          </div>
          <div className="flex flex-col gap-7  items-start">
            <h5 className="text-3xl font-bold">Legal</h5>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Termene si Conditii</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Politica Confidentialitate     </a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">Politica Cookies</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">GDPR</a></Link>
            <Link href="/"><a className=" text-lg lg:text-xl hover:opacity-50 duration-200">ANPC</a></Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-col py-35px text-center text-sm sm:text-xl"><p>Copyright © 2021 . Toate drepturile rezervate. </p></div>
    </footer>
  )
}

export default Footer;