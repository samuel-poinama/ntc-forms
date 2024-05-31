import Date from "@/components/panel/form/date";
import Text from "@/components/panel/form/text";
import Select from "@/components/panel/form/select";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Number from "@/components/panel/form/number";

export default function View() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({} as any);

  const fetchForm = async () => {

    const res = await fetch(`/api/forms?id=${id}`);
    const newForm = await res.json();
    setForm(newForm);
  };

  useEffect(() => {
    fetchForm();
  }, [id]);

  if (form != undefined && Object.keys(form).length !== 0 && !form.error) {
    return (
      <div className="flex justify-center items-center h-screen">
          <div className="border border-gray-300 rounded-lg p-4 bg-white w-[100%] h-[100%]">
            <div className="flex justify-end items-center mb-4 space-x-2">
              <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">
                +
              </div>
              <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">
                x
              </div>
              <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">
                ✔
              </div>
            </div>
            <div className="flex justify-center items-center mb-4 flex-col">
              <h1 className="text-4xl text-yellow-500 font-bold">{form.title}</h1>
              <p className="text-lg text-gray-500">
                {form.description.length > 20
                  ? form.description.substring(0, 20) + "..."
      : form.description}
              </p>
            </div>

            <div className="overflow-y-auto h-[70vh]">
            {form.fields.map((field: any, index: number) => {
                  switch (field.type) {
                    case "TEXT":
                      return (
                        <Text
                          key={index}
                          field={field}
                        />
                      )
                    case "NUMBER":
                      return (
                        <Number
                          key={index}
                          field={field}
                        />
                      )
                    case "BOOLEAN":
                      return (
                        <p>bool</p>
                      )
                    case "SELECT":
                      return (
                        <Select
                          key={index}
                          field={field}
                        />
                      )
                    case "DATE":
                      return (
                        <Date
                        field={field}
                        />
                      )
                  }
                })}
            </div>
          </div>
        </div>
      );
    }
}
