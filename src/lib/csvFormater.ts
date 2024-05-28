import fs from "fs"




export function csvFormater(responses: any[]): string {
    let csv = "userName;userEmail"
    

    // set headers
    for (const header of responses[0].fields) {
        csv += `;${header.name}`
    }

    csv += "\n"
    let i = 0

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