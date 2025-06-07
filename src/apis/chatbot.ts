import axios from "axios"
const CHATBOT_API_URL = "/v1/chat/"

export const sendQuestionDummy = (question: string) => {
    console.log(question)
    const result = {
        answer: "OO님의 관심사는 ~~이며, 다음의 비교과를 추천합니다.",
        recommendedProgramList : [
        {
          title: "string",
          url: "string",
          applicationPeriod: "string",
          targetAudience: "string",
          selectionMethod: "string",
          duration: "string",
          purposeOfTheActivity: "string",
          participationBenefitsAndExpectedOutcomes: "string",
          process: "string",
          modeOfOperation: "string"
        }
        ]
  }
  return result
}


export const sendQuestion = (question: string) => axios.post(CHATBOT_API_URL, {
        question : question,
    })
        .then(Response => {
            console.log(Response.data)
            return Response.data.result
        })
        .catch(error => {
            console.error(error)
            return error
        });



// {
//   "result": {
//     "answer": "OO님의 관심사는 ~~이며, 다음의 비교과를 추천합니다.",
//     "recommendedProgramList": [
//       {
//         "title": "string",
//         "url": "string",
//         "applicationPeriod": "string",
//         "targetAudience": "string",
//         "selectionMethod": "string",
//         "duration": "string",
//         "purposeOfTheActivity": "string",
//         "participationBenefitsAndExpectedOutcomes": "string",
//         "process": "string",
//         "modeOfOperation": "string"
//       }
//     ]
//   }
// }