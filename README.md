# homepage

이 저장소는 데이터 사이언티스트 포트폴리오용 정적 웹사이트 파일을 포함합니다.

**구성**
- `index.html` - 메인 페이지
- `css/styles.css` - 스타일
- `js/script.js` - 프로젝트 렌더링 스크립트
- `projects.json` - 프로젝트 메타데이터 예시

**로컬에서 미리보기**
간단히 브라우저로 `index.html` 파일을 열면 됩니다. 로컬에서 간단한 HTTP 서버로 제공하려면 아래 예시를 사용하세요.

```bash
# Python 3 (현재 디렉터리에서 simple HTTP 서버 실행)
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000/ 접속
```

**배포**
- GitHub Pages: 이 리포지토리는 `main` 브랜치에 푸시하면 자동으로 `gh-pages` 브랜치로 배포하는 GitHub Actions 워크플로(`.github/workflows/deploy.yml`)를 포함합니다.
	- 동작 방식: `main`에 커밋/푸시하면 워크플로가 실행되어 리포지토리 루트(`./`)를 `gh-pages` 브랜치로 퍼블리시합니다.
	- 설정: GitHub 리포지토리의 `Settings → Pages`에서 배포 소스(Branch)를 `gh-pages`로 선택하고 루트를 사용하도록 설정하세요.
	- 참고: 이미 Pages를 `main` 루트에서 사용 중이면 워크플로를 비활성화하거나 Pages 설정을 `gh-pages`로 변경하세요.
- Netlify, Vercel 등 정적 호스팅 사용 가능.

**다음 단계 제안**
- 프로젝트 상세 페이지(노트북 뷰어, 대시보드 포함) 추가
- 실제 `resume.pdf` 업로드 및 다운로드 연결
- 연락 폼을 서버리스 함수로 연결
