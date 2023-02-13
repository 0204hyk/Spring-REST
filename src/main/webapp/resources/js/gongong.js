const sisul = document.getElementById('sisul');
const testBtn = document.getElementById('test-btn');

const endPoint = 'http://apis.data.go.kr/3980000/grBiz';
const serviceKey = 'sFy2o58LImV%2Bf0sl4BVFGk9lWfJJRiJDOrzi96XNKK2zheZAMO6CFj0npJrfozEj8w%2FhE577OajEinziuZ9hRA%3D%3D';
const sisulId = 3585;

testBtn.addEventListener('click', (e) => {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', (e) => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const obj = JSON.parse(xhttp.responseText);

            // 여기에 공공데이터
            console.log(obj);

            // 이후에는 공공데이터로 멋있게 잘 요소를 만들어서 화면에 추가한다.
        }
    });
    xhttp.open('GET', `${endPoint}/getBizItem?serviceKey=${serviceKey}`
        + `&type=json&id=${sisulId}`);
    xhttp.send();
});