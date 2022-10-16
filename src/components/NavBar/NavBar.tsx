import { useCallback } from "react"
import { useSelector } from "react-redux"
import cx from 'classnames'
import { path } from 'ramda'
import { history } from "state/store"
import styles from './NavBar.module.scss'

export const NavBar = () => {
  const currentSection = useSelector(path(['router', 'location', 'pathname']))
  const handleClick = useCallback(() => {
    history.push('/')
  }, [])

  return (
    <div className={styles.container}>
      <div 
        className={cx(styles.backButton, {[styles.hidden]: currentSection === '/'})}
        onClick={handleClick}
      >
        Back to Search
      </div>
      <div>Search GitHub pages</div>
    </div>
  )
}