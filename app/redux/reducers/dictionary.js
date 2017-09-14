import dictionaryData from 'Data/words'

const initialState = []

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DICTIONARY':
      if (action.payload === '') {
        return []
      } else {
        const regex = new RegExp(`^${action.payload}.*`)
        return dictionaryData.filter(x => regex.test(x.latin))
      }
    default:
      return state
  }
}

export default dictionaryReducer
