import './styles.scss'

type ButtonProps = {
  label: string
  onClick: () => void
  type?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type }) => {
  return (
    <button onClick={onClick} type='button' className={`btns btns--${type}`}>
      {label}
    </button>
  );
}

export default Button;