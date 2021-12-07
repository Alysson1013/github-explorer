import { Counter } from './Components/Counter'
import { RepositoryList } from './Components/RespositoryList'
import './styles/global.scss'

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}