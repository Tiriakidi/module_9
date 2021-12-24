const json = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
/* Этап 2. Получение данных */
const data = JSON.parse(json);
const list = data.list
   
/* Этап 3. Запись данных в результирующий объект */
function jsonSave(dataToSave){
  const result = []
  for (let i = 0; i < list.length; i++) {
    medResult = {
      name: list[i].name,
      age: list[i].age,
      prof: list[i].prof
    }
    result.push(medResult)
  }
  return {list: result}
}


document.querySelector('.j-btn-task2').addEventListener("click", () => {
console.log(jsonSave(list))
})