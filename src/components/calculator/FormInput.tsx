import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number | string;
  helpText?: string;
  error?: string;
  required?: boolean;
}

export default function FormInput({
  id,
  label,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 'any',
  helpText,
  error,
  required = false,
}: FormInputProps) {
  const helpId = helpText ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === '') {
      onChange(0);
      return;
    }
    const parsed = parseFloat(raw);
    if (!isNaN(parsed)) {
      onChange(parsed);
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-bakery-dark mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>

      <div className="relative flex items-center rounded-xl border border-bakery-border bg-bakery-input focus-within:ring-2 focus-within:ring-bakery-accent focus-within:border-bakery-accent transition-all shadow-sm">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value === 0 ? '' : value}
          placeholder="0"
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          aria-describedby={describedBy}
          aria-invalid={error ? 'true' : 'false'}
          className="w-full bg-transparent px-3.5 py-2.5 text-base font-medium text-bakery-dark placeholder:text-stone-400 focus:outline-none"
        />
        {unit && (
          <span className="pr-3.5 text-sm font-bold text-bakery-muted select-none">
            {unit}
          </span>
        )}
      </div>

      {helpText && !error && (
        <p id={helpId} className="mt-1 text-xs text-bakery-subtle">
          {helpText}
        </p>
      )}

      {error && (
        <p id={errorId} className="mt-1 text-xs font-semibold text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
