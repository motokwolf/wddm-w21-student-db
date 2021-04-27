// Some data
const studentsAr = [
  {
    id: 234,
    name: { first: `Tim`, last: `Berners-Lee` },
    gpa: 3.8,
    enrolled: [ `WDDM 113`, `WDDM 114` ],
    photo: `tim-berners-lee.jpg`
  }, {
    id: 256,
    name: { first: `Grace`, last: `Hopper` },
    gpa: 3.9,
    enrolled: [ `WDDM 113`, `WDDM 114`, `WDDM 115` ],
    photo: `grace-hopper.jpg`
  }, {
    id: 263,
    name: { first: `Alan`, last: `Turing` },
    gpa: 2.3,
    enrolled: [],
    photo: `alan-turing.jpg`
  }
]


// Select the element (a <ul> in this case) that will hold all of the student records
const studentTable = document.querySelector(`#studentTable`)

const setStudentToTable = function(theArray) {

  // Clear out information that already exists
  studentTable.innerHTML = ``

  // For each of the students in our "database"
  theArray.forEach((student) => {

    // Create a list item (<li>) that is not yet added to the document
    const listItem = document.createElement(`li`)

    // Modify this new element, just like we would any other DOM element
    listItem.classList.add(`student`)
    listItem.innerHTML = `
      <img src="img/${student.photo}" alt="${student.name.first}" class="photo">
      <b>${student.name.last}, ${student.name.first}</b>
      <data value="${student.gpa }">${ student.gpa } GPA</data>
    `

    // Add the new <li> element to the document
    studentTable.appendChild(listItem)
  })

}


setStudentToTable(studentsAr)






const filterGpa = document.querySelector(`#filterGpa`)

filterGpa.addEventListener(`input`, function(event) {
  const theRange = event.target
  const theOutput = document.querySelector(`output[for="filterGpa"]`)

  theOutput.textContent = theRange.value


  // filter() is a loop!!!
  const filteredStudent = studentsAr.filter(function(student) {
    if (student.gpa >= Number(theRange.value)) {
      return true
    } else {
      return false
    }
    //return student.gpa > 3
  
  })

  setStudentToTable(filteredStudent)

})