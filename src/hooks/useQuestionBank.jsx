import { useEffect } from "react"
import { useSelector } from "react-redux"

const useQuestionBank = ()=>{
    const {questions, currentQuestionIndex, is360RecordingCompleted, check360, recordState} = useSelector((state) => state.rootReducer.interviewPage);
    useEffect(()=>{

    },[recordState,])
}