### Library
- React-Router-Dom
- styled-components
- react-icons
- react-calendar
- --save-dev @babel/plugin-proposal-private-property-in-object
- recoil
- react-scroll

<br/>

# 🏫 Hue are you : 휴학의 색을 묻다
![image](https://github.com/user-attachments/assets/06987b1c-6bd3-4fa4-8032-ae65533e28ca)
- 배포 url: https://hueareyou.netlify.app/
- API 배포 url: https://maknaengee.p-e.kr

<br/>

## 프로젝트 소개
- 대학생 10명 중 6명 이상이 진로 정체감과 취업에 대한 불안으로 심리적 어려움을 겪고 있습니다.
- 실제로 63.6%의 대학생은 취업 준비, 진로 탐색, 휴식 등 의 시간을 원해 휴학까지 고민했습니다.
- 설문조사 결과, 휴학을 하고 싶다는 학생들이 많았으나 시간을 의미 있게 보내지 못할 것 같아 휴학을 포기했다는 학생들이 많았습니다.
- "휴알유"는 이러한 문제점을 파악하여, 대학생들이 이러한 걱정 없이 건강한 휴학 생활을 누릴 수 있도록 도와주는 서비스입니다.

<br/>

## 팀원 구성
| 기획 | 디자인 | 프론트엔드 | 백엔드 |
| --- | --- | --- | --- |
| 조하정 | 김은비 | [정선빈](https://github.com/jungsunbeen), [정은빈](https://github.com/eunkong0-0) | [박채린](https://github.com/cherrynniii), [이강록](https://github.com/kangroklee) |

<br/>

## 프로젝트 아키텍처
![아키텍처](https://github.com/user-attachments/assets/0b47bc0c-2232-45d9-937e-cc3de11a26f8)

<br/>

## 1. 개발 환경
- FrontEnd: React, Netlify
- BackEnd: Django-Rest-Framework, AWS EC2, RDS, S3
- Design: Figma
- 협업 툴: Notion, Slack
- 데이터베이스 설계(백엔드): ERD Cloud

<br/>

## 2. 채택한 개발 기술과 브랜치 전략
- FrontEnd:
- BackEnd: GitHub Flow (기능 별 브랜치를 만들고 main에 병합하는 방식)

<br/>

## 3. 프로젝트 구조
### FrontEnd
### BackEnd
```
.
├── bingo
│  ├── __init__.py
│  ├── admin.py
│  ├── apps.py
│  ├── models.py
│  ├── notice_urls.py
│  ├── permissions.py
│  ├── serializers.py
│  ├── tests.py
│  ├── urls.py
│  └── views.py
├── db.sqlite3
├── hue.txt
├── manage.py
├── mypage
│  ├── __init__.py
│  ├── admin.py
│  ├── apps.py
│  ├── models.py
│  ├── serializers.py
│  ├── tests.py
│  ├── urls.py
│  └── views.py
├── portfolio
│  ├── admin.py
│  ├── apps.py
│  ├── models.py
│  ├── serializers.py
│  ├── tests.py
│  ├── urls.py
│  └── views.py
├── requirements.txt
├── review_information
│  ├── admin.py
│  ├── apps.py
│  ├── information_urls.py
│  ├── models.py
│  ├── permissions.py
│  ├── review_urls.py
│  ├── search_urls.py
│  ├── serializers.py
│  ├── tests.py
│  └── views.py
├── secrets.json
├── typetest
│  ├── admin.py
│  ├── apps.py
│  ├── models.py
│  ├── serializers.py
│  ├── tests.py
│  ├── urls.py
│  └── views.py
├── users
│  ├── admin.py
│  ├── apps.py
│  ├── form.py
│  ├── models.py
│  ├── permissions.py
│  ├── schools.json
│  ├── sendmail.py
│  ├── serializers.py
│  ├── tests.py
│  ├── urls.py
│  └── views.py
└── whewareyou
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

<br/>

## 4. 역할 분담
### 🐿️ 정선빈 (작성 전)

<br/>

### 🐱 정은빈 (작성 전)

<br/>

### 🐔 박채린
- jwt 인증/인가
- 유형화 테스트
- 빙고판 초기 구현
- 공고/후기 구현
- 포트폴리오 구현
- 알림 기능 구현
- EC2, S3 설정 및 배포
- nginx, gunicorn을 통한 https 배포
- 점검

<br/>
  
### 🐐 이강록 (작성 전)
- 로그인/회원가입
  - 이메일 인증 구현 & 이메일 인증 완료 시 학교 정보 자동 입력
- 빙고판 이어서 구현
- 빙고 세부 항목 구현
- 마이페이지 구현
- RDS 데이터베이스 설정
- cors 설정
- 점검

<br/>

## 5. 개발 기간 및 작업 관리
- 개발 기간: 2024.7.19 ~ 2024.8.6
- 작업 관리
  - 슬랙: 채널에서 서로의 진행 상황을 공유
  - 노션: API 명세 공유 및 WBS, 백로그 작성

<br/>

## 6. 기능
![4 2  info_read](https://github.com/user-attachments/assets/33125ec7-d9bf-42aa-b972-1e1d0f44d7f9)

<br/>

## 7. 소감
### 🐿️ 정선빈
### 🐱 정은빈
### 🐔 박채린
### 🐐 이강록
