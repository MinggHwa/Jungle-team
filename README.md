# 🦁 JUNGLE 프로젝트-팀 프로젝트

## 📌 프로젝트 개요
FEPS 1기 팀 프로젝트로 진행된 **JUNGLE(정글)** 프로젝트 개인 포트폴리오용 저장소입니다. 
프론트엔드 주니어 개발자들을 위한 정보 공유 커뮤니티 플랫폼으로, 기술 자료, 면접/코테/스터디 경험 등을 자유롭게 게시하고 소통할 수 있도록 구현하였습니다.

## 🛠 사용 기술 스택
| 분류 | 기술 | 설명 |
|------|------|------|
| 언어 | TypeScript | 정적 타입으로 안정성과 생산성 향상 |
| 프레임워크 | React + Vite | 빠른 개발 환경 구성 |
| 상태관리 | Zustand | 가볍고 직관적인 전역 상태 관리 |
| 서버 상태 | TanStack Query | API 요청/캐싱/에러 자동 처리 |
| 스타일 | Styled-Components | 컴포넌트 기반 스타일링 |
| 인증/DB | Supabase | OAuth 로그인, 트리거, 데이터베이스 |

---

## 🛠️ 트러블슈팅 & 기술적 도전

### 🚨 사용자 조건 렌더링 오류

- **문제상황**: 내가 작성하지 않은 글에도 "수정/삭제" 버튼이 노출되는 사고를 발견했습니다.
- **원인분석**: userId와 stackData.user_id를 `==`로 비교해 타입이 달라도 true를 반환하였습니다. (자동형 변환)
- **해결방법**: 항상 `===` 사용으로 strict 하게 변경해주고 타입을 user_id?: string | null; 지정해 주어야 한다.
- **배운 점**: 인증/보안이 걸린 조건에서는 타입까지 일치하는 비교(`===`)를 사용해야 안정적이다.


## 🙋‍♀️ 개인 기여 파트 요약
- ✔️ **공부 페이지 / 기술 QnA / 도서 페이지**: Grid 기반 반응형 UI 구현
- ✔️ **Git OAuth 로그인 기능**: Supabase 기반 인증 시스템 구축
- ✔️ **좋아요 / 북마크 기능**: Supabase 트리거로 count 연동 구현
- ✔️ **Supabase REST API 재사용 모듈 구현**: fetch 기반 커스텀 함수화
- ✔️ **이슈 템플릿 및 이슈 관리**: GitHub Issues를 활용한 스크럼 운영 경험
  

  
## ✍️ 기획 & 디자인 참여
브레인스토밍을 통해 프로젝트 로고와 초기 와이어프레임을 설계하였으며, 
기획 단계부터 기능 구조 및 사용자 플로우 설계에 직접 참여하였습니다.

> 📸 **기획 로고 및 회의 캡처 이미지**
> 
<p align="center">
  <img src="https://github.com/user-attachments/assets/574598a3-1ccf-425c-b4ff-33a6f7d0900d" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/df1d8814-a867-479e-910e-e58b6174be3c" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/7f9438b3-04ee-49c3-bb3a-ca5eb755b2dd" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/6eff36fc-d87c-49c0-95a8-60cc1ecfac67" width="500"/>
</p>
<p align="center">
  <img src="(https://github.com/user-attachments/assets/b2ddb489-dd6b-448d-a3f8-05d7d544e94e)" width="500"/>
</p>
---





## 🖼️ 데모 이미지 (기여 파트)

### 공부 - 도서

<p align="center">
  <img src="https://github.com/user-attachments/assets/a132df47-435a-470c-8e11-35bf20d9aaf5" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/2ec25876-b329-4769-83fc-8f05629d8b4f" width="500"/>
</p>

### 공부 - QnA
<p align="center">
  <img src="https://github.com/user-attachments/assets/0f63d268-048a-4dd9-b64e-ddc294c13698" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/919567b9-d2e0-437a-b245-b9ab867e18e6" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9dd860de-0cda-4d24-94a7-95012aaff5d6" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/20fc9a95-2f07-4d2f-b909-49c2acd3aaf3" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/b48ae878-2aef-4a5d-9e55-b041a8bb0509" width="500"/>
</p>

### 반응형

<p align="center">
  <img src="https://github.com/user-attachments/assets/5d75448f-32d7-4743-a662-3643ae547edd" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/fd3a14b2-bd97-4836-96dc-3a1e832fac92" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/2be592ee-7bc8-49ff-a3e1-f119e1f496b3" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a481cafe-bd01-42b5-b88d-1fac912bb4f3" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/f045160b-961d-433e-bd67-1284f4c68ebc" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/278a7af2-fb11-409c-a360-e728b0576a3c" width="500"/>
</p>

---

## 💡 프로젝트 회고 (신명화)
이번 프로젝트를 통해 스스로의 부족함을 크게 느낄 수 있었습니다.  
3주간 완주할 수 있도록 함께 해준 팀원들에게 깊이 감사드리며,  
다음 프로젝트에서는 더 주도적으로 기여할 수 있는 개발자가 되겠다는 다짐을 갖게 되었습니다.

---

## 🧑‍💻 팀 구성
| 이름 | 역할 | GitHub |
|------|------|--------|
| 정소이 | 팀장, 기획 | [uniS2](https://github.com/uniS2) |
| 서진만 | FE 개발 | [seojinman](https://github.com/seojinman) |
| 신명화 | FE 개발 (본인) | [MyoungHwaShin](https://github.com/MyoungHwaShin) |
| 전선용 | FE 개발 | [sy0725](https://github.com/sy0725) |

---

## 🔗 연락처
- 📧 shinmyounghwa92@gmail.com
- 🌐 [GitHub Profile](https://github.com/MyoungHwaShin)

> ✅ *이 프로젝트는 본인의 실무 역량을 증명하는 포트폴리오용으로 활용됩니다.*
