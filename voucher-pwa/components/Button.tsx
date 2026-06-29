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
        large: "w-[280px]",
        meduim: "w-[200px]",
        small: "w-[140px]",
    };

    return (
        // Returns the button that will be displayed on the screen
        <button onClick={onClick} className={`
        mb-3 mt-3
        p-2 rounded-2xl
        text-white font-semibold
        bg-indigo-600
        dark:bg-emerald-500
        ${typeStyles[type]}
      `}
    >
            {text}
        </button>
    );
}

