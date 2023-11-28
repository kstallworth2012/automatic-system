import AllMemesRow from './AllMemesRow'
import {Table} from 'reactstrap'




function AllMemes({memeData}){
    console.log(memeData)
	return (
						<Table>
									<thead>
									<tr>
									<th>Id</th>
									<th>Meme</th>

									</tr>
						
									</thead>
									<tbody>
										{
		memeData.map((m)=>{return(<AllMemesRow Id={m.id} url={m.url} topMessage={m.topMessage} bottomMessage={m.bottomMessage} key={m.id} />

										)})
									}
									</tbody>
						</Table>
		)
}

export default AllMemes