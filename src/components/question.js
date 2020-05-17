import React from 'react'
import { Row, Col, ListGroup } from "react-bootstrap"

const Question = ({ index, text, options, answer}) => {
  let getAnswer = (option, event) => {
    event.persist()
    if(option === answer) {
      event.target.classList.add('list-group-item-success')
      setTimeout(function(){ event.target.classList.remove('list-group-item-success')}, 1000);
    } else {
      event.target.classList.add('list-group-item-danger')
      setTimeout(function(){ event.target.classList.remove('list-group-item-danger')}, 1000)
    }
  }
  return (
    <>
      <Row>
        <Col>
          <h3>
            {index+1}. {text}
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            {options.map((option, index) => {
              return (
                <ListGroup.Item
                  key={option+index}
                  onClick={(event)=> getAnswer(option, event)}
                  action
                >
                  {option}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}
export default Question