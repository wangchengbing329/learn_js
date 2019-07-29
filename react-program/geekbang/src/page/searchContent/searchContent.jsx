import React ,{Component} from 'react';
import Search from '../../components/searchBox/Search'

class searchContent extends Component{
state ={
    readOnly:''
}
   render(){

   let readOnly = this.state.readOnly
    return (
        <div className="searchContent">
            <Search select={readOnly}></Search>
        </div>
    )
}
}
export default searchContent;