const containerSelector = document.querySelector(".container")
const generateSelector = document.querySelector(".generate");

/**mouse methods */
let mouseDownToggle = 'red';
document.addEventListener("mousedown",() => {
    mouseDownToggle = 'blue';
})
document.addEventListener("mouseup",() => {
    mouseDownToggle = 'red';
})

const newSquare = ()=>{
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    //set color change event listener
    newDiv.addEventListener("mouseover",e=>{
        e.target.style.background = mouseDownToggle;
    });
    return newDiv;
}

const newRow = ()=>{
    const newrow = document.createElement("div");
    newrow.className = "row";
    return newrow;
}

const newGenerateGrid = ( squaresPerSide = 16 )=> {
    if (inputVal.value > 0 ) {
        squaresPerSide = inputVal.value;
    }
    for (let i = 0; i < squaresPerSide; i++) {
        let nr = newRow();
        for (let j = 0; j < squaresPerSide; j++) {
            let newsq = newSquare();
            nr.appendChild(newsq);
        }    
        containerSelector.appendChild(nr);
        // console.log(`new grid generated`);    
    }
}
const resetGrid = () => {
    document.querySelectorAll(".row").forEach(q => q.remove());
}

generateSelector.addEventListener("click",()=>{
    resetGrid();
    newGenerateGrid();
})

//submit by enter functionality
const input = document.getElementById("inputVal");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    generateSelector.click();
  }
});

//generate initial grid on load
document.addEventListener('DOMContentLoaded',()=>{
    newGenerateGrid();
})

