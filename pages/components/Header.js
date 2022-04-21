import Link from "next/link";

const menu = [
  {"link":"/", "name":"Home", 'active':true},
  {"link":"/", "name":"Despre noi", 'active':false},
  {"link":"/", "name":"Cum functioneaza", 'active':false},
  {"link":"/", "name":"Sfaturi", 'active':false},
  {"link":"/", "name":"F.A.Q.", 'active':false},
  {"link":"/", "name":"Contact", 'active':false},

]
const Header = () =>{
  return (
    <header>
    <div className=" text-lg h-40 items-center max-w-1640px w-full m-auto justify-end gap-5 xlg:gap-20 px-20 2xlg:px-0 hidden lg:flex">
      {menu.map(function(m, index){
        return (<Link href={m.link} key={index}><a className={`inline-block  hover:font-bold ${m.active ? "font-bold" :""} `}>{m.name}</a></Link>)
      })}
     <Link href="/"  ><a className="uppercase text-xl xlg:text-2xl bg-crem-col text-white py-4 px-10 xlg:px-16 rounded-full duration-300 hover:bg-crem-black">Log in</a></Link>
    </div>
    <div className=" block lg:hidden">menu-mobile</div>
    </header>
  )
}
export default  Header ;