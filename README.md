# 원티드 프리온보딩 코스

React와 Tailwind를 사용하여 원티드 프리온보딩 코스 선발과제 중 3 가지를 구현해 보았습니다.

모든 과정이 쉽지 않았으며, 그 중 애니메이션을 구현하는 것이 가장 어려웠습니다.

## - Toggle.js
![Toggle](https://user-images.githubusercontent.com/87752210/164168610-e066332d-6b60-41b5-902b-0a9be3216c3b.gif)

> **핵심 요소 : 버튼을 누를 때 마다 선택된 항목이 변한다.**
>
> **부가 요소 : 슬라이드 애니메이션**

React의 useState를 사용해 토글 상태를 boolean 타입으로 정의 하였습니다.

클릭시 값이 바뀔수 있도록 onClink 이벤트를 사용하였습니다.

토글 시 움직이는 바의 위치를 relative와 absolute 속성을 통해 지정해주고, 클릭 시 바뀌는 토글 상태 값에 따라 좌우로 위치가 변할 수 있게 조건문을 사용하였습니다. transition을 이용하여 애니메이션을 부드럽게 처리하였습니다.

---

## - Tab.js
![Tab](https://user-images.githubusercontent.com/87752210/164168582-e20be4ff-4d09-44f5-b000-98342deded2d.gif)

> **핵심 요소 : 버튼을 누를 때 마다 선택된 탭이 변한다.**
>
> **부가 요소 : 슬라이드 애니메이션**

탭의 이름을 string 배열로 작성한 뒤 map 메소드를 이용해 값과 index를 받아 반복적으로 처리하였습니다.

클릭시 값이 바뀔수 있도록 onClink 이벤트를 사용하였습니다.


React의 useState를 사용해 탭 상태를 number 타입으로 정의 하여 위의 index를 받을 수 있으며, 클릭한 탭의 index와 같은 탭만 불투명도를 100으로 바뀔 수 있게 하었습니다.

선택된 탭에 따라 하단 바의 위치가 움직이도록 tab의 상태에 따라 Tailwind의 left 클래스가 변할 수 있게 조건문을 사용하였습니다. transition을 이용하여 애니메이션을 부드럽게 처리하였습니다.

조건문을 줄일 수 있는 방법이 더 있을 것 같습니다.

---
## - Input.js
![Input](https://user-images.githubusercontent.com/87752210/164168547-16f5a2c9-57e0-4d56-99eb-4dfaf88d59d4.gif)

> **핵심 요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다**
>
> **부가 요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시**
>
> **부가 요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다**


이메일과 비밀번호에 각각 useState를 사용하였습니다.

이메일은 onChange 이벤트와 정규식을 이용하여 입력 시 이메일 형식에 맞는지 검사할 수 있도록 하였습니다. react-icons의 AiFillCheckCircle 이미지를 바탕으로 이메일 형식에 맞는지 여부에 따라 색이 바뀔 수 있게 조건문을 사용하였습니다.

비밀번호의 숨김 여부를 바꿀 수 있게 input 태그의 type이 동적으로 변할 수 있게 하였고, react-icons의 ImEye과 ImEyeBlocked 이미지를 사용하여 span 태그로 onClick 이벤트를 감지할 수 있게 하여 클릭 시 이미지와 input 태그의 type이 바뀌도록 하였습니다.

---


