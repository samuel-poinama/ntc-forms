import TextField from "@/components/forms/textField"
import React, { useState } from 'react'





export default function Text() {
    const [text, setText] = useState("")
    const [error, setError] = useState(false)

    const handleChange = (e: any) => {
        if (e.target.value === "") {
            setError(true)
        } else {
            setError(false)
        }
        setText(e.target.value)
    }

    return (
        <div>
            <TextField onChange={handleChange} value={text} required={true} error={error} helperText="Email is required">
                <p>hello</p>
            </TextField>
        </div>

        
    )
}