import { useQuery } from '@tanstack/react-query'
import './App.css'
import Form from './Components/Form'

function App() {
  const { data } = useQuery(
    ['todo'],
    async () => await (await fetch('http://localhost:8000/todo')).json()
  )
  console.log(data, 'suresh')
  return (
    <>
      <Form />
      {data &&
        data?.data &&
        data?.data?.map((todo, index) => {
          return <li>{todo?.title}</li>
        })}
    </>
  )
}

export default App
