## ☁️ 프로젝트 소개

> 입문자를 위한 클라우드 GUI 서비스

코드형 인프라(Infrastructure as Code, IaC)를 처음 접하고 높은 러닝커브로 인해 도입을 주저하는 사용자들에게 GUI 환경에서 쉽고 편리하게 클라우드 인프라를 구성하고 관리할 수 있는 클라우드 인프라 구축 자동화 및 시각화 서비스 방법을 지원하는 시스템을 제공합니다.

1. **[📜 최종 보고서 (서론, 배경, 요구사항)](https://snuupi.notion.site/GUI-Fightim-1dfe8a37a2184956bcf5139a9d3cfa0d)**
2. **[📜 최종 보고서 (결과, 결론)](https://snuupi.notion.site/GUI-Fightim-58691c409a994aac92b4bd68adbe4118)**

<br />

## ☁️ 서비스 소개
### 1️⃣ 로그인 페이지

### 2️⃣ AWS 연동 페이지

### 3️⃣ 원인 페이지 (메인 페이지)

<img src="https://user-images.githubusercontent.com/47105088/198917350-e6a1fca5-c009-4489-b4e7-801d3e476e5d.png" style="width: 80%; text-align: center;">

- 사용자는 클라우드 리소스 아이콘을 클릭 및 드래그하여 배치할 수 있다.
- 리소스들을 서로 연결하여 인프라를 설계한다.
- 클라우드 서버에 연결하여 관리할 수 있다.
- 배치한 리소스 아이콘들이 생성 가능한지 확인해준다.
- 클라우드 리소스 아이콘을 더블 클릭하면 기능 설명을 볼 수 있다.
- Github 레포지터리 URL을 연동하여 서비스를 올릴 수 있다.
- 프로비저닝 된 인스턴스의 Public IP에 접속하여 결과 페이지를 확인할 수 있다.

### 4️⃣ 결과 페이지
[:link: Github](https://github.com/Fightim/resultpage_frontend)

<br />

## ☁️ 기술 스택
|역할|종류|
|-|-|
|Styling|![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)|
|State Management|![React Context](https://img.shields.io/badge/context_api-61DAFB?style=for-the-badge&logo=react&logoColor=white)|
|Programming Language|![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)|
|Data Fetching|![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)|
|Data Mocking|![MSW](https://img.shields.io/badge/MSW-000000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIyIDEyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaGVpZ2h0PSI0MCIgd2lkdGg9IjQwIj48dGl0bGU+bXN3LWxvZ288L3RpdGxlPjxnIGlkPSJtc3ctbG9nbyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQuMjk3NDI3LCAtNDcuNTc0NTc2KSIgc3Ryb2tlLXdpZHRoPSIyMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3LjI5NzQyNywgMTA4LjA3NDU3Nikgcm90YXRlKC00Mi4wMDAwMDApIHRyYW5zbGF0ZSgtMTA3LjI5NzQyNywgLTEwOC4wNzQ1NzYpIHRyYW5zbGF0ZSgzNi4yOTc0MjcsIDI2LjU3NDU3NikiPjxwYXRoIGQ9Ik03NS4xMzk2NjY2LDQ2LjY2ODMyNSBDNzguNjAyNDkxOSw0Ni42NjgzMjUgODEuNzM3NDkxOSw0OC4wNzE5MTI0IDg0LjAwNjc4NTYsNTAuMzQxMjA2IEM4Ni4yNzYwNzkzLDUyLjYxMDQ5OTcgODcuNjc5NjY2Niw1NS43NDU0OTk3IDg3LjY3OTY2NjYsNTkuMjA4MzI1IEM4Ny42Nzk2NjY2LDYyLjMwMzY3MTYgODYuNTM0ODUyLDY1LjI4OTY1MDUgODQuNDY1NTM1Niw2Ny41OTE2Mjc5IEw4NC40NjU1MzU2LDY3LjU5MTYyNzkgTDQ4LjIzMjA2NDgsMTA3Ljg5ODk2MyBDNDcuNTEyMDkzNCwxMDguNjk5ODg0IDQ2LjUzNTY0NDQsMTA5LjEzMzE1NSA0NS41Mzg5NTgxLDEwOS4xODYyMDQgQzQ0LjU0MjI3MTgsMTA5LjIzOTI1MiA0My41MjUzNDgyLDEwOC45MTIwNzcgNDIuNzI0NDI3NiwxMDguMTkyMTA2IEw0Mi43MjQ0Mjc2LDEwOC4xOTIxMDYgTDYuMTk3ODE0MzUsNjcuNTkxNjI3OSBDMy44ODI4MjkxOCw2NS4wMTYzNjAzIDIuODMwODM2OSw2MS43NDY1NTk5IDMuMDAxNDA3ODEsNTguNTQxODMwMiBDMy4xNzE5Nzg3Myw1NS4zMzcxMDA0IDQuNTY1MTEyODQsNTIuMTk3NDQxMiA3LjE0MDM4MDQ2LDQ5Ljg4MjQ1NiBDOS40NDIzNTc4Nyw0Ny44MTMxMzk2IDEyLjQyODMzNjgsNDYuNjY4MzI1IDE1LjUyMzY4MzMsNDYuNjY4MzI1IEwxNS41MjM2ODMzLDQ2LjY2ODMyNSBaIiBpZD0iYmFjayIgc3Ryb2tlPSIjN0ExODE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS4zMzE2NzUsIDgxLjUwMDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC00NS4zMzE2NzUsIC04MS41MDAwMDApICI+PC9wYXRoPjxwYXRoIGQ9Ik0xNDUuODYwODIsNDYuNjY4MzI1IEMxNDYuOTM3Nzc1LDQ2LjY2ODMyNSAxNDcuOTEyNzc1LDQ3LjEwNDg0NzQgMTQ4LjYxODUzNiw0Ny44MTA2MDg2IEMxNDkuMzI0Mjk3LDQ4LjUxNjM2OTggMTQ5Ljc2MDgyLDQ5LjQ5MTM2OTggMTQ5Ljc2MDgyLDUwLjU2ODMyNSBDMTQ5Ljc2MDgyLDUxLjUzMDk5MjYgMTQ5LjQwNDc3Nyw1Mi40NTk2NDY0IDE0OC43NjEyMSw1My4xNzU1NzI0IEwxNDguNzYxMjEsNTMuMTc1NTcyNCBMOTkuNTY4NzE0OSwxMDcuODk4OTYzIEM5OC44NDg3NDM1LDEwOC42OTk4ODQgOTcuODcyMjk0NCwxMDkuMTMzMTU1IDk2Ljg3NTYwODEsMTA5LjE4NjIwNCBDOTUuODc4OTIxOCwxMDkuMjM5MjUyIDk0Ljg2MTk5ODMsMTA4LjkxMjA3NyA5NC4wNjEwNzc3LDEwOC4xOTIxMDYgTDk0LjA2MTA3NzcsMTA4LjE5MjEwNiBMNDQuNTc1NDQwNCw1My4xNzU1NzI0IEM0My44NTU0Njg5LDUyLjM3NDY1MTggNDMuNTI4Mjk0Myw1MS4zNTc3MjgyIDQzLjU4MTM0MjcsNTAuMzYxMDQxOSBDNDMuNjM0MzkxLDQ5LjM2NDM1NTYgNDQuMDY3NjYyNCw0OC4zODc5MDY2IDQ0Ljg2ODU4Myw0Ny42Njc5MzUyIEM0NS41ODQ1MDksNDcuMDI0MzY3OSA0Ni41MTMxNjI3LDQ2LjY2ODMyNSA0Ny40NzU4MzAzLDQ2LjY2ODMyNSBMNDcuNDc1ODMwMyw0Ni42NjgzMjUgWiIgaWQ9ImZyb250IiBzdHJva2U9IiNGRjZBMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk2LjY2ODMyNSwgODEuNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC05Ni42NjgzMjUsIC04MS41MDAwMDApICI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==&logoColor=white)|
|Formatting|![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)|
|Package Manager|![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)|                                             
|Version Control|![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) |
|Deploy|![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white)|

<br />

## ☁️ 폴더 구조
```
┣ 📂.github
┣ 📂public
┣ 📂src
┃ ┣ 📂screen
┃ ┃ ┣ 📂@page
┃ ┃ ┗ 📂components
┃ ┣ 📂service
┃ ┃ ┣ 📂context
┃ ┃ ┗ 📂hooks
┃ ┃   ┣ 📂instanceContext
┃ ┃   ┗ 📂queries
┃ ┣ 📂store
┃ ┃ ┣ 📂assets
┃ ┃ ┣ 📂style
┃ ┃ ┗ 📂types
┃ ┗ 📂story
┃   ┣ 📂api
┃   ┗ 📂mock
┣ 📜index.html
┣ 📜pacakge.json
┗ 📜etc (setting files)
```