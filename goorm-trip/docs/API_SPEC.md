📑 API 기능 명세서 (API Specification)
1. 개요
Base URL: https://[api-gateway-id].execute-api.ap-northeast-2.amazonaws.com/prod

Content-Type: application/json

2. Endpoints
[GET] 여행 상품 목록 조회
전체 여행 상품 리스트를 가져오거나, 쿼리 파라미터를 통해 데이터를 필터링합니다.

요청 파라미터 (Query Parameters)
| 명칭 | 타입 | 필수 여부 | 설명 |
| :--- | :--- | :--- | :--- |
| category | String | 선택 | 대륙별 필터 (예: 아시아, 유럽, 북미 등) |
| search | String | 선택 | 상품 이름 검색 키워드 |

응답 데이터 (Success 200 OK)
[
  {
    "id": 1,
    "name": "에펠탑 투어",
    "category": "유럽",
    "price": 150000,
    "image": "https://..."
  },
  ...
]

3. 에러 대응 (Error Handling)
상태 코드 / 의미 / 원인
403 Forbidden / 권한 없음 /API Gateway의 CORS 설정 미비 또는 인증 실패
404 Not Found / 경로 오류 / 잘못된 API 엔드포인트 호출
500 Internal Server Error / 서버 오류 / Lambda 코드 실행 중 런타임 에러 발생