import React from 'react'
import { useState } from 'react'



export default function TextPopup({field, setField }: { field: any, setField: (field: any) => void }) {
    const [minNumber, setMinNumber] = useState(0)
    const [maxNumber, setMaxNumber] = useState(0)
    const [specialChar, setSpecialChar] = useState(false)
    const [allowNumbers, setAllowNumbers] = useState(false)

    const setRegex = () => {
        let regex = ""
        
        // enable special char (special char is optional)
        if (specialChar) {
            regex += "(?=.*[!@#$%^&*])"
        }

        // enable numbers (numbers are optional)
        if (allowNumbers) {
            regex += "(?=.*[0-9])"
        }

        // set min number
        regex += `.{${minNumber},`

        // set max number
        if (maxNumber > 0) {
            regex += `${maxNumber}}`
        } else {
            regex += "}"
        }

        return regex
    }

    return (
        <div>
            <div className="form-container w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <div className="mb-4">
                    <label htmlFor="min-number" className="text-gray-700">Nombre minimum</label>
                    <input type="number" id="min-number" name="min-number" min="0" 
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700"
                    onChange={(e: any) => {
                        setMinNumber(e.target.value)
                        setField({ ...field, regex: setRegex() })
                    }} />
                </div>
                <div className="mb-4">
                    <label htmlFor="max-number" className="text-gray-700">Nombre maximum</label>
                    <input type="number" id="max-number" name="max-number" min="0"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700"
                    onChange={(e: any) => {
                        setMaxNumber(e.target.value)
                        setField({ ...field, regex: setRegex() })
                    }} />
                </div>
                <div className="checkbox-container mb-4">
                    <label htmlFor="special-char" className="text-gray-700">Caractère spécial</label>
                    <input type="checkbox" id="special-char" name="special-char" className="ml-2"
                        onChange={(e: any) => {
                            setSpecialChar(e.target.checked)
                            setField({ ...field, regex: setRegex() })
                        }} />
                </div>
                <div className="checkbox-container mb-4">
                    <label htmlFor="allow-numbers" className="text-gray-700">Chiffres autorisés</label>
                    <input type="checkbox" id="allow-numbers" name="allow-numbers" className="ml-2"
                        onChange={(e: any) => {
                            setAllowNumbers(e.target.checked)
                            setField({ ...field, regex: setRegex() })
                        }} />
                </div>
            </div>
            
        </div>
    )
}