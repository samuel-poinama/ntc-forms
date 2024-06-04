import Error from "@/components/error"




export default function Error401() {
    return (
        <Error code={401} message='Unauthorized' />
    )
}