const chartsEl = document.querySelectorAll(".spending__chart");

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let maxHeight = 0;
        for(let i = 0; i < data.length; ++i){
            chartsEl[i].style.height = ((data[i].amount / 100) * 15) + "rem"
            if(data[i].amount > maxHeight){
                maxHeight = data[i].amount;
            }
        }

        data.forEach(function callback(value, index){
            if(value.amount == maxHeight){
                chartsEl[index].classList.add("spending__chart--high")
            }
        })
    })    
