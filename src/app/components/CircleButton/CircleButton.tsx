import "./CircleButton.scss";

interface CircleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isDark?: boolean;
}

export default function CircleButton({ onClick, children, isDark }: CircleButtonProps) {
  return (
    <button
      className={isDark ? "darkBtn" : "lightBtn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
