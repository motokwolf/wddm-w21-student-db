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


// Select the range slider (filter)
const filterGpa = document.querySelector(`#filterGpa`)

// Every time the slide value changes...
filterGpa.addEventListener(`input`, function(event) {

  // The range slider
  const theRange = event.target

  // The <output> for the range (so we can see what's happening)
  const theOutput = document.querySelector(`output[for="filterGpa"]`)
  // put the range "value" in the output
  theOutput.textContent = theRange.value  

  // filter() is a loop that includes/excludes values from an array to build a new array
  //    If the callback function returns true, the value is added to the new array
  //    If the callback function returns false, the value is NOT added to the new array
  const filteredStudents = studentsAr.filter(function(student) {
    if (student.gpa >= Number(theRange.value)) {
      return true
    } else {
      return false
    }

    // Notice the above if/else can be simplified to just this...
    //return student.gpa > 3
  })

  // Go build the UI with the new filtered array
  setStudentToTable(filteredStudents)


  // Note: filteredStudents is a NEW array, not a copy of the original
  //  - This is key, because we don't want to "mutate" our dataset, or we won't be able to see those students again if the filter changes
})





// When the UI loads, build the table with all students showing (studentsAr is the full set)
setStudentToTable(studentsAr)
