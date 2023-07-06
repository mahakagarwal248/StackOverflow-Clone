import React from 'react';
import './HomeMainbar.css';
import { useLocation, useNavigate} from 'react-router-dom';
import QuestionList from './QuestionList';
import {useSelector} from 'react-redux'

const HomeMainbar = () => {
  const questionList = useSelector((state) => state.questionsReducer)
  // var questionList = [{
  //   _id: 1,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers: 3,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["java","node js","react js","mongodb"],
  //   userPosted:"mano",
  //   userId:1,
  //   askedOn:"jan 1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 2,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers: 0,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["javascript", "R", "python"],
  //   userPosted:"mano",
  //   userId:1,
  //   askedOn:"jan 1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },
  // {
  //   _id: 3,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers: 0,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["javascript", "R", "python"],
  //   userPosted:"mano",
  //   userId:1,
  //   askedOn:"jan 1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // }]

  const location = useLocation();
  const navigate = useNavigate();
    const user = 1;
    const checkAuth = () =>{
      if(user === null){
        alert("login or sign up to ask a question")
        navigate("/Auth");  
      }else{
        navigate("/AskQuestion")
      }
    }
    
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to="/AskQuestion" onClick={checkAuth} className='ask-btn'>
          Ask Question
        </button>
      </div>
      <div>
        {
          questionList.data === null ? <h1>Loading...</h1>
          : <>
            <p>{questionList.data.length} questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar