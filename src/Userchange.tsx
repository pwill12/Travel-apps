import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks/Hooks'
import Admin from './admin'
import App from './App'

// const user = useAppSelector(state => state.user)
// const dispatch = useAppDispatch()


// useEffect(() => {
//     loginUsers(())
// }, [third])

function Userchange() {

    const user = useAppSelector(state => state.user)
const dispatch = useAppDispatch()

const adminchange = user.currentUser?.admin

// useEffect(() => {
//     dispatch(loginUsers(hhh))
// }, [])
  return (
    <div>
        {adminchange ? <Admin/> : <App />}
    </div>
  )
}

export default Userchange