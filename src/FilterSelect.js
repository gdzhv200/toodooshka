// Import 'react' library
import React from 'react';
// ???
export const FilterSelect = ({ filters, value, onChange }) => {
    return (
        <div>
            {Object.keys(filters).map(key => {
                const filter = filters[key];
                return (
                    <label key={key}>
                        <input
                            type="radio"
                            checked={key === value}
                            onChange={() => onChange(key)}
                        />
                        {filter.label}
                    </label>
                );
            })}
        </div>
    );
};