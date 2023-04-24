/* eslint-disable no-unused-vars */
import './App.css'
import { Difficulty } from './pages/Difficulty'
import { Questions } from './pages/Questions'
import { Results } from './pages/Results'
import ListCategories from './pages/ListCategories.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from 'react-router-dom'
import { useState } from 'react'
export default function App () {
  const [category, setCategory] = useState({
    id: 22,
    name: 'Geography'
  })
  const [data, setData] = useState(null)
  const [index, setIndex] = useState(null)
  const [load, setLoad] = useState(true)
  const [isChoise, setIsChoise] = useState()
  const [enabled, setEnabled] = useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<ListCategories
        setCategory={setCategory}
        setLoad={setLoad} />} />
        <Route path='/difficulty' element={<Difficulty
        setIndex={setIndex}
        setData={setData}
        setLoad={setLoad}
        category={category}
        data={data}
        index={index} />} />
        <Route path="/question" element={<Questions
        enabled={enabled}
        setEnabled={setEnabled}
        index={index}
        setIndex={setIndex}
        data={data}
        load={load}
        isChoise={isChoise}
        setIsChoise={setIsChoise}/>}
         />
        <Route path="/results" element={<Results />} />
      </Route>
    )
  )

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  )
}
const Root = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}
