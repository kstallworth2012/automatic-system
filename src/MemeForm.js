import {useState} from "react"
import {Button,Label,Form,Input,FormGroup} from "reactstrap"
import { v4 as uuidv4 } from 'uuid'


const INITIAL_FORM_STATE = {
  url: "",
  topMessage: "",
  bottomMessage: ""
}

function MemeForm({addMeme}){
	const [formData,setFormData] = useState(INITIAL_FORM_STATE)

	function handleSubmit(evt){
			evt.preventDefault()
	addMeme({...formData, id: uuidv4()})
	setFormData(INITIAL_FORM_STATE)
	}

	function handleChange(evt){
	  			

	const {name, value} = evt.target
	setFormData((f)=>{
		return(
				{...f, [name]:value}

			)
	})

	}

	return(
			<div>
			<Form>
				<FormGroup>
					<Label htmlFor="memeUrl">URL</Label>
					<Input
						type="text"
						name="url"
						value={formData.url}
						id="memeUrl"
						onChange={handleChange}
						
						/>
				</FormGroup>

				<FormGroup>
					<Label htmlFor="topMessage">Top Message</Label>
					<Input
						type="text"
						name="topMessage"
						value={formData.topMessage}
						id="topMessage"
						onChange={handleChange}
						
						/>
				</FormGroup>


				<FormGroup>
					<Label htmlFor="bottomMessage">Bottom Message</Label>
					<Input
						type="bottomMessage"
						name="bottomMessage"
						value={formData.bottomMessage}
						id="bottomMessage"
						onChange={handleChange}
						
						/>
				</FormGroup>



			<Button color="success" onClick={handleSubmit}>Meme It!</Button>
			</Form>
			</div>
		)

}


export default MemeForm