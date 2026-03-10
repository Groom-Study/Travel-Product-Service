# 🏗 서비스 아키텍처 설계 문서 (Service Architecture Design)

## 1. 시스템 개요
본 서비스는 인프라 관리의 부담을 줄이고 비용 효율성을 극대화하기 위해 **서버리스(Serverless)** 아키텍처를 채택했습니다. 정적 자원은 S3를 통해 호스팅되며, 동적 데이터 처리는 API Gateway와 Lambda가 담당합니다.

---

## 2. 아키텍처 다이어그램



```plaintext
[ Client Side ]          [ Cloud Infrastructure (AWS) ]
+---------------+        +------------------------------------------+
|  Web Browser  | <----> |  Amazon API Gateway (REST API Endpoint)  |
|  (React App)  |        +------------------------------------------+
+-------^-------+                     |
        |                             v
+-------v-------+        +------------------------------------------+
|   Amazon S3   |        |        AWS Lambda (Node.js 18.x)         |
| (Static Host) |        |   - Data Filtering & JSON Response       |
+---------------+        +------------------------------------------+

3. 구성 요소 역할
- Frontend (S3): React 빌드 파일을 호스팅하며, 사용자에게 UI를 제공합니다.

- API Gateway: 클라이언트의 HTTP 요청을 수신하여 적절한 Lambda 함수로 라우팅하고, CORS 헤더를 관리합니다.

- Backend (Lambda): 비즈니스 로직을 수행합니다. 내장된 여행 상품 JSON 데이터를 필터링하여 클라이언트에 응답합니다.
