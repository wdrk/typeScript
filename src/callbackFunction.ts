// 단순한 형태의 콜백 함수
// callback 함수에는 타입을 지정하지 않아서 타입 안전성에 문제가 있다
function echoFunction(message: string, callback: any) {
  return callback(message);
}
const responseMessage = echoFunction("hello world!", (message: any) => message);
console.log(responseMessage);

// 콜백 함수 선언을 외부로 분리
type EchoCallbackType = (message: string) => string;
const callbackEcho: EchoCallbackType = message => message;

//
const echoFunction2: (message: string, callback: EchoCallbackType) => string = (
  message,
  callback
) => {
  return callback(message);
};
const responseEcho = echoFunction2("hello", callbackEcho);
console.log(responseEcho);
