import '../css/hello.css'

import './../fonts/OpenSans-Regular.ttf'

import logo from './../img/Без названия.png'

import './../templates/application.html'

import React from 'react'

import ReactDOM from 'react-dom'

 class Reactcom extends React.Component {

    render(){
        return <div>
            Hello
            <img src={logo} alt=""/>
        </div>
    }
 }

 ReactDOM.render(<Reactcom/>,document.getElementById('root'))





