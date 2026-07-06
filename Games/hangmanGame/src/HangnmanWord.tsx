type HangnmanWordProps = {
    gussedLetters : string [];
    wordToGuss : string;
    revealOrgWord? : boolean
}
function HangnmanWord({ gussedLetters, wordToGuss, revealOrgWord = false}: 
    HangnmanWordProps
) {
    return <div
    style={{
        display : "flex",
        gap : ".20rem",
        fontSize : "5rem",
        fontWeight : "bold",
        textTransform :"uppercase",
        //fontFamily : "monospace"
    }}
    >
    {wordToGuss.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom : ".1em solid black"}}>
            <span style={{
                visibility : gussedLetters.includes(letter.toLowerCase()) || revealOrgWord? "visible":"hidden",
                color : !gussedLetters.includes(letter) && revealOrgWord? "red" : "black"
            }}
            >
            {letter}
            </span>
        </span>
    ))}
    </div>
}


export default HangnmanWord