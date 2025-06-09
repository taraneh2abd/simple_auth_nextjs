import "./CircleButton.scss";

interface CircleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isDark?: boolean;
  isActive?: boolean;
}

export default function CircleButton({ onClick, children, isDark, isActive }: CircleButtonProps) {
  const baseClass = isDark ? "darkBtn" : "lightBtn";
  const activeClass = isActive ? "active" : "";

  return (
    <button
      className={`${baseClass} ${activeClass}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
}
