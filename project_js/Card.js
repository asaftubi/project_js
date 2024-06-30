class Card {
    constructor(tags,download,views,image,pageURL){
        this.tags = tags;
        this.download = download;
        this.views = views;
        this.image = image;
        this.pageURL = pageURL;
    }

    render(){
        const allCards = document.querySelector("#allCards")
        const card = document.createElement("div")
        card.classList = "card col-3 m-5"
        card.innerHTML = `  <img src="${this.image}" class="card-img-top w-100" alt="..." style="height: 250px; object-fit: cover;">
        <div class = "card-body">
        <h5 class = card-title>${this.tags}</h5>
        <p class = "card-text">${this.download}</p>
        <p class = "card-text">${this.views}</p>
        <a target=_blank    href="${this.pageURL }" download class="btn btn-primary">Download</a>
        </div>`;
        const btn = card.querySelector('button')
        
        allCards.append(card);
        }
}