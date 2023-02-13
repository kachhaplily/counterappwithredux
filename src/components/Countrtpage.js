import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incr, decr } from '../Action/counter'


const Countrtpage = () => {
    const mystate = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return (
        <section className='counter'>
            <div className='container'>
                <span>{mystate}</span>
                <div> <button onClick={() => dispatch(incr())}>➕</button>
                    <button onClick={() => dispatch(decr())}>➖</button> </div>
            </div>
        </section>

    )
}

export default Countrtpage