import React from 'react';


const withLogin= (Com )=>{
    const isLogin = true
    class NewComponent  extends React.Component {
        render(){
            const props = this.props;
            if(!isLogin){
                return(
                    <button>需要登陆</button>
                )
            }

            return(
                <Com {...props}></Com>
            )
        }
    }
     
   NewComponent.displayName = `withLogin(${Com.displayName})`
    return NewComponent ;
}
export default withLogin