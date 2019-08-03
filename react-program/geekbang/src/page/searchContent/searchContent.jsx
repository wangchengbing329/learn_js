import React ,{Component} from 'react';
import Search from '../../components/searchBox/Search'

class SearchContent extends Component{
state ={
    readOnly:''
}
   render(){
console.log(1111111)
   let readOnly = this.state.readOnly
    return (
        <div>
             <div className="searchContent">
            1111
            <Search select={readOnly}></Search>
        </div>
        </div>
       
    )
}
}
export default SearchContent;