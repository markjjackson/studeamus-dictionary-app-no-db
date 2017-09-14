import React, { Component } from 'react'
import styles from './word_search.scss'
import connect from 'Redux/connect'

const search = action => e => {
  const { value } = e.target
  if (value !== '') {
    action(value)
  } else {
    action('')
  }
}

class WordSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { updateDictionary } = this.props.actions
    return (
      <input className={styles.searchInput}
        type="text"
        placeholder="Zoek een woord"
        onChange={search(updateDictionary)}
      />
    )
  }
}

export default connect(WordSearch)
