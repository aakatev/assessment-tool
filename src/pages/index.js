import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import axios from "axios"

const STATUS = {
  LOADING: 'loading',
  LOADED: 'loaded'
}

const IndexPage = () => {
  const [status, setStatus] = useState(STATUS.LOADING)
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    let canceled = false
    if(status !== STATUS.LOADING) return

    axios('/api/get-all-questions').then(result => {
      if(canceled === true) return

      if(result.status !== 200) {
        console.error('Error loading question!', result)
        return
      }
      setQuestions(result.data.questions)
      setStatus(STATUS.LOADED)
    })

    return () => { canceled = true }
  }, [status])

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Container className="text-center">
        <h1>Questions</h1>
        {questions? (
          <>
          {questions.map((question, index) => <Question index={index} text={question.text} options={question.options} answer={question.answer}  key={question._id}/>)}
          </>
        ) : (
          <>
            Loading questions...
          </>
        )}

        
      </Container>
    </Layout>
  )
}

export default IndexPage
