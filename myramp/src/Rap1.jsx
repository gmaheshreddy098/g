import {useGiftContext} from './Chook.jsx';
const Rap1 = () =>{
  const { message } = useGiftContext();

  return (
    <div>
      <h1>the data from ramp1{message}</h1>
      <p>the context is used</p>
      <p>the data is used in rap1{message}</p>

    </div>
  )
}

export default Rap1