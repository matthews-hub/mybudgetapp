
import AddItems from './AddItems';
import OutPut from './output';


function Home(props){

    return (
        <div className="container">

            <OutPut list={props.list} />
            <AddItems add={props.add} />
        </div>
    )
}

export default Home;