import cx from "classnames"
import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={cx("wrapper", styles.container)}>
      404
    </div>
  )
}