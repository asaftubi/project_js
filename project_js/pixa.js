const main=()=>{
    arrayOfAnimals(animals);
}

const h1 = document.querySelector("#h1Id");
h1.innerHTML = "Pixa bay";
const input = document.querySelector("#inputId");
const button = document.querySelector("#btnId");
button.innerHTML = "search";
let Name = "tiger"




function handleSearch() {
    Name = input.value;
    fetchData(Name);
}

button.addEventListener('click', handleSearch);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});



const animals = [
    "lion", "tiger", "elephant", "giraffe", "zebra", "monkey", "bear", "panda", "kangaroo", "koala",
    "wolf", "fox", "deer", "rabbit", "squirrel", "hedgehog", "otter", "beaver", "raccoon", "skunk",
    "dolphin", "whale", "shark", "octopus", "seal", "penguin", "eagle", "hawk", "owl", "parrot",
    "peacock", "flamingo", "ostrich", "bat", "frog", "crocodile", "alligator", "snake", "lizard", "chameleon",
    "antelope", "buffalo", "camel", "donkey", "horse", "goat", "sheep", "cow", "pig", "chicken"
];



const arrayOfAnimals =(animals)=>{
    for(let i = 0;i < animals.length; i++){
        const button = new Button(animals[i]);
        button.render();
    }
}



const fetchData=(Name)=>{
    fetch('https://pixabay.com/api/?key=44413602-03090474cfeb1d7aa99f1be47&q=' + Name + '&image_type=photo')
    .then(Response => Response.json())
    .then(data => {
        console.log('success:', data.hits)
        cardsGenertor(data.hits)
    })
}



const cardsGenertor=(arr)=>{
    allCards.innerHTML = "";
    for(let i = 0; i < 20;i++){
        const card = new Card(arr[i].tags,arr[i].downloads,arr[i].views, arr[i].webformatURL, arr[i].pageURL);
        card.render();
    }
}


main();