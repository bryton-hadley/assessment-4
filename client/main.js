//step 1 select html element 

const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById('fortuneButton')

const getCampListbtn = document.getElementById('getCampList')
const campList = document.getElementById('displayCampList')
const postForm = document.getElementById('postForm')
const addItem = document.getElementById('addItem')
const delete = document.getElementById('deleteButton')
// Setting the base url 
const baseURL = `http://localhost:4000`


// step two Write a function for your axios reqest
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
            newItem.textContent = campList[i]
            campList.appendChild(newItem)
        }
    })
    .catch((error) => {
        console.log(error)
    })
};

const addNewItem = (event) => {
    event.preventDefault()

    let addItem = {
        item: addItem.value
    }
    axios.post(`${baseURL}/api/camplist`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
}


// Step 3: combine with event listener 
complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

getCampListbtn.addEventListener('click', getCampList)
addItem.addEventListener('submit', addNewItem)
