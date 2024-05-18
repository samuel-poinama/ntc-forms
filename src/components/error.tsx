




export default function Error( { error } : { error: string }) {
    return (
        <div className="error">
            <h1>Error</h1>
            <p>{ error }</p>
        </div>
    )
}