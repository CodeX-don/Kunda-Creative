import { forwardRef } from 'react';

const FormInput = forwardRef(
  ({
    type = 'text',
    label,
    name,
    value,
    onChange,
    onBlur,
    error,
    required = false,
    placeholder,
    options = [],
    className = '',
    id,
    disabled = false,
    readOnly = false,
    ...props
  }, ref) => {
    const inputId = id || name;
    const errorId = error ? `${inputId}-error` : undefined;
    const hintId = props.hint ? `${inputId}-hint` : undefined;
    const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;

    const renderInput = () => {
      const commonProps = {
        ref,
        id: inputId,
        name,
        value,
        onChange,
        onBlur,
        disabled,
        readOnly,
        'aria-invalid': error ? 'true' : 'false',
        'aria-describedby': describedBy,
        'aria-required': required,
        className: `w-full bg-cream border-2 border-charcoal/20 rounded-md px-4 py-3 min-h-[44px] focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 placeholder:text-charcoal/40 transition-colors duration-fast ${error ? 'border-error focus:border-error' : ''} ${className}`,
        ...props,
      };

      switch (type) {
        case 'textarea':
          return (
            <textarea {...commonProps} placeholder={placeholder} rows={props.rows || 5} />
          );
        case 'select':
          return (
            <select {...commonProps}>
              <option value="" disabled>
                {placeholder || 'Select an option'}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );
        default:
          return <input {...commonProps} type={type} placeholder={placeholder} />;
      }
    };

    return (
      <div className="form-field mb-6">
        {label && (
          <label htmlFor={inputId} className="font-mono text-label text-olive mb-2 block">
            {label}
            {required && <span className="text-error ml-1" aria-hidden="true">*</span>}
            {required && <span className="sr-only">(required)</span>}
          </label>
        )}
        {renderInput()}
        {error && (
          <span id={errorId} className="font-mono text-body-sm text-error mt-1 block" role="alert">
            {error}
          </span>
        )}
        {props.hint && !error && (
          <span id={hintId} className="font-mono text-body-sm text-charcoal/50 mt-1 block">
            {props.hint}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;