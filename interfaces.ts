// let draw = (point:{x: string, y: string, z: number})=>{
// }
// draw({x : "string",y: "kavin", z: 12});
 

interface Point{
    x : number,
    y : number,
    z : string
};

let darw = (point : Point) =>{
    console.log(point);
}
darw({x : 12, y : 54, z : "kavin"});
