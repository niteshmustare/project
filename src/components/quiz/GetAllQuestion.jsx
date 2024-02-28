// import React, { useEffect, useState } from "react";
// import NavigationBar from "../NavigationBar";
// import { Container, Table } from "react-bootstrap";
// import { getAllQuestion } from "../../Service/EduQuestion";

// export function GetAllQuestion() {
//     const [questions, setQuestions] = useState([]);

//     async function populateQuestionState() {
//         try {
//             const result = await getAllQuestion();
//             setQuestions(result);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         populateQuestionState();
//     }, []);

//     return (
//         <>
            
//             <Container>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Question</th>
//                             <th>Option 1</th>
//                             <th>Option 2</th>
//                             <th>Option 3</th>
//                             <th>Option 4</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {questions.map((question) => (
//                             <tr key={question.id}>
//                                 <td>{question.question}</td>
//                                 <td>{question.option1}</td>
//                                 <td>{question.option2}</td>
//                                 <td>{question.option3}</td>
//                                 <td>{question.option4}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </Container>
//         </>
//     );
// }

// export default GetAllQuestion;

import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getAllQuestion } from "../../Service/EduQuestion";
import { addQuestion } from "../../Service/EduQuiz";
//import { mapQuestionToQuiz } from "../../Service/QuizQuestion"; // Import your backend API service function

export function GetAllQuestion() {
    const [questions, setQuestions] = useState([]);

    async function populateQuestionState() {
        try {
            const result = await getAllQuestion();
            setQuestions(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateQuestionState();
    }, []);

    const handleMapQuestionToQuiz = async (questionId ) => {
        try {
            // Call the backend API to map the question to the quiz
            const quizId = sessionStorage.getItem("quizId");
            const result = await addQuestion(quizId , questionId);
            console.log(result); // Log the API response (you can handle it based on your requirements)
                alert("Question Added to quizId "+quizId);
            // Refresh the question list or perform any necessary actions
            populateQuestionState();           
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Question</th>
                            <th>Option 1</th>
                            <th>Option 2</th>
                            <th>Option 3</th>
                            <th>Option 4</th>
                            {localStorage.getItem('role') !== 'STUDENT' && (
                            <th>add to Quiz</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question) => (
                            <tr key={question.id}>
                                <td>{question.id}</td>
                                <td>{question.question}</td>
                                <td>{question.option1}</td>
                                <td>{question.option2}</td>
                                <td>{question.option3}</td>
                                <td>{question.option4}</td>
                                {localStorage.getItem('role') !== 'STUDENT' && (
                                <td>
                                
                                    <Button
                                        variant="primary"
                                        onClick={() => handleMapQuestionToQuiz(question.id)}
                                    >
                                        add
                                    </Button>
                                </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default GetAllQuestion;
