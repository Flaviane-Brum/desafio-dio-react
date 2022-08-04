import Container from 'components/Container'
import bg from '../assets/git.webp'
const Home = () => {
  return (
    <article
      className=" min-h-[96vh]  bg-cover bg-center bg-repeat-x py-16"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <Container>
        <div className="max-w-[400px] rounded-md bg-blue-900/70 p-5 shadow-lg shadow-blue-900 ">
          <h1 className="text-2xl font-bold text-white">
            Bem-vindo(a), basta escrever o seu nome de usuário do github, e
            obter a sua informação.
          </h1>
        </div>
      </Container>
    </article>
  )
}

export default Home
