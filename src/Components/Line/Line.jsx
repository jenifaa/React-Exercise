import { LineChart, Line as Lne, XAxis, YAxis } from 'recharts';

const Line = () => {

   const subjectData = [
        { "id": 1, "name": "Student 1", "Math": 78, "Chemistry": 85, "Physics": 82 },
        { "id": 2, "name": "Student 2", "Math": 92, "Chemistry": 88, "Physics": 79 },
        { "id": 3, "name": "Student 3", "Math": 65, "Chemistry": 70, "Physics": 72 },
        { "id": 4, "name": "Student 4", "Math": 88, "Chemistry": 95, "Physics": 90 },
        { "id": 5, "name": "Student 5", "Math": 73, "Chemistry": 80, "Physics": 77 },
        { "id": 6, "name": "Student 6", "Math": 90, "Chemistry": 85, "Physics": 87 },
        { "id": 7, "name": "Student 7", "Math": 82, "Chemistry": 78, "Physics": 80 },
        { "id": 8, "name": "Student 8", "Math": 68, "Chemistry": 75, "Physics": 70 },
        { "id": 9, "name": "Student 9", "Math": 85, "Chemistry": 89, "Physics": 84 },
        { "id": 10, "name": "Student 10", "Math": 77, "Chemistry": 82, "Physics": 79 }
      ]
      

    return (
        <div>
            <LineChart width={800} height={400} data={subjectData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                  <Lne type="monotone" dataKey="Math" stroke='red'></Lne>
                  <Lne type="monotone" dataKey="Chemistry" stroke='green'></Lne>  
                  <Lne type="monotone" dataKey="Physics" stroke='purple'></Lne>
            </LineChart>       
        </div>
    );
};

export default Line;