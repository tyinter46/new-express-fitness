const pool = require('../db')

const getAllStudents = async (req, res ) =>{
 try {
    const students = await pool.query("SELECT * from students")
  return  res.send(students.rows);
 //  console.log(req.userId) 
} catch (error) {
    console.log(error.message)
}

}

const createOneStudent = async (req, res) =>{

    try {

        const { first_name,  last_name, password, confirmPassword, email, phone, gender , date_of_birth } = req.body;

if (password !== confirmPassword){

    throw new Error("the passwords do not match")
} else {

 const newStudent = await pool.query("INSERT INTO students (first_name,  last_name, password, email, phone, gender , date_of_birth) VALUES( $1, $2, $3, $4, $5, $6, $7) RETURNING * ",
      [
        first_name,  last_name, password, email, phone, gender , date_of_birth 
       
        ]);


if (res.statusCode === 200)
    res.send('Combined schools non teacher details posted successfully');
    }
    } catch (error) {
   // res.json(error.message);
    console.log(error.message);
}

}
module.exports = { getAllStudents, createOneStudent}