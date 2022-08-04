import Container from './Container'
import logo from '../assets/logo.svg'
import { MagnifyingGlass } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
const Header = () => {
  const [searchUser, setSearchUser] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!searchUser) {
      return
    } else {
      navigate(`/profile/${searchUser}`)
    }

    setSearchUser('')
  }
  return (
    <header className="bg-blue-900  py-5 text-neutral-500 shadow shadow-blue-900  ">
      <Container>
        <div className="flex items-center justify-between sm:flex-col">
          <Link to="/">
            <img src={logo} alt="Logo do site" className="sm:mb-4" />
          </Link>

          <form
            action=""
            className=" flex h-9 w-full max-w-[400px] gap-2 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Procure pelo nome do usuário"
              className="   w-full  rounded bg-blue-800 px-4 text-sm  text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={(e) => setSearchUser(e.target.value)}
              value={searchUser}
            />
            <button
              type="submit"
              className="   h-full rounded border-r-0 bg-blue-500 px-4 text-blue-800  transition-colors hover:bg-pink-400 hover:text-green-900"
              aria-label="Pesquisar por usuário"
            >
              <MagnifyingGlass size={25} />
            </button>
          </form>
        </div>
      </Container>
    </header>
  )
}

export default Header
