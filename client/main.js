//step 1: select html element 

const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById('fortuneButton')

//selecting the camplist html element 

const getCampListbtn = document.getElementById('getCampList')
const campList = document.getElementById('displayCampList')

//setting up the add item html element

const addItem = document.getElementById('addItem')
const addForm = document.getElementById('addForm')

//setting up the delete  item html element 

const deleteInput = document.getElementById('deleteItem')
const deleteForm = document.getElementById('deleteForm')


// const delete = document.getElementById('deleteButton')


// Setting the base url 
const baseURL = `http://localhost:4000`


// step 2: Write a function for your axios reqest
const getCompliment = () => { 
     axios.get(`${baseURL}/api/compliment/`)
    .then(res => {
            const data = res.data;
            alert(data);
    });
};




const getFortune = () => {
    axios.get(`${baseURL}/api/fortune/`)
    .then(res => {
        const data = res.data;
        alert(data);
    });
};


const getCampList = () => {
    axios.get(`${baseURL}/api/camplist`)
    .then((res) => {
        
        console.log(res.data)

        const campItem = res.data
        campList.innerHTML = ''

        for(let i = 0; i < campItem.length; i++) {
            let newItem = document.createElement('li')
            newItem.textContent = campItem[i]
            campList.appendChild(newItem)
        }
        
    })
    .catch((error) => {
        console.log(error)
    })
}

const addNewItem = (event) => {
    event.preventDefault()

    let addCampItem = {
        
        item: addItem.value

    }
    axios.post(`${baseURL}/api/addCamplist`, addCampItem)
    .then((res) => {

        console.log(res.data)

       
        const campItem = res.data
        campList.innerHTML = ''

        for(let i = 0; i < campItem.length; i++) {
            let newItem = document.createElement('li')
            newItem.textContent = campItem[i]
            campList.appendChild(newItem)
        }

        addItem.value = ''

    })
    .catch((error) => {
        
        console.log(error)

    })

}



const deleteItem = (event) => {

    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteCamplist/${deleteInput.value}`)
    .then((res) => {

        console.log(res.data)

       
        const campItem = res.data
        campList.innerHTML = ''

        for(let i = 0; i < campItem.length; i++) {
            let newItem = document.createElement('li')
            newItem.textContent = campItem[i]
            campList.appendChild(newItem)
        }

        deleteInput.value = ''
    })
}


// Step 3: combine with event listener 
complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

// combining with event listener for the camping list

getCampListbtn.addEventListener('click', getCampList)

// setting upp the add eventlistener for the submit form 
addForm.addEventListener('submit', addNewItem)

// combine with event listener for the delete item form 
deleteForm.addEventListener('submit', deleteItem)