const HEAD = (
    <div style={{ //Head
        width: "50px",
        height: "50px",
        border: "10px solid red",   // added "solid"
        borderRadius: "100%",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }}
    />
);

const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        backgroundColor : "red",
        position: "absolute",
        top : "120px",
        right : 0
    }}
    />
);

const RIGHTARM = (
    <div style={{
        width: "100px",
        height: "10px",
        backgroundColor : "red",
        position: "absolute",
        top : "150px",
        right : "-100px",
        rotate : "-30deg",
        transformOrigin : "left bottom "
    }}
    />
);


const LEFTARM = (
    <div style={{
        width: "100px",
        height: "10px",
        backgroundColor : "red",
        position: "absolute",
        top : "150px",
        right : "10px",
        rotate : "30deg",
        transformOrigin : "right bottom "
    }}
    />
);



const RIGHTLEG = (
    <div style={{
        width: "100px",
        height: "10px",
        backgroundColor : "red",
        position: "absolute",
        top : "210px",
        right : "-90px",
        rotate : "60deg",
        transformOrigin : "left bottom"
    }}
    />
);


const LEFTLEG = (
    <div style={{
        width: "100px",
        height: "10px",
        backgroundColor : "red",
        position: "absolute",
        top : "210px",
        right : "0px",
        rotate : "-60deg",
        transformOrigin : "right bottom "
    }}
    />
);

const BODY_PARTS = [
    HEAD,
    BODY,
    RIGHTARM,
    LEFTARM,
    RIGHTLEG,
    LEFTLEG,
];

type HangmanDrawingProps = {
    numberOfGuess : number;
}

function HangnmanDrawing({numberOfGuess}: HangmanDrawingProps) {
    return <div style={{ position : "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuess)}
        
        <div style={{ // 
                height : "50px",
                width : "10px",
                backgroundColor : "black",
                position : "absolute",
                right : 0,
                top : 0 ,
            }}
        />

        <div style={{
                height : "10px",
                width : "200px",
                backgroundColor : "black",
                marginLeft : "120px"  
            }}
        />
        <div
        style={ //Standingline
            {
                height : "400px",
                width : "10px",
                backgroundColor : "black",
                marginLeft : "120px" // baseLine with *2 for -> Standline 
            }
        }
        >
        </div>
        
        <div style={{height : "10px", backgroundColor : "black", width : "250px"}} /> 
    </div>
}

export default HangnmanDrawing