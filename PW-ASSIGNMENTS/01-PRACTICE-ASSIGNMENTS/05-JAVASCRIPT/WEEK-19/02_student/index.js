class Student{
    constructor(name, id){
        this.name = name
        this.id = id
        this.courses = [] // to store enrolled courses
        this.students = [] // to store enrolled students
        this.ids = [] // to store the IDs of enrolled students
    }

    showCourses(){
        console.log(`${this.name}'s enrolled in ${this.courses}.`);
    }
}

class Admission extends Student{

    constructor(){
        super()
    }
    
    enrollStudent(student){
        console.log(`${student.name} has been enrolled!`);
        this.students.push(student.name) // update the enrolled students array
        this.ids.push(student.id) // update the IDs array
    }

    assignCourse(student, course){
        console.log(`${student.name} has been assigned the course: ${course}`);
        student.courses.push(course) // I wrote this in order to update the array of that particular student
    }

    showEnrolledStudents(){
        console.log("Enrolled Students: ")
       for (let i = 0; i < this.students.length; i++) {
        console.log(`
        - ${this.students[i]} (${this.ids[i]})
            `)
       }
    }
}

const admissionOffice = new Admission()

const student1 = new Student("Ritik", "rtk@pw.live")
const student2 = new Student("Sonali", "sonali@pw.live")
const student3 = new Student("Sunena", "Sunena@pw.live")

admissionOffice.enrollStudent(student1)
admissionOffice.enrollStudent(student2)
admissionOffice.enrollStudent(student3)

admissionOffice.assignCourse(student1, "Full Stack Web Development")
admissionOffice.assignCourse(student2, "Data Science Masters")

student1.showCourses()
student2.showCourses()

admissionOffice.showEnrolledStudents()