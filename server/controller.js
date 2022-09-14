

//seting up the camp arry to be able to use for the .post .delete .put
const campItems = ["Tent", "Wood", "SLeeping bag's", "Cooler"]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    //step 1: creating the getFortune object and giving it paramas
    getFortune: (req, res) => {
        const fortune = ['A fresh start will put you on your way.', 'A friend asks only for your time not your money.', 'A new perspective will come with the new year.', 'A golden egg of opportunity falls into your lap this month.', 'A lifetime of happiness lies ahead of you.', 'A light heart carries you through all the hard times.'];

        //setting up ramdom fortune
        let ranIndex = Math.floor(Math.random() * fortune.length);
        let ramdomFortune = fortune[ranIndex];

        res.status(200).send(ramdomFortune);
    },
    getCampList: (req, res) => {
        res.status(200).send(campItems)
       
        
    },
    addCampItem: (req,res) => {
        let {item} = req.body
        campItems.push(item)
        
        res.status(200).send(campItems)
    }

}

