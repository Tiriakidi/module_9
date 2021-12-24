function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
};
  
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result-task3');
  
function displayResult(apiData) {
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
  resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
document.querySelector('.j-btn-task3').addEventListener('click', () => {
    const inputValue = Number.parseInt(document.querySelector('.inpt-task3').value);
    if (isNaN(inputValue)) {
        resultNode.innerHTML = "введите число";
    } else if (inputValue > 0 && inputValue < 11) {
        const urlToFind = `https://picsum.photos/v2/list?limit=${inputValue}`;
        useRequest(urlToFind, displayResult);
    } else {
        resultNode.innerHTML = "число вне диапазона от 1 до 10";
    }  
})