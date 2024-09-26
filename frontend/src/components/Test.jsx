import { useState } from 'react'
import "./test.scss"

function Test(props) {
    const [theme, setTheme] = useState(false)
    const [counter, setCounter] = useState(0)
    const [position, setPosition] = useState(0)

    function changeCounter(e) {
        const name = e.target.name
        if (name == 'inc') {
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)
        }
    }

    function callToggler(e) {
        setTheme(!theme)
    }


    function moveCounter(e) {
        setPosition(e.target.value)
    }
    return (
        <table className='table'>
            <tr className='table-header'>
                <td>Header 1</td>
                <td>Header 2</td>
                <td>Header 3</td>
                <td>Header 4</td>
                <td>Header 5</td>
            </tr>
            <tr>
                <td className={theme ? 'dark' : 'light'} id='table-container'>
                    <h1>Test</h1>
                    <button onClick={callToggler}>
                        Toggle theme
                    </button>
                </td>
                <td className='table-container'>
                    <h2>
                        {counter}
                    </h2>
                    <button onClick={changeCounter} name='dec'>Decrement</button>
                    <button onClick={changeCounter} name='inc'>Increment</button>
                </td>

                <td>
                    <h2 style={{ transform: `translateX(${position}-px)` }}>
                        {position}
                    </h2>
                    <input type="range" onChange={moveCounter} />
                </td>

                <td>
                    <input type="checkbox" />

                </td>
                <td><input type="range" /></td>
            </tr>
        </table>
    );
}

export default Test;