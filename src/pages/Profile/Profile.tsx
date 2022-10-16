import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { path, pathOr, compose, applySpec, map, length } from 'ramda'
import { Loader } from 'components/Loader'
import { profileActions } from "state/profile/actions"
import { selectProfileList, selectProfileIsPending } from "state/profile/selectors"
import styles from './Profile.module.scss'

export const Profile = () => {
  const dispatch = useDispatch()
  const { username } = useParams()
  useEffect(() => {
    dispatch(profileActions.fetchUserProfile({username}))
  }, [])
  const isPending = useSelector(selectProfileIsPending)
  const {name, avatar_url, reposCount, repos} = compose(applySpec({
    name: pathOr('', ['name']),
    avatar_url: pathOr('', ['avatar_url']),
    reposCount: compose(length, pathOr([], ['repos'])),
    repos: compose(map(
      applySpec({
        name: pathOr('', ['name']),
        description: pathOr('', ['description'])
      })
    ), pathOr([], ['repos']))
  }), path([username]))(useSelector(selectProfileList))

  return (
    <div className="wrapper">
      {isPending ? 
        <Loader /> : 
        <>
          <img src={avatar_url} alt="avatar" className={styles.avatar} />
          <div className={styles.name}>{name}</div>
          <div>{`${reposCount} repo(s) total:`}</div>
          <ul className={styles.repoList}>
            {repos.map((repo) => (
              <li key={repo.name}>
                <div>{repo.name}</div>
                <div className={styles.description}>{repo.description}</div>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  )
}