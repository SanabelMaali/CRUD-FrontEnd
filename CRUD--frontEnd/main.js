

var coursename=document.getElementById('coursename')
var coursecatogery=document.getElementById('coursecatogery')
var courseprice=document.getElementById('courseprice')
var coursedescription=document.getElementById('coursedescription')
var coursecapacity=document.getElementById('coursecapacity')
var addbtn=document.getElementById('click')
var data=document.getElementById('data')
var deleteall=document.getElementById('deleteall')
var search=document.getElementById('search')
var courses=[]

addbtn.onclick=function(evnt){
    evnt.preventDefault();
    var course={
        coursename: coursename.value,
        coursecatogery: coursecatogery.value,
        courseprice: courseprice.value,
        coursedescription: coursedescription.value,
        coursecapacity: coursecapacity.value


    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your course has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    console.log(course);
    courses.push(course)
    console.log(courses);
    clearinputs();
    displaydata();
}

function clearinputs(){
    coursename.value=''
    coursecapacity.value=''
    coursecatogery.value=''
    courseprice.value=''
    coursedescription.value=''
}

function displaydata(){
    result='';
    for(var i=0;i<courses.length;i++){
    result+= `
    <tr>
    <td>${i+1}</td>
    <td>${courses[i].coursename}</td>
    <td>${courses[i].coursecatogery}</td>
    <td>${courses[i].courseprice}</td>
    <td>${courses[i].coursedescription}</td>
    <td>${courses[i].coursecapacity}</td>
    <td><Button class="btn btn-danger" onclick="deletecourse(${i})" >delete</Button></td>
    <td><Button class="btn btn-info" onclick="getcourse(${i})"  >update</Button></td>
    </tr>
    `
    }
    data.innerHTML =result;
}

function deletecourse(index){
    
    
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(index,1);
            displaydata()
          Swal.fire(
            'Deleted!',
            'Course has been deleted.',
            'success'
          )
        }
      })
}

deleteall.onclick=function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed)
         {
            courses=[];
            data.innerHTML='';
          Swal.fire(
            'Deleted!',
            'All data has been deleted.',
            'success'
          )
        }
      })
}

search.onkeyup= function(){
  var result='';
  console.log('test') 
  for(var i=0; i<courses.length; i++){
    if(courses[i].coursename.toLowerCase().includes(search.value.toLowerCase())){
      result+= `
    <tr>
    <td>${i+1}</td>
    <td>${courses[i].coursename}</td>
    <td>${courses[i].coursecatogery}</td>
    <td>${courses[i].courseprice}</td>
    <td>${courses[i].coursedescription}</td>
    <td>${courses[i].coursecapacity}</td>
    <td><Button class="btn btn-danger" onclick="deletecourse(${i})" >delete</Button></td>
    <td><Button class="btn btn-info">update</Button></td>
    </tr>
    `
    }
  }
    data.innerHTML =result;
}


function getcourse(index){
  var course=courses[index];
  coursename.value=course.coursename ;
    coursecapacity.value=course.coursecapacity;
    coursecatogery.value=course.coursecatogery;
    courseprice.value=course.courseprice;
    coursedescription.value=course.coursedescription;
}



    