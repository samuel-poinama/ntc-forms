import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import FiledPopUp from "@/components/panel/form/field-popup"
import Viewer from "@/components/panel/viewer"
import { reduceString } from "@/lib/parser"


export default function View() {
  const router = useRouter()
  const { id, edit, title, description, answer } = router.query

  const [form, setForm] = useState({} as any)
  const [field, setField] = useState({ isRequired: false } as any)
  const [error, setError] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const fetchForm = async () => {

    const res = await fetch(`/api/forms?id=${id}`)
    let newForm: any = {}
    try {
      newForm = await res.json()
    } catch (error) {
      newForm = { error: "Form not found" }
    }
    setForm(newForm)
  }

  const fetchNewForm = async () => {
    const res = await fetch("/api/forms", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await res.json()
    if (data.error) {
      setError(data.error)
    } else {
      setError("")
      router.push(`/view?id=${data._id}`)
    }
  }


  const fetchCreateResponse = async () => {
    const res = await fetch("/api/response", {
      method: "POST",
      body: JSON.stringify({ id: id, fields: form.fields }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await res.json()
    if (data.error) {
      console.log(data)
      setError(data.error + " " +data.field)
    } else {
      router.push(`/`)
    }
  }

  const fetchResponse = async () => {
    const res = await fetch(`/api/response?id=${id}`)
    const data = await res.json()
    
    if (data.error) {
      router.push("/404")
    } else {
      setForm(data)
    }

  }

  const show = () => {
    setIsVisible(!isVisible)
  }

  const addField = () => {
    setForm({ ...form, fields: [...form.fields, field] })
    setField({ required: false })
    show()
  }

  const removeField = (index: number) => {
    const newFields = form.fields.filter((field: any, i: number) => i !== index)
    setForm({ ...form, fields: newFields })
  }

  useEffect(() => {
    if (id && edit !== 'true' && answer !== 'true')
      fetchForm()
    else if (id && edit === 'false' && answer === 'true')
      fetchResponse()
    else if (title && description)
      setForm({ title, description, fields: [] })
    else
      setForm({ error: "Form not found" })
  }, [id, edit, title, description])

  if (form != undefined && Object.keys(form).length !== 0 && !form.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        { error && <div className="text-red-500 text-lg">{error}</div> }
          <div className="border border-gray-300 rounded-lg p-4 bg-white w-[100%] h-[100%]">
            <FiledPopUp field={field} setField={setField} isVisible={isVisible} error={""} hidePopup={show} save={addField} />
            <div className="flex justify-end items-center mb-4 space-x-2">
              { edit && edit === 'true' &&
              <div className="flex items-center space-x-2">
                <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg cursor-pointer"
                    onClick={show}>
                  +
                </div>
                <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg cursor-pointer"
                    onClick={fetchNewForm}>
                  Save
                </div>
              </div>
              }
              <Link className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg"
                  href={ edit && edit === 'true' ? "panel/forms" : "/"}>
                x
              </Link>
            </div>
            <div className="flex justify-center items-center mb-4 flex-col">
              <h1 className="text-4xl text-yellow-500 font-bold">{form.title}</h1>
              <p className="text-lg text-gray-500">
                { reduceString(form.description, 50) }
              </p>
            </div>

            <div className="overflow-y-auto h-[70vh]">
            <Viewer fields={form.fields} edit={edit} onRemove={removeField} />

                { !edit &&
                  <div className="flex justify-center items-center">
                    <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg cursor-pointer"
                        onClick={fetchCreateResponse}>
                      Submit
                    </div>
                  </div>
                }
            </div>
          </div>
        </div>
      )
    }
}
