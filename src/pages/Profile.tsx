import Container from 'components/Container'
import { useEffect, useState } from 'react'
import format from 'date-fns/format'
import {
  Envelope,
  LinkedinLogo,
  MapPin,
  TwitterLogo,
  UsersThree
} from 'phosphor-react'

import { useParams } from 'react-router-dom'
import api from 'service/api'
import { IProfile, IRepos } from 'interfaces/UserI'
import ItemLI from 'components/ItemLI'
import ItemLink from 'components/ItemLink'
import Error from 'components/Error'

const Profile = () => {
  const [user, setUser] = useState<IProfile | null>()
  const [repos, setRepos] = useState<IRepos[]>()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    const getSearchedUser = async () => {
      try {
        setLoading(true)
        const response = await api.get(`users/${id}`)
        setUser(response.data)
        setLoading(false)
      } catch (error) {
        setErro(true)
        console.log(ErrorEvent)
      }
    }
    const getUserRepos = async () => {
      try {
        setLoading(true)

        const response = await api.get(`users/${id}/repos`)

        setRepos(response.data)
        setLoading(false)
      } catch (error) {
        console.log(ErrorEvent)
      } finally {
        setLoading(false)
      }
    }
    getUserRepos()
    getSearchedUser()
  }, [id])
  if (loading)
    return (
      <div className="mt-[50px] flex h-screen justify-center">
        <h1>CARREGANDO...</h1>
      </div>
    )
  if (erro) return <Error />
  if (user)
    return (
      <article className="bg-blue-50 py-16 sm:py-6">
        <Container>
          <h1 className="mb-2 flex w-full text-5xl  text-blue-800 lg:justify-center md:text-3xl ">
            {user.login}
          </h1>

          <div className=" mb-8 flex  items-center gap-[2.563rem] rounded-xl bg-white p-5 shadow-md lg:mb-5 lg:flex-col lg:gap-4">
            <div className="mb-4  text-center">
              <div className="relative  mb-4 h-[220px] w-[220px] rounded-full ">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="rounded-full bg-gradient-to-r  from-blue-500 to-pink-500 p-[0.2rem] drop-shadow "
                />
              </div>
              <time className="text-blue-900">
                Entrou em: {format(new Date(user.created_at), 'MM/dd/yyyy')}
              </time>
            </div>

            <div className="flex flex-col ">
              <h2 className="  text-2xl text-blue-700 ">{user.name}</h2>
              <span className="mb-4 flex  items-center gap-1 text-base  text-neutral-800 ">
                <MapPin size={16} className="text-blue-500" />
                {user.location}
              </span>
              <p className="mb-5 max-w-[420px] text-base text-neutral-400 sm:mb-2">
                {user.bio}
              </p>
              <ul className="flex gap-3 md:flex-col md:gap-1">
                <li className="mt-5 flex items-center gap-1 text-lg text-blue-500 after:ml-3 after:h-7 after:w-[2px] after:bg-blue-500 after:content-[''] last:w-[0] md:mt-[0.5rem] md:after:hidden">
                  <UsersThree size={20} weight="fill" />
                  <span className="text-blue-700">
                    {user.followers} Followers
                  </span>
                </li>
                <li className="mt-5 flex items-center gap-1 text-lg text-blue-500 after:ml-3  after:h-7 after:w-[2px] after:bg-blue-500 after:content-[''] md:mt-[0.5rem] md:after:hidden">
                  <span className="text-blue-700">
                    {user.following} Following
                  </span>
                </li>
                <li className="mt-5 flex items-center gap-1 text-lg text-blue-500 after:ml-3 after:h-7 after:w-[2px] after:bg-blue-500 after:content-[''] md:mt-[0.5rem] md:after:hidden">
                  <span className="text-blue-700">
                    {user.public_gists} Gists
                  </span>
                </li>
                <li className="mt-5 flex items-center gap-1 text-lg text-blue-500 after:ml-3 after:h-7 after:bg-blue-500 after:content-[''] md:mt-[0.5rem] md:after:hidden">
                  <span className="text-blue-700 ">
                    {user.public_repos} Repositorios
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex  w-[420px] flex-1 flex-col items-end justify-start gap-2 text-blue-400  hover:text-blue-500 lg:flex-row lg:items-start md:w-[303px] ">
              <ItemLink
                aria-label="Link para o Twitter do usuário"
                icon={
                  <TwitterLogo
                    size={23}
                    weight="fill"
                    className=" text-blue-400 transition-colors hover:text-blue-500"
                  />
                }
                link={`https://twitter.com/${user.twitter_username}`}
              />
              <ItemLink
                aria-label="Link para o LInkedin do usuário"
                icon={
                  <LinkedinLogo
                    size={23}
                    weight="fill"
                    className=" text-blue-400 transition-colors hover:text-blue-500"
                  />
                }
                link={user.blog}
              />

              <ItemLink
                aria-label="Email do usuário"
                icon={
                  <Envelope
                    size={23}
                    weight="fill"
                    className=" text-blue-400 transition-colors hover:text-blue-500"
                  />
                }
                link={`mailto:${user.email}`}
              />
            </div>
          </div>
          <h2 className="mb-8 flex w-full text-5xl  text-blue-700 lg:justify-center md:text-3xl ">
            Repositórios
          </h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {repos &&
              repos.map((repo) => (
                <ItemLI
                  key={repo.id}
                  name={repo.name}
                  fullName={repo.full_name}
                  html_url={repo.html_url}
                  language={repo.language}
                  forks={repo.forks}
                  stargazers_count={repo.stargazers_count}
                  visibility={repo.visibility}
                  description={repo.description}
                />
              ))}
          </ul>
        </Container>
      </article>
    )
  return null
}

export default Profile
