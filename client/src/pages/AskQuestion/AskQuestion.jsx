import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {askQuestion} from '../../actions/question';
import './AskQuestion.css';

const AskQuestion = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) => (state.currentUserReducer))

    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [questionTags, setQuestionTags] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(askQuestion({questionTitle, questionBody,questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }

  return (
    <div className='ask-question'>
        <div className='ask-ques-container'>
            <h1>Ask a public question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-container'>
                    <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine you are asking a question to another person</p>
                        <input type="text" onChange={(e) => setQuestionTitle(e.target.value)} placeholder='e.g. Is there an R function forn finding the index of an element in a vector?' id="ask-ques-title" />
                    </label>
                    <label htmlFor='ask-ques-body'>
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea id='ask-ques-body' onChange={(e) => setQuestionBody(e.target.value)} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                    </label>
                    <label htmlFor='ask-ques-tags'>
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what your question is about</p>
                        <input type="text" onChange={(e) => setQuestionTags(e.target.value.split(" "))} placeholder='e.g. (xml tyepscript wordpress)' id="ask-ques-tags" />
                    </label>
                </div>
                <input type="submit" value="Review your question" className='review-btn' />
            </form>
        </div>
    </div>
  )
}

export default AskQuestion