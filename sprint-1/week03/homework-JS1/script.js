
let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

let p = document.createElement('p');
p.textContent = 'Тест по программированию';
p.style.fontSize = "24px";
p.style.marginLeft = '120px';
container.append(p);


let form = document.createElement('form');
p.after(form);

let quiz = {
    ['Вопрос №1']: {
        ['Вариант ответа №1']: {},
        ['Вариант ответа №2']: {},
        ['Вариант ответа №3']: {},
    },
    ['Вопрос №2']: {
        ['Вариант ответа №1']: {},
        ['Вариант ответа №2']: {},
        ['Вариант ответа №3']: {},
    },
    ['Вопрос №3']: {
        ['Вариант ответа №1']: {},
        ['Вариант ответа №2']: {},
        ['Вариант ответа №3']: {},
    },

}

    function createTreeDom(obj) {
      if (!Object.keys(obj).length) return;

      let ol = document.createElement('ol');

      for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = checkbox(obj[key]);
          if(childrenUl) {
          li.append(childrenUl);
          }

        ol.append(li);
      }

      return ol;
    }

function checkbox(obj) {
    let check = document.createElement('div');
    for (let key in obj) {
            check.innerHTML += `<input class="form-check-input" type="checkbox" id="check">
                    <label class="form-check-label">${key}</label><br>`;
               }
    return check;
}
   
form.append(createTreeDom(quiz));

let btn = document.createElement('button');
btn.innerHTML = "Проверить мои результаты";
btn.classList.add("btn","btn-primary","opacity-75");
btn.style.padding = '10px 20px'
btn.style.marginLeft = '160px';
form.append(btn);
    
