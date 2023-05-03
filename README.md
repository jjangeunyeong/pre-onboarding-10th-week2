# 2주차 과제


## 💡 목표
> **검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현**

![UI](https://user-images.githubusercontent.com/123078739/236059214-cfff5546-14e5-48f7-ac1e-3799a8abef7d.png)

## 목차

- [Week2](#-2주차-과제)
  - [💡 목표](#️-💡-목표)
  - [목차](#목차)
  - [💡 폴더 구조](#️-💡-폴더-구조)
  - [💡 기능 구현 및 솔루션](#-💡-기능-구현-및-솔루션)
  - [💡 기술 스택](#-💡-기술-스택)
  - [💡 실행 방법](#️-💡-실행-방법)


## 💡 폴더 구조

```
📦 src
├── 📂 assets
├── 📂 components
│ ├── 📂 RelatedSearchArea  
│ ├── 📂 SearchArea        
│ ├── 📂 SearchBtn
│ └── 📂 Title
├── 📂 hooks
├── 📄 App
├── 📄 GlobalStyle
├── 📄 main
└── 📂 styles
```


## 💡 기능 구현 및 솔루션

* 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    - 검색어가 없을 시 “검색어 없음” 표출

* API 호출별로 로컬 캐싱 구현    
     - cacheStorage 이용
     - 요청 URL을 키 값으로 response를 storage 저장해두고, keyword가 변경될 때마다 매치되는 결과가 있는지 확인하는 방식
     - 매치되는 결과가 있는 경우 cache storage의 값을 이용, 매치되는 결과가 없는 경우에만 API 호출이 발생
     
<img width="342" alt="스크린샷 2023-05-04 072818" src="https://user-images.githubusercontent.com/123078739/236064323-5ce14341-5069-4db9-9bcf-7a583432b1dd.png"><br /> 

     - debounce 기법을 활용하여 매번 호출이 일어나는 것이 아닌 검색이 되고 0.5초 간격으로 위의 과정을 실행
      
<img width="203" alt="스크린샷 2023-05-04 073040" src="https://user-images.githubusercontent.com/123078739/236064801-c455c4a1-41be-425b-8448-be81a8f60524.png">   


* 키보드만으로 추천 검색어들로 이동 가능하도록 구현    
     - const [focusIdx, setFocusIdx] = useState(-1)의 focusIdx state를 이용   
     - input의 onKeyDown 속성에 위 방향키, 아래 방향키, Esc, Enter 키를 눌렀을 때 setFocusIdx를 설정해주도록 하여 키보드로 추천 검색어를 이동할 수 있음
     
<img width="374" alt="스크린샷 2023-05-04 073503" src="https://user-images.githubusercontent.com/123078739/236065544-b7ad3d35-94f0-4b28-9e09-3e57c1f7bf9e.png"> 

      

## 💡 기술 스택

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg)
![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)

## 💡 실행 방법

```
npm install
npm run dev
```

