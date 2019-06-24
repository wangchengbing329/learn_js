import React ,{Component} from 'react'
import WithLogin from './WithLogin ';
@WithLogin

class LoginStatus extends Component {
    render () {

        return (
            <button>已经登录</button>
        )
    }
}

export default LoginStatus
