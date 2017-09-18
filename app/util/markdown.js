import R from 'ramda'

// Transforms a markdown string into a string with basic html tags.
// String -> String
const transformMarkdown = R.pipe(
  R.replace(/\*\*(.*?)\*\*/gi, '<span style="color: #999999; text-transform: uppercase; font-size: 12px; letter-spacing: .5px; margin-right: 5px;">$1</span>'),
  R.replace(/\*(.*?)\*/gi, '<em>$1</em>'),
  R.replace(/__(.*?)__/gi, '<span style="text-decoration: underline;">$1</span>'),
  R.replace(/<script.*?\/script>/gi, '')
)

module.exports = {
  transformMarkdown
}
