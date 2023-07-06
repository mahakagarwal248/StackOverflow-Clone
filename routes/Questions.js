import express from 'express';
import {AskQuestion, getAllQuestions, deleteQuestion, voteQuestion, postQuestionComment} from '../controllers/Questions.js'

import auth from '../middlewares/auth.js'
const router = express.Router();

router.post('/Ask', auth, AskQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', auth, deleteQuestion);
router.patch('/vote/:id',auth, voteQuestion)
router.patch('/comment/:id',postQuestionComment)

export default router;