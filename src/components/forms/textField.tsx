import React, { ReactNode } from 'react'



export default function TextField({ onChange, value, required, error, helperText, children }
    : { onChange: (e: any) => void, value: string, required: boolean, error: boolean, helperText: string, children: ReactNode}) {

    
    return (
        <div className="form-group">
            {children}
            <input
                type="text"
                value={value}
                onChange={onChange}
                required={required}
                className={`form-control ${error ? 'is-invalid' : ''}`}
            />
            {error && <div className="invalid-feedback">{helperText}</div>}
        </div>
    )
}