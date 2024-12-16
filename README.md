# Docker Compose

## Docker Compose란?

> 단일 서버에서 여러개의 컨테이너를 하나의 서비스로 정의해 컨테이너의 묶음으로
> 관리할 수 있는 작업 환경을 제공하는 관리 도구이다.


<div align="center">
  <img src="https://github.com/user-attachments/assets/3e15c4c4-3656-405a-81cc-2e201c93139e">
</div>

## Docker Compose를 사용하는 이유

> 여러 개의 컨테이너가 하나의 어플리케이션으로 동작할 때 도커 컴포즈를 사용하지 않는다면,
> 이를 테스트하기 위해 각각의 컨테이너를 하나씩 생성해야한다.
> 웹 어플리케이션을 테스트하기 위해선 웹 서버 컨테이너, 데이터베이스 컨테이너 두개의 컨테이너를 생성해야한다.


## Docker Compose 사용 방식

- 여러개의 컨테이너의 옵션과 환경을 정의한 파일을 읽어 컨테이너를 순차적으로 생성하는 방식으로 동작한다.
- 도커 컴포즈의 설정 파일은 도커 엔진의 run 명령어의 옵션을 그대로 사용할 수 있다.
- 컨테이너의 의존성, 네트워크, 볼륨 등을 함께 정의할 수 있다.


## Docker Compose 사용

1. docker compose를 설치해준다.
2. docker-compose -v 명령어를 사용하여 설치완료 및 버전을 확인해준다.
   <div align="center">
     <img width=600 src="https://github.com/user-attachments/assets/0e036e97-445d-4fd5-a91c-517e75a31eb6">
   </div>
 3. docker-compose up -d 명령어를 사용하여 도커 컴포즈 프로젝트를 실행할 수 있다.
    이것은 docker-compose.yml을 읽어 컨테이너가 생성된다.
    <div align="center">
    <img width=600 src="https://github.com/user-attachments/assets/0e904551-f4a4-4705-a3a7-e4f5f6798ee2">
      </div>
4. 이후 docker ps 와 docker-compose ps 명령어를 사용하여 실행중인지 확인한다.
  <div align="center">
  <img width=600 src="https://github.com/user-attachments/assets/b82744f3-6f22-4b96-b9dd-ad3391c18b67">
  </div>
