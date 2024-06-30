class Button{
    constructor(name){
        this.name = name;
    }

    render(){
        const divBtn = document.querySelector("#divBtn");
        const btn = document.createElement("button");
        btn.className = " col-1 py-1 m-2 border border-2 border-black rounded-3 btn btn-outline-secondary";
        btn.innerHTML = `
        ${this.name}
        </button>`;

        btn.addEventListener('click',()=>{
            fetchData(this.name);
        })

        divBtn.append(btn);
    }
}


