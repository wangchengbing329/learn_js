import * as React from 'react';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {routes,navRoutes} from './router';

class App extends React.Component<{}> {
    render() {
        return (        
           <Router>
                <ul>
                    {
                        navRoutes.map(item => {
                            return (
                                <li>
                                    <Link to={item.route}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    routes.map(routeItem => {
                        return (
                            <Route path={routeItem.route} exact={routeItem.exact ? true : false} component={routeItem.component}></Route>
                        )
                    })
                }

           </Router>
         
        )
    }
}

export default App;

// "react": "^17.0.1",
//     "react-dom": "^17.0.1",
//     "react-router": "^5.2.0",
//     "react-router-dom": "^5.2.0",