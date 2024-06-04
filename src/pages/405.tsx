import Error from '@/components/error'




export default function Error405() {
    return (
        <Error code={405} message='Method Not Allowed' />
    )
}