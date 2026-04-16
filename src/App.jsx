import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import DetailVideo from './Components/Items/DetailVideo'
import { SearchContext } from './Components/SearchContext'
import Page1 from './Components/Items/Page1'
import Page2 from './Components/Items/Page2'
import Page3 from './Components/Items/Page3'
import Page4 from './Components/Page4'
const App = () => {
  const [search, setSearch] = useState("")
  return (
    <>
    <SearchContext.Provider value={{search, setSearch}}>
      <Navbar/>
    
    <Routes>
          <Route path='/' element={< Page1/>}/>
          <Route path='/video/:id' element ={<DetailVideo/>}/>
          <Route path='/indain' element={<Page2/>}/>
          <Route path='/punjabi' element={<Page3/>}/>
          <Route path='/pakistani' element={<Page4/>}/>
        </Routes>
    
        </SearchContext.Provider>
    </>
  )
}

export default App