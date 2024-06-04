

export function reduceString(str: string, length: number): string {
    if (!str) return ""
    return str.length > length ? str.substring(0, length) + "..." : str
}


export function csvFormater(responses: any[]): string {
    let csv = "userName;userEmail"
    

    // set headers
    for (const header of responses[0].fields) {
        csv += `;${header.name}`
    }

    csv += "\n"

    // set content
    for (const response of responses) {
        csv += `${response.userName};${response.userEmail}`

        for (const field of response.fields) {
            csv += `;${field.content?.toString()}`
        }
        csv += "\n"
    }


    return csv
}