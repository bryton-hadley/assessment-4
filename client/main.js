const complimentBtn = document.getElementById("complimentButton")

//grabing the fortuneButton and settiing a variable
const fortuneBtn = document.getElementById('fortuneButton')

const loginBtn = document.getElementById('getLoginButton')

const dropDwon = document.getElementById('Submit')

const deleteBtn = document.getElementById('deleteButton')
// Setting the base url 
const baseURL = `http://localhost:4000/api`



const getCompliment = () => { 
     axios.get(`${baseURL}/compliment/`)
    .then(res => {
            const data = res.data;
            alert(data);
    });
};


//  going to create a function that takes in an empty param and use a .then the grab the data

const getFortune = () => {
    axios.get(`${baseURL}/fortune/`)
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

//setting up the function for the login

const getLogin = () => {
    axios.get(`${baseURL}/logIn/`)
    .then(res => {
        const data = res.data;
        alert(data) = res.data;
    })
}

// const deleteBtn = () => {

// }
// const getDropDwn = () => {
//     axios.get(`${baseURL}/dropDown/`)
//     .then (res => {
//         const dropDwnData = res.data
//         alert(dropDwnData);
//     })
// }

// add an eventlistener to create the click action and set it to the getFortune function
complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

// dropDwon.addEventListener('click', getDropDwn)