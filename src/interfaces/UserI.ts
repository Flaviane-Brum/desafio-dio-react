export interface IProfile {
  name: string
  avatar_url: string
  location: string
  bio: string
  blog: string
  email: string
  twitter_username: string
  login: string
  created_at: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}
export interface IRepos {
  id: number
  name: string
  full_name: string
  forks: number
  stargazers_count: number
  visibility: string
  language: string
  description: string
  html_url: string
}

// interface IOwner {
//   id: number
//   login: string
// }
