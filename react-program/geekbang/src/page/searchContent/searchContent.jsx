import React ,{Component} from 'react';
import Search from '../../components/searchBox/Search'
import  './searchcontent.css'
class SearchContent extends Component{
state ={
    readOnly:''
}
   render(){

   let readOnly = this.state.readOnly
    return (
        <div>
             <div className="searchContent">
           <div className="search-content">

            <Search select={readOnly} ></Search>
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