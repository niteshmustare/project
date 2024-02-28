import { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import { Button, Container, Table, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllQuizes } from "../../Service/EduQuiz";

export function GetAllQuiz() {
  const [quiz, setQuiz] = useState([]);
  const [selectedQuiz, setSelectdQuiz] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  const [qId, setQId] =useState('') ;
  const role = localStorage.getItem('role');

  async function populateUserState() {
    try {
      const result = await getAllQuizes();
      console.log(result);
      setQuiz(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populateUserState();
  }, []);

  const openModalDialog = (quizId) => {
    setSelectdQuiz(quizId);
    setShowDialog(true);
  };

  const closeModalDialog = () => {
    setShowDialog(false);
  };

  const handleQuizDelete = async (quizId) => {
    // Perform delete operation using quizId
    // ...

    closeModalDialog();
    // Refresh the quiz list or perform any necessary actions
    populateUserState();
  };

  const handleViewQuiz = (quizId) => {
    sessionStorage.setItem("quizId", quizId);

    
    navigate('/card6');
  };

  const handleAddQuestionToQuiz = (quizId) => {
    sessionStorage.setItem("quizId", quizId);
    navigate('/card5');
  }

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {quiz.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.title}</td>
                <td>
                <Button
                    variant="primary"
                    onClick={() => handleViewQuiz(q.id)}
                  >
                    View
                  </Button>
                  {" "}
                {role !== 'STUDENT' && (
                      <>
                      
                      <Button
                     onClick={() => {                     
                      handleAddQuestionToQuiz(q.id);
                    }}
                  >
                    Add questions 
                  </Button> {"  "}
                  {/* <Button
                        variant="danger"
                        onClick={() => openModalDialog(q.id)}
                      >
                        Delete Quiz
                      </Button> */}
                     
                      </>
                    )}
                  {"   "}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete Quiz with ID {selectedQuiz}?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => handleQuizDelete(selectedQuiz)}
          >
            Yes
          </Button>
          <Button variant="danger" onClick={closeModalDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
