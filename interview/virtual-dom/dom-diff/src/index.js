import {createElement,render,renderDom} from './element';

let virtualDOM = createElement('ul',{class:'list'},[createElement('li',{class:'item'},['周']),
createElement('li',{class:'item'},['王']),
createElement('li',{class:'item'},['林俊杰'])
]);
console.log(virtualDOM)
let el = render(virtualDOM)
renderDom(el,document.getElementById('root'))
