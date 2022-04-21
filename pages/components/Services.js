import Image from "next/dist/client/image"
import Link from "next/dist/client/link"
const services = [
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
  {'title':'Mauris non', 'paragraph':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
]

const Services = () => {
  return (
    <section className="px-15px py-60px sm:py-120px">
      <h2 className="text-center font-bold text-2xl sm:text-5xl">Lorem Ipsum</h2>
      <h2 className="text-center font-bold text-2xl sm:text-5xl pb-28px">Dolor Sit ( Servicii) </h2>
      <p className="text-center text-sm sm:text-sxl max-w-615px m-auto"> Suspendisse aliquam, quam vel rhoncus mattis, nibh metus pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit. </p>
      <div className="flex max-w-1300px justify-center m-auto flex-wrap gap-y-5 sm:gap-y-11 pt-60px sm:pt-120px pb-35px sm:pb-80px">
        {services.map(function(s,id){
          return(
          <div className="flex  basis-full sm:basis-1/3	lg:basis-1/4 items-center justify-center gap-6" key={id}>
            <div> <Image src="/Path 163.svg" alt="girl" width={48} height={79} /></div>
            <div className="flex flex-col ">
              <h5 className="text-xl pb-10px">{s.title}</h5>
              <p className="text-xsm max-w-138px">{s.paragraph}</p>
            </div>
          </div>
          )
        })}
      </div>
      <div className="text-center"><Link href="/"><a className="bg-crem-col text-white mb-60px   py-20px px-120px  inline-block rounded-3xl text-xsm  duration-300 hover:bg-crem-black">Buton</a></Link></div>

    </section>
  )
}
export default Services