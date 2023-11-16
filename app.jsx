import { useState } from "react"
import Bussin from "./bussin"

function App() {
    const [expression, setExpression] = useState("")
    const [expressions, setExpressions] = useState([])

    async function sendExpression() {
        setExpressions([...expressions, [expression, await Bussin.send(expression)]])
    }

    function kd({key}) {
        if (key === "Enter") {
            sendExpression()
        } else if (key === "Backspace") {
            setExpression(expression.slice(0, -1))
        } else if (key === "Shift") {
            return
        } else {
            setExpression(expression + key)
        }
    }

    window.onkeydown = kd

    return (
        <>
        <div id="main">{
            expressions.map((value, index)=>{
                <expression key={index}>{value[0]}<br></br>{value[1]}</expression>
            })
        }<br></br>{expression}</div>
        </>
    )
}

export default <App />