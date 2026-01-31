# Micro Frontend 연습 프로젝트

pnpm 기반 모노레포로 구성된 Micro Frontend 연습용 프로젝트입니다.

## 구조

- `packages/host`: Host 앱 (포트 3000)
- `packages/remote-whiskey`: Remote 앱 (포트 3001)

## 시작하기

```bash
# 의존성 설치
pnpm install

# 모든 앱 개발 서버 실행
pnpm dev

# 또는 개별 앱 실행
cd packages/host && pnpm dev
cd packages/remote-whiskey && pnpm dev
```

## 환경변수 설정

배포 시 환경변수를 통해 설정할 수 있습니다.

### 환경변수 목록

- `REMOTE_WHISKEY_URL`: Remote 앱의 remoteEntry.js URL
  - 개발: `http://localhost:3001/remoteEntry.js` (기본값)
  - 프로덕션: `https://your-domain.com/remoteEntry.js`

- `PUBLIC_PATH`: 정적 파일의 public path
  - 개발: `/` (기본값)
  - 프로덕션: `/` 또는 CDN URL

- `NODE_ENV`: 빌드 모드
  - 개발: `development`
  - 프로덕션: `production`

### 사용 예시

```bash
# 개발 환경 (기본값 사용)
pnpm dev

# 프로덕션 빌드
REMOTE_WHISKEY_URL=https://{exampleHost}/remoteEntry.js PUBLIC_PATH=/ pnpm build

# 또는 package.json 스크립트에 추가하여 사용
```

## 배포

1. Remote 앱을 먼저 배포하고 `remoteEntry.js` URL을 확인하세요
2. Host 앱 빌드 시 `REMOTE_WHISKEY_URL` 환경변수를 설정하세요
3. 각 앱의 `dist` 폴더를 웹 서버에 배포하세요
