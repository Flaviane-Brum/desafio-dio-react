import { Link } from 'react-router-dom'
import bg from '../assets/sad-octocat.webp'
import Container from './Container'

const Error = () => {
  return (
    <div className="flex min-h-[96vh] w-full flex-col items-center justify-start bg-white py-16">
      <Container>
        <h1 className="mb-4 text-center text-2xl">
          Erro 404: Usuário não encontrado.
        </h1>
        <img src={bg} alt="Erro 404" className="mx-auto" />
        <Link
          to="/"
          className="mx-auto mt-5 flex max-w-[200px] items-center justify-center rounded border-r-0 bg-blue-500 p-4  text-xl text-blue-800 transition-colors hover:bg-pink-400 hover:text-green-900 "
        >
          Voltar para Home
        </Link>
      </Container>
    </div>
  )
}

export default Error
