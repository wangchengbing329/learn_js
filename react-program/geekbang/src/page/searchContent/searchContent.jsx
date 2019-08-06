import React ,{Component} from 'react';
import Search from '../../components/searchBox/Search'

class SearchContent extends Component{
state ={
    readOnly:''
}
   render(){

   let readOnly = this.state.readOnly
    return (
        <div>
             <div className="searchContent">
           
            <Search select={readOnly}></Search>
        </div>
        </div>
       
    )
}
}
export default SearchContent;