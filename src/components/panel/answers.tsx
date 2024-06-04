import Image from "next/image"
import { useEffect, useState } from "react"
import Answer from "./answer/answer"
import { useRouter } from "next/router"



export default function Answers() {
  const router = useRouter()
  const [answers, setAnswers] = useState([] as any)
  const [search, setSearch] = useState("")
  const [type, setType] = useState("form")

  const fetchAnswers = async () => {
    const res = await fetch("/api/response")
    const data = await res.json()
    setAnswers(data)
  }

  const fetchRemoveAnswer = async (id: string) => {
    await fetch(`/api/response?id=${id}`, {
      method: "DELETE",
    })
    fetchAnswers()
  }

  const onSee = (id: string) => {
    router.push(`/view?id=${id}&edit=false&answer=true`)
  }

  const searchFilter = async () => {
    if (search === "") {
      fetchAnswers()
      return
    }
    const res = await fetch(`/api/response/search?s=${search}&t=${type}`)
    const data = await res.json()
    setAnswers(data)
  }


  useEffect(() => {
    fetchAnswers()
  }, [])



  return (
    <div className="flex justify-between items-center ">
      <div className="w-[100%]">
        <div className="min-h-screen min-w-[350px] font-sans">
          <div className="flex p-6 text-white h-full">
            <div className="bg-blue-900 rounded-3xl p-8 w-full ">
              <div className="search flex justify-center m-[40px] ">
                <input
                  type="text"
                  maxLength={200}
                  placeholder="Search"
                  className="py-2 px-4 mr-2 border border-gray-300 rounded w-[500px] text-black"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") searchFilter() }}
                />
                <div className="flex flex-col items-start space-y-2 mr-2">
                  <select
                    name="options"
                    id="options"
                    className="py-2 px-4 border border-gray-300 rounded text-black"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="form">Form</option>
                  </select>
                </div>

                <div className="p-2 border border-gray-300 rounded cursor-pointer"
                  onClick={searchFilter} >
                  <Image
                    src="/Search_Icon.png"
                    alt="Search"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="h-[70vh] overflow-auto">
                {answers?.map((answer: any, index: number) => (
                  <Answer key={index} title={answer.title} description={answer.description} 
                    user={answer.userName}
                    onRemove={() => fetchRemoveAnswer(answer._id)}
                    onSee={() => onSee(answer._id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
