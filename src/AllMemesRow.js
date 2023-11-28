import {useState} from "react"
import SingleMemes from "./SingleMemes"
import {Button} from 'reactstrap'

function AllMemesRow({Id,url,topMessage,bottomMessage}){
	const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)


	return(

     <tr>
     <td><Button color="success" onClick={toggle}>{Id}</Button></td>
     <td>{url}</td>
     <SingleMemes open ={modal} toggle={toggle} Id={Id} url={url} topMessage={topMessage} bottomMessage = {bottomMessage} />
     </tr>
	)
}


export default AllMemesRow