export default function Button({
    children,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    variant = 'primary',
    ...props
}) {
    const baseStyles = 'w-full font-poppins px-3 py-2 text-base text-md rounded-sm transition-colors'

    const variants = {
        primary: 'bg-white text-black hover:bg-gray-300',
        secondary: 'bg-[#087592] text-white hover:bg-[#0B6881]',
    }

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    const finalClassName = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`
  
    return (
        <button
            type = {type}
            onClick={onClick}
            disabled = {disabled}
            className={finalClassName}
            {...props}
        >
            {children}
        </button>
    )
}