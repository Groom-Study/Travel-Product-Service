# ✈️ Goorm Trip: 세계 여행 상품 커머스 서비스

![Main Screenshot](c:\Users\배윤상\Desktop\스크린샷 2026-03-10 141818.png,c:\Users\배윤상\Desktop\스크린샷 2026-03-10 141843.png)

> **React**와 **AWS Lambda**를 연동하여 구현한 실시간 여행 상품 검색 및 필터링 커머스 서비스입니다.  
> 단순한 프론트엔드 구현을 넘어, 클라우드 서버리스 아키텍처를 연동한 **Full-Stack 연결**에 집중했습니다.

---

## 🛠 Tech Stack

| 구분 | 기술 스택 |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white) |
| **Backend** | ![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat-square&logo=aws-lambda&logoColor=white) ![Amazon API Gateway](https://img.shields.io/badge/API_Gateway-FF4F8B?style=flat-square&logo=amazon-api-gateway&logoColor=white) |
| **Deployment** | ![Amazon S3](https://img.shields.io/badge/Amazon_S3-569A31?style=flat-square&logo=amazons3&logoColor=white) |

---

## 📺 핵심 구현 기능

### 1. Serverless API 연동 (Full-Stack Connect)
* **AWS Lambda & API Gateway**: 서버를 직접 상시 가동하지 않고 요청 시에만 동작하는 서버리스 아키텍처를 구축하여 10개의 여행 상품 데이터를 안정적으로 서빙합니다.
* **CORS Policy 트러블슈팅**: 브라우저 보안 정책인 CORS 이슈를 API Gateway의 CORS 구성 및 Lambda 응답 헤더 설정을 통해 직접 해결하며 네트워크 통신 구조를 이해했습니다.

### 2. 실시간 상품 검색 및 필터링
* **Dynamic Search**: 유저가 입력하는 키워드에 따라 실시간으로 상품 목록이 업데이트되는 검색 기능을 구현했습니다.
* **Category Filtering**: 대륙별(유럽, 아시아, 북미, 아프리카 등) 카테고리 필터를 통해 원하는 지역의 상품만 빠르게 선별할 수 있습니다.

### 3. 정교한 UI 및 스타일링
* **Styled-components**: 컴포넌트 기반 스타일링을 통해 재사용성을 높였으며, Transient Props(`$active`)를 활용해 동적 스타일링 시 발생하는 DOM 속성 경고를 최적화했습니다.
* **Responsive Grid Layout**: CSS Grid를 활용하여 다양한 디바이스 환경에서도 안정적으로 보이는 상품 카드 레이아웃을 구축했습니다.

---

## 🏗 프로젝트 아키텍처



```plaintext
사용자 브라우저 (React) <---> API Gateway <---> AWS Lambda (Node.js)
       ^                                            |
       |                                            v
    S3 호스팅                                  상품 데이터(JSON)


---

## 💡 기술적 도전 및 성장 포인트 (TIL)

* **CORS 에러 해결 및 네트워크 보안 이해**: 브라우저에서 발생하는 `No 'Access-Control-Allow-Origin'` 에러를 해결하기 위해 AWS API Gateway의 CORS 구성과 Lambda 응답 헤더 설정을 직접 조율했습니다. 이 과정에서 프론트엔드와 백엔드 간의 보안 규약 및 HTTP 통신 구조를 깊이 있게 학습했습니다.

* **Serverless Cloud Infrastructure 경험**: AWS의 **S3(정적 웹 호스팅)**, **Lambda(서버리스 함수)**, **API Gateway(REST API)**를 유기적으로 연결하여 인프라를 직접 구축했습니다. 이를 통해 클라우드 기반의 서비스 배포 프로세스와 서버 유지보수 비용 최적화의 이점을 경험했습니다.

* **복합 상태를 활용한 데이터 필터링 로직**: `searchTerm`(검색어)과 `category`(카테고리)라는 두 가지 독립적인 상태(State)를 조합하여 실시간으로 결과물을 도출하는 필터링 로직을 구현했습니다. 데이터가 바뀔 때마다 복잡한 계산을 수행하는 대신, 선언적인 함수형 프로그래밍 방식을 사용하여 코드의 가독성과 유지보수성을 높였습니다.

---

### 🚀 배포 주소
[여기에 본인의 S3 엔드포인트 주소를 입력하세요](http://goorm-trip-service.s3-website.ap-northeast-2.amazonaws.com)
