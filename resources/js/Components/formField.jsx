import { useState } from "react";

const ALLOWED_FIELDS = ['username', 'email', 'password', 'confirmPassword'];

const FIELD_CONFIG = {
    username: {
        type: 'text',
        placeholder: 'Username',
    },
    email: {
        type: 'email',
        placeholder: 'Email',
    },
    password: {
        type: 'password',
        placeholder: 'Password',
    },
    confirmPassword: {
        type: 'password',
        placeholder: 'Confirm Password',
    },
};

export default function FormField({
    label,
    name,
    value,
    onChange,
    className = '',
    error = '',
    required = true,
    ...props
}) {
    if (!ALLOWED_FIELDS.includes(name)) {
        throw new Error(`FormField: unsupported field "${name}". Allowed: ${ALLOWED_FIELDS.join(', ')}`);
    }

    const [showPassword, setShowPassword] = useState(false);
    const config = FIELD_CONFIG[name];

    const isPassword = config.type === 'password';
    const actualType = isPassword && showPassword ? 'text' : config.type;

    const baseStyles = 'w-full px-3 py-2 font-poppins text-md text-white placeholder:text-gray-300 bg-[#063E4D] rounded-sm';

    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';
    const labelText = label ?? ({
        username: 'Username',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
    }[name]);

    const finalClassName = `${baseStyles} ${errorStyles} ${className}`;

    return (
        <div className="mb-4">
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
                {labelText}{required ? ' *' : ''}
            </label> */}

            <div className="relative">
                <input
                    type={actualType}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={config.placeholder}
                    required={required}
                    className={finalClassName}
                    {...props}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-300 hover:text-gray-400"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                )}
            </div>

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}