import React from 'react';

interface Option<T extends string> {
  value: T;
  label: string;
}

interface ModeSelectorProps<T extends string> {
  label: string;
  options: Option<T>[];
  selected: T;
  onChange: (value: T) => void;
  id?: string;
}

export default function ModeSelector<T extends string>({
  label,
  options,
  selected,
  onChange,
  id,
}: ModeSelectorProps<T>) {
  return (
    <div className="w-full">
      <span className="block text-sm font-semibold text-bakery-dark mb-1.5" id={id}>
        {label}
      </span>
      <div
        role="radiogroup"
        aria-labelledby={id}
        className="inline-flex rounded-xl p-1 bg-stone-100 border border-bakery-border shadow-inner"
      >
        {options.map((opt) => {
          const isSelected = opt.value === selected;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(opt.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                isSelected
                  ? 'bg-white text-bakery-accent shadow-sm'
                  : 'text-bakery-muted hover:text-bakery-dark'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
