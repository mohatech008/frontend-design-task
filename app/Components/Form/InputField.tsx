// components/form/InputField.tsx
import React from 'react';

type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  icon?: React.ReactNode; // The icon is optional
};

const InputField = ({ label, type, id, placeholder, icon }: InputFieldProps) => {
  return (
    // Vertical layout with a gap of 8px (space-y-2)
    <div className="space-y-2 text-left">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative">
        {/* If an icon is provided, position it inside the input */}
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
       <input
  type={type}
  id={id}
  className={`block w-full h-[48px] rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 ${
    icon ? 'pl-10' : 'pl-4'
  }
  font-poppins placeholder:font-normal placeholder:text-sm placeholder:tracking-[0.4px] placeholder:text-black/40`}
  placeholder={placeholder}
/>
      </div>
    </div>
  );
};

export default InputField;