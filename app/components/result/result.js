import React, { Component } from 'react'
import styles from './result.scss'
import connect from 'Redux/connect'
import { transformMarkdown } from 'Util/markdown'

const mapDefinitions = defs => defs.map((def, i) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: `${defs.length < 2 ? '' : ++i + '.'} ${transformMarkdown(def)}`}}
      key={i}
    />
  )
})

class Result extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { chapter, definitions, info, latin } = this.props.word
    return (
      <div
        className={styles.result}
      >
        <div>
          <span className={styles.latin}>{ latin + ' ' }</span>
          <span className={styles.info}>{ info }</span>
        </div>

        <div className={styles.definitions}>
          { mapDefinitions(definitions) }
        </div>
        <div className={styles.chapter}>
          { chapter }
        </div>
      </div>
    )
  }
}

export default connect(Result)
