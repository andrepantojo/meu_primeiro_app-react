import React from "react"
import ReactDOM from "react-dom"

const App = () => {
    //expressão JSX
    return <div>Meu primeiro componente reactJS</div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)