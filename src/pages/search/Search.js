// styles
import './Search.css'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const queryString = useLocation()
  const queryParams = new URLSearchParams(queryString.search)
  const query = queryParams.get('q')

  const {data, isPending, error } = useFetch(`http://localhost:3000/recipes?q=${query}`)

  useEffect(() => {
    console.log(query)
    console.log(queryString)
    console.log(queryParams)
    if(query) {
      console.log('query: ', query)
    }
  }, [query])

  return (
    <div>
      <h2 className='page-title'>Recipes Including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
