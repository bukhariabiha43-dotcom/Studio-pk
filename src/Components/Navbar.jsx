import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { SearchContext } from './SearchContext'

const Navbar = () => {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <nav className='shadow-2xs top-0 z-50 w-full bg-gray-900 rounded-b-2xl'>
      
      <div className=' max-h-screen mx-auto  p-4 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between'>
          
          <h1 className=' cursor-pointer text-2xl font-serif text-red-500 font-bold hover:text-red-600 transition transform duration-500 pl-6'><i>Studio.pk</i></h1>
         
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}
          placeholder="Search.." className='px-4 py-2 rounded-full font-semibold bg-white border-gray-300  focus:outline-none focus:ring-blue-500 text-gray-500 font-serif border focus:ring-1 w-full md:w-1/2' />
         
          <div className='flex gap-6 font-mono font-semibold text-md  cursor-pointer text-white pr-4'>
             
              <Link to="/" className='hover:text-red-500'>Sufi</Link>
              <Link to="/indain"className='hover:text-red-500'>Indian</Link>
              <Link to="/punjabi"className='hover:text-red-500'>Panjabi </Link>
              <Link to="/pakistani"className='hover:text-red-500'>Pakistani</Link>
          </div>
         
      </div>
      </nav>
  )
}

export default Navbar