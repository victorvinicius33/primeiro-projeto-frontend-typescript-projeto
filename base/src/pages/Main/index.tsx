import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import api from '../../services/api';
import Teacher from '../../types/Teachers';
import './styles.css';

function Main() {
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);

  async function loadTeachers() {
    try {
      const response = await api.get('/teachers');

      setAllTeachers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <div className='container'>
      <Header />

      <div className='main-teachers'>
        {allTeachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
