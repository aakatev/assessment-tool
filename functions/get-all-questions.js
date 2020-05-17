const sendQuery = require('./utils/send-query')

const GET_ALL_QUESTIONS = `
query {
  allQuestions {
    data {
      _id
      text
      options
      answer
    }
  }
}
`

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_QUESTIONS)

  if(errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ questions: data.allQuestions.data })
  }
}