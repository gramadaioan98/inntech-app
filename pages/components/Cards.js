import { useEffect, useState} from "react"

const  Cards = () =>{
  let data
  const [showData, setSowData] = useState();
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  .then(responseData => {
    data = responseData.map(function(todo){
      return (
        <div class="card basis-full sm:basis-1/2 lg:basis-1/3 xslg:basis-1/4  p-5 flex flex-col gap-2 m-x-10" key={todo.id}>
          <div className="border-2 p-5">
          <h4 className="font-bold xslg:text-lg ">Name: {todo.name}</h4>
          <p>Email: {todo.email}</p>
          <p>Street: {todo.address.street}</p>
          <p>Phone: {todo.phone}</p>
          <p>Company: {todo.company.name}</p>
          </div>
        </div>
      )
    })
    setSowData(data)
  })
 })

  return(
  <div className="flex max-w-1694px m-auto flex-wrap  py-60px">
    {showData}
  </div>
  )
}
export default Cards
