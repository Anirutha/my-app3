
import Base from '../Base/Base'

import { useHistory } from 'react-router-dom';
//function
function Students({students, setStudents}) {
   const history = useHistory();
    // delete functionality
    const deleteStudent = async (studId)=>{
      
      const response = await fetch(`https://6427aa3446fd35eb7c437e60.mockapi.io/students/${studId}`, {
         method:"DELETE",
      });

      const data = await response.json()
     if(data){
       const remainingStudents = 
       students.filter((stud, idx)=> stud.id !== studId)
       setStudents(remainingStudents)
     }
    }

  
  return (
    <Base 
    title={"Students Dashboard"}
    description={"The page contains all students data"}
    >

         <div className='card-container'>
            {students.map((stud, idx)=>(
                     <div className='card' key={idx}>
                        <div className='content'>
                     <h3>{stud.name}</h3>
                     <p>{stud.batch}</p>
                     <p>{stud.gender}</p>
                     <p>{stud.qualification}</p>
                     </div>

                     <div className='control'>
                     <button onClick={()=>history.push(`/edit/${stud.id}`)}>edit</button> {" "}
                     <button onClick={()=>deleteStudent(stud.id)}>delete</button>
                     </div>
                    </div>
            ))}
     </div>

    </Base>
  )
}

export default Students

