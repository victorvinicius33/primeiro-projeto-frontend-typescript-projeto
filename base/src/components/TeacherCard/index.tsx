import { useNavigate } from 'react-router-dom';
import useTeacherDetail from '../../hooks/useTeacherDetail';
import Teacher from '../../types/Teachers';
import Avatar from '../Avatar';
import './styles.css';

type Props = {
  teacher: Teacher
}

function TeacherCard({ teacher }: Props) {
  const navigate = useNavigate();
  const { handleInsertTeacher } = useTeacherDetail();

  function handleTeacherDetail() {
    handleInsertTeacher(teacher)
    navigate('/teacher-detail');
  }

  return (
    <div 
      className='teacher-card'
      onClick={() => handleTeacherDetail()}
    >
      <Avatar image={ teacher.avatar } />
      <h1>{teacher.name}</h1>
    </div>
  )
}

export default TeacherCard;