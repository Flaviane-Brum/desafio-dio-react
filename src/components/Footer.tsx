import Container from './Container'
import logo from '../assets/logo.svg'
import { Heart } from 'phosphor-react'

const Footer = () => {
  return (
    <footer className=" bg-blue-900  py-5 text-neutral-500">
      <Container>
        <div className="flex h-full items-center justify-between sm:flex-col">
          <img src={logo} alt="Logo do site" className="sm:mb-2" />
          <p className="flex items-center gap-1 text-blue-200">
            Criado com amor por{' '}
            <Heart weight="fill" className=" text-pink-500 " />
            <a
              href="https://github.com/Flaviane-Brum"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-500"
            >
              Flaviane Brum
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
