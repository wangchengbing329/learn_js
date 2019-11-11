import React ,{Component} from 'react';
import Search from '../../components/searchBox/Search'
import  './searchcontent.css'
class SearchContent extends Component{
state ={
    readOnly:''
}
handleSearch =()=>{

}
handleEnter =(e)=>{
 console.log(e)
// if (e.nativeEvent.keyCode === 13){
// this.handleSearch()
// }
}
   render(){

   let readOnly = this.state.readOnly
    return (
        <div>
             <div className="searchContent">
           <div className="search-content">

            <Search select={readOnly} keyup={this.handleEnter.bind(this)} ></Search>
            <Show  > </Show>
           </div>
        </div>
        </div>
       
    )
}
}

function  Show (props) {
    return (
        <ul>

        </ul>
    )
}
export default SearchContent;