import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { profileActions } from 'state/profile/actions'
import { Button } from 'components/Button'
import { Input } from 'components/Input'

export const Search = () => {
  const dispatch = useDispatch()
  const [term, setTerm] = useState('')
  const InputRef = useRef(null)

  useEffect(() => {
    if (InputRef.current) {
      InputRef.current.focus()
    }
  }, [InputRef.current])

  const handleChange = (evt) => {
    setTerm(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(profileActions.fetchUserProfile({username: term}))
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <Input 
          innerRef={InputRef}
          value={term}
          onChange={handleChange}
          placeholder="github username"
          data-cy="username"
        />
        <Button 
          type="submit" 
          onClick={handleSubmit}
          disabled={!term}
          data-cy="submit"
        >
          Search
        </Button>
      </form>
    </div>
  )
}