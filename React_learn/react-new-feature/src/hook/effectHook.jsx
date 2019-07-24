
import React, { useEffect, useState } from 'react';

function EffectHookDemo() {
    const [count, setCount] = useState(0)
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const onResize = () => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }
    // 控制 useEffect 执行
    // 只有数组每一项都不变的情况下 useEffect 才不会执行
    useEffect(() => {
        document.title = count
    },[count])
    useEffect(() => {
        console.log(1111)
        window.addEventListener('resize', onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    }, [])
    return (
        <button
            onClick={() => {
                setCount(count + 1)
            }}
        >
            click: {count},
        size: {size.width} X {size.height}
        </button>
    )
}

export default EffectHookDemo