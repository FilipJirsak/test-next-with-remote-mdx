import { useState } from "react"

export default function TestDynamic() {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter => counter + 1)
    }

    return (
        <div style={{border: "1px solid red", padding: "5px"}}>Testovac√≠ React komponenta, dynamicky importovan√°. <a onClick={handleClick} style={{ cursor: "pointer", textDecoration: "underline" }}>Counter: {counter}</a></div>
    )
} 