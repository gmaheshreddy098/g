 import Rap1 from './Rap1.jsx'
 import { useGiftContext } from './Chook.jsx';
const Rap = () => {
  const { message } = useGiftContext();
  return (
    <div>
      <h1>the data from rap</h1>
      <p>{message}</p>
      <Rap1 />
    </div>
  )
}

export default Rap