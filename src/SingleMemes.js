import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

// removeMeme
function SingleMeme({open,toggle,id, topMessage,url,bottomMessage}){

	function handleRemove(){
		// removeMeme(id)
	}

	return(
	<>
		<Modal isOpen={open} toggle={toggle} fullscreen>
  		<ModalHeader>
  		MEME
  		</ModalHeader>
  		<ModalBody>
  		
			<div>
			<h1>{topMessage}</h1><br />
			<img src={url} alt="single meme" /><br />
			<h1>{bottomMessage}</h1>
			<Button color="danger" onClick={toggle}>Remove</Button>
			</div>
		</ModalBody>
  		<ModalFooter>
  		<Button color="warning" onClick={toggle}>Done</Button>
		</ModalFooter>
		</Modal>
 </>


	)

}

export default SingleMeme