import style from "./Keyboard.module.css";

const KEYS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

type KeyboardProps = {
    disabled ?: boolean 
    activeLetters : string[],
    inactiveLetters : string[],
    addGuessedLetter : (letter : string) => void
}
function HangmanKeyboard({
    activeLetters,
    disabled = false,
    inactiveLetters,
    addGuessedLetter,
}: KeyboardProps) {

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                gap: ".5rem",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        key={key}
                        onClick={() => addGuessedLetter(key)}
                        className={`${style.btn} ${isActive ? style.active : ""} ${isInactive ? style.inactive : ""}`}

                        disabled={isInactive || isActive || disabled}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}
export default HangmanKeyboard;