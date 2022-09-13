const complimentBtn = document.getElementById("complimentButton")

//grabing the fortuneButton and settiing a variable
const fortuneBtn = document.getElementById('fortuneButton')

const Campitembtn = document.getElementById('addCampItem')

// Setting the base url 
const baseURL = `http://localhost:4000`



const getCompliment = () => { 
     axios.get(`${baseURL}/api/compliment/`)
    .then(res => {
            const data = res.data;
            alert(data);
    });
};


//  going to create a function that takes in an empty param and use a .then the grab the data

const getFortune = () => {
    axios.get(`${baseURL}/api/fortune/`)
    .then(res => {
        const data = res.data;
        alert(data);
    });
};


const postCampItem = () => {
    
}


// add an eventlistener to create the click action and set it to the getFortune function
complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

