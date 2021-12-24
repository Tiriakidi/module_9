const resultNodeTask4 = document.querySelector('.j-result-task4');


document.querySelector('.j-btn-task4').addEventListener('click', () => {
    const inputValue1 = Number.parseInt(document.querySelector('.inpt-task4-1').value);
    const inputValue2 = Number.parseInt(document.querySelector('.inpt-task4-2').value);

    if (isNaN(inputValue1) || isNaN(inputValue2)) {
        resultNodeTask4.innerHTML = "введите число";
        document.querySelector("#image").removeAttribute('src');
    } else if (inputValue1 >= 100 && inputValue1 <= 300 && inputValue2 >= 100 && inputValue2 <= 300) {
        //fetch request
        fetch(`https://picsum.photos/${inputValue1}/${inputValue2}`)
            .then((response) => {
                // Объект ответа на запрос - картинка
                // поэтому использую blob()
            const result = response.blob();
            return result;
            })
            .then((data) => {
                const objectURL = URL.createObjectURL(data);
                document.querySelector("#image").src = objectURL;
                resultNodeTask4.innerHTML = "";
            })
            .catch(() => { console.log('error') });
          
    } else {
        resultNodeTask4.innerHTML = "одно из чисел вне диапазона от 100 до 300";
        document.querySelector("#image").removeAttribute('src');

    }  
})
