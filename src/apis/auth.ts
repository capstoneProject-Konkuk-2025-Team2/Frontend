import axios from "axios"

const AUTH_MAIL_API_URL = "/v1/member/auth-mail"
const AUTH_CODE_API_URL = "/v1/member/auth-code"
const PW_API_URL = "/v1/member/password"

// 메일 인증 번호 보내기 POST
export const sendMailRequest = (mailAddress:string) => axios.post(AUTH_MAIL_API_URL, {
    email: `${mailAddress}@konkuk.ac.kr`
})
.then(Response => console.log(Response.data))
.catch(error => console.error(error));


// 메일 인증 번호 확인하기 POST - 비밀번호 설정용 토큰 응답받음.
export const verifyAuthCode = (mailAddress:string, code:string) => axios.post(AUTH_CODE_API_URL, {
    email: `${mailAddress}@konkuk.ac.kr`,
    code: code
})
.then(Response => console.log(Response.data))
.catch(error => console.error(error));


// 비밀번호 설정하기 POST - 메인 서비스 이용 토큰 응답받음.
export const enrollPW = (password:string) => axios.post(PW_API_URL, {
    password: password
})
.then(Response => console.log(Response.data))
.catch(error => console.error(error));
