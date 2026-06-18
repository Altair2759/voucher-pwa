// Created by Reggie Vaudin


// Button properties
type buttonProp = {
    text: string; 
    onClick?: () => void;
    type?: "large" | "meduim" | "small";
};


export default function Button({text, onClick, type="large"}:buttonProp) {
    // Styles for the different sized buttons
    const typeStyles = {
        large: "mb-3 mt-3 bg-black font-white text-white p-2 rounded-2xl w-70",
        meduim: "mb-3 mt-3 bg-black font-white text-white p-2 rounded-2xl w-50",
        small: "mb-3 mt-3 bg-black font-white text-white p-2 rounded-2xl w-30",
    };

    return (
        // Returns the button that will be displayed on the screen
        <button onClick={onClick} className={`${typeStyles[type]}`}>
            {text}
        </button>
    );
}

