import { Folder, GitFork, Link, Star, Circle } from 'phosphor-react'

type ItemLiProps = {
  name: string
  fullName: string
  html_url: string
  forks: number
  stargazers_count: number
  visibility: string
  language: string
  description: string
}

const ItemLI = ({
  name,
  html_url,
  forks,
  visibility,
  language,
  stargazers_count,
  description
}: ItemLiProps) => {
  return (
    <li className=" w-[365px] rounded-lg  border-4 border-blue-500 bg-white p-4 shadow-md hover:border-pink-500">
      <a
        href={`${html_url}`}
        target="_blank"
        rel="noreferrer"
        className="flex h-full flex-col "
      >
        <h2 className="mb-2 flex items-center gap-1  text-base  font-medium text-blue-700">
          <Folder size={22} className="text-blue-500" />
          {name}
          <div className="flex-1">
            <small className="rounded-xl border border-blue-300 py-[0.12rem] px-2 text-xs ">
              {visibility}
            </small>
          </div>
          <Link className="hover:text-pink-500" size={22} />
        </h2>

        <p className="mb-4 text-xs ">{description}</p>
        <div className="flex h-full items-end gap-2 ">
          <span className="flex gap-1 text-xs">
            {language === 'CSS' && (
              <Circle
                size={14}
                weight="fill"
                color="#c084fc"
                className="rounded-full bg-purple-900 p-[1px]"
              />
            )}
            {language === 'JavaScript' && (
              <Circle
                size={14}
                weight="fill"
                color="#fde047"
                className="rounded-full bg-yellow-900 p-[1px]"
              />
            )}
            {language === 'HTML' && (
              <Circle
                size={14}
                weight="fill"
                color="#f97316"
                className="rounded-full bg-yellow-900 p-[1px]"
              />
            )}
            {language === 'TypeScript' && (
              <Circle
                size={14}
                weight="fill"
                color="#60a5fa"
                className="rounded-full bg-blue-900 p-[1px]"
              />
            )}
            {language}
          </span>
          <span className="flex text-xs">
            <Star size={14} color="#254273" />
            {stargazers_count}
          </span>
          <span className="flex text-xs">
            <GitFork size={14} color="#254273" />
            {forks}
          </span>
        </div>
      </a>
    </li>
  )
}

export default ItemLI
