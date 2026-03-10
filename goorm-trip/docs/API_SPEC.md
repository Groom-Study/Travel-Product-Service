# 📑 API 기능 명세서 (API Specification)

본 문서는 **Goorm Trip** 서비스의 백엔드 API 규격을 정의합니다. 모든 요청은 AWS API Gateway를 통해 처리되며 Lambda 함수로 라우팅됩니다.

---

## 1. 개요
* **Base URL**: `https://[api-gateway-id].execute-api.ap-northeast-2.amazonaws.com/prod`
* **Content-Type**: `application/json`

---

## 2. Endpoints

### [GET] 여행 상품 목록 조회
전체 여행 상품 리스트를 가져오거나, 쿼리 파라미터를 통해 특정 조건의 데이터를 필터링하여 반환합니다.

#### 🛠 요청 파라미터 (Query Parameters)
| 명칭 | 타입 | 필수 여부 | 설명 |
| :--- | :--- | :--- | :--- |
| `category` | String | 선택 | 대륙별 필터 (예: 아시아, 유럽, 북미, 아프리카 등) |
| `search` | String | 선택 | 상품 이름 검색 키워드 (부분 일치 검색 가능) |

#### ✅ 응답 데이터 (Success 200 OK)
```json
[
  {
    "id": 1,
    "name": "에펠탑 투어",
    "category": "유럽",
    "price": 150000,
    "image": "https://example.com/images/eiffel.jpg"
  },
  {
    "id": 2,
    "name": "도쿄 디즈니랜드",
    "category": "아시아",
    "price": 85000,
    "image": "https://example.com/images/disney.jpg"
  }
]

---

3. 에러 대응 (Error Handling)
상태 코드 / 의미 / 원인
403 Forbidden / 권한 없음 /API Gateway의 CORS 설정 미비 또는 인증 실패
404 Not Found / 경로 오류 / 잘못된 API 엔드포인트 호출
500 Internal Server Error / 서버 오류 / Lambda 코드 실행 중 런타임 에러 발생
---
