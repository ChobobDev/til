---
title: 리엑트를 시작 하기 전에
sidebar_position: 1
---

> 본 TIL은 `https://nomadcoders.co/react-for-beginners/lectures/3259`를 보고 정리한 내용입니다.

리엑트를 시작하기 앞서 우리는 개발자들이 왜 React를 사용하는지 알 필요가 있습니다.
이를 확인하기 위하여 간단한 `clicker` 애플리케이션을 `vanila.js`로 구현을 해보도록 하겠습니다.

```html
<!DOCTYPE html>
<html>
    <body>
        <button>Click Me</button> 
    </body>
     <script>
         const button = document.querySelector("button");
    </script>

</html>
```
우리는 다음과 같이 버튼을 만들 수 있습니다. 하지만 버튼이 여러개인 경우에는 우리는 어는 버튼을 의미하는지 명시하기 위해 다음과 같이 id값을 줄 수 있습니다. 또한 `querySelector` 가 아닌 `getElementById`를 이용하여 우리가 원하는 버튼을 명시 할 수 있습니다.

```html
<!DOCTYPE html>
<html>
    <body>
        <button id="btn">Click Me</button> 
    </body>
     <script>
         const button = document.getElementById("button");
    </script>

</html>
```

우리는 함수를 선언하여 click하였을때 `"I have been clicked"`를 `console`에 찍도록 해보겠습니다.

```html
<!DOCTYPE html>
<html>
    <body>
        <button id="btn">Click Me</button> 
    </body>
     <script>
         const button = document.getElementById("btn");
         function handleClick(){
             console.log("I have been clicked")
         }
         button.addEventListener("click",handleClick);
    </script>

</html>
```

이번에는 clicker를 만들어 보도록 하겠습니다.

```html
<!DOCTYPE html>
<html>
    <body>
        <span>Total Clicks: 0</span>
        <button id="btn">Click Me</button> 
    </body>
     <script>
         let counter = 0;
         const button = document.getElementById("btn");
         function handleClick(){
             counter=counter+1;
         }
         button.addEventListener("click",handleClick);
    </script>

</html>
```

위 코드는 보시다 싶이 `counter`라는 값은 올라가지만 `<span>`에는 영향을 주지 못합니다. 이번에는 `<span>`을 바꾸는 코드를 만들어 보도록 하겠습니다.

```html
<!DOCTYPE html>
<html>
    <body>
        <span>Total Clicks: 0</span>
        <button id="btn">Click Me</button> 
    </body>
     <script>
         let counter = 0;
         const button = document.getElementById("btn");
         const span = document.querySelector("span");
         function handleClick(){
             counter=counter+1;
             span.innerText = `Total Clicks: ${counter}`;
         }
         button.addEventListener("click",handleClick);
    </script>

</html>
```

위 코드는 바닐라 자바스크립트로 만들어본 `clicker` 입니다. 이를 만들기 위해 우리는 너무나 많은 시간을 소비하였습니다. 애플리케이션이 커지다면 더 많은 시간이 소비될 수 있습니다. 다음 글에서는 `React.js`를 사용하여 같은 애플리케이션을 만들어 보도록 하겠습니다.