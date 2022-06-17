var nam = "Rakiubl Hasan";
function checkKor(str) {
    return str.toLowerCase();
}
console.log(checkKor("2"));
var firstPerson = {
    name: "Rakibul",
    roll: 5,
    age: 22
};
// enums here
var Colors;
(function (Colors) {
    Colors["color1"] = "#111111";
    Colors["color2"] = "hello";
    Colors["color3"] = "#333333";
})(Colors || (Colors = {}));
console.log(Colors.color1);
// Generic
// function _concat<R>(a:R,b:R){
//   return a+b;
// }
// _concat<Number>(2,55)
// _concat<String>("amar","Taka")
