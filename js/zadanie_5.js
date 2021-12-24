const resultNodeTask5 = document.querySelector('.j-result-task5');
const btnClear = document.querySelector('.j-clear-cache');

function showResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
            <img
            src="${item.download_url}"
            class="card-image"
            />
            <p>${item.author}</p>
        </div>
        `;
        cards = cards + cardBlock;
    });
    resultNodeTask5.innerHTML = cards;
    btnClear.innerHTML = "очистить кэш";
}

document.querySelector('.j-btn-task5').addEventListener('click', () => {
    const inputValue1 = Number.parseInt(document.querySelector('.inpt-task5-1').value);
    const inputValue2 = Number.parseInt(document.querySelector('.inpt-task5-2').value);

    const isValid = num => {
        if (!isNaN(num) && num >=1 && num <=10) {
            return true
        }
    }

    if (!isValid(inputValue1) && !isValid(inputValue2)) {
        resultNodeTask5.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (!isValid(inputValue1)) {
        resultNodeTask5.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    } else if (!isValid(inputValue2)) {
        resultNodeTask5.innerHTML = "Лимит вне диапазона от 1 до 10";
    } else {
        //fetch request
        fetch(`https://picsum.photos/v2/list?page=${inputValue1}&limit=${inputValue2}`)
            .then((response) => { 
            const result = response.json();
            return result;
            })
            .then((data) => {
                showResult(data);
                localStorage.setItem("myJSON", JSON.stringify(data));
                localStorage.setItem("page", inputValue1);
                localStorage.setItem("limit", inputValue2);
            })
            .catch(() => { console.log('error') });
            
    } 
})


btnClear.addEventListener('click', () => {   
    const myJSON = localStorage.getItem('myJSON');
    if (myJSON) {
        btnClear.innerHTML = "кэш пустой";
        localStorage.clear();    
    }        
});

window.onload = () => {    
    const myJSON = localStorage.getItem('myJSON');
    const page = localStorage.getItem("page");
    const limit = localStorage.getItem("limit")
    if (myJSON) {
        showResult(JSON.parse(myJSON));
        document.querySelector(".inpt-task5-1").value = page;
        document.querySelector(".inpt-task5-2").value = limit;
    }
};




