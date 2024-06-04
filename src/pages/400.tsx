import Error from '@/components/error'




export default function Error400() {
  return (
      <Error code={400} message='Bad Request' />
  )
}