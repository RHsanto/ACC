const nam = "Rakiubl Hasan";

function checkKor(str:string){
return str.toLowerCase();
}

console.log(checkKor("2"));

interface IPerson{
  name:string,
  roll:number,
  age:number,
  relation?:boolean,

}

const firstPerson: IPerson ={
  name:"Rakibul",
  roll:5,
  age:22,

}

// enums here

enum Colors{
  color1 = "#111111",
  color2 = "hello",
  color3 = "#333333"
}
console.log(Colors.color1);

// Generic

// function _concat<R>(a:R,b:R){
//   return a+b;
// }

// _concat<Number>(2,55)
// _concat<String>("amar","Taka")