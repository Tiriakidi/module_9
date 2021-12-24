// XML
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

// Парсинг XML

function parsingList(xml) {
  const parser = new DOMParser();
  const xmlDom = parser.parseFromString(xml, "text/xml");
  const containerNode = xmlDom.querySelector("list");
  const tagNode = containerNode.querySelectorAll("student");
  const result = [];
  for(let i = 0; i < tagNode.length; i++) {
    const nameNode = tagNode[i].querySelector("name"); 
    const firstNameNode = nameNode.querySelector("first");
    const secondNameNode = nameNode.querySelector("second");
    const ageNode = tagNode[i].querySelector("age");
    const profNode = tagNode[i].querySelector("prof");
    const nameAttr = nameNode.getAttribute("lang");
    const medResult = {
      name: firstNameNode.textContent + " " + secondNameNode.textContent,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: nameAttr
      };
    result.push(medResult)
  }
  return {list: result}
}

document.querySelector('.j-btn-task1').addEventListener("click", () => {
    console.log(parsingList(xmlString))
})

