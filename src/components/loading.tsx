import { useEffect } from "react"

export default function Loading({
  fun,
  delay,
}: {
  fun?: () => void
  delay?: number
}) {
  useEffect(() => {
    if (delay === undefined) {
      return
    }

    setTimeout(() => {
      if (fun) {
        fun()
      }
    }, delay)
  }, [fun])

  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#2f5597] text-white">
      <div className="flex justify-center items-center">
        <h1 className="text-9xl m-0">Loading</h1>
        <div className="flex mt-40">
          <div className="dot bg-[#f4dd13] w-10 h-10 rounded-full mx-1 animate-bounce-fast"></div>
          <div className="dot bg-[#f4dd13] w-10 h-10 rounded-full mx-1 animate-bounce2-fast"></div>
          <div className="dot bg-[#f4dd13] w-10 h-10 rounded-full mx-1 animate-bounce4-fast"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes bounce-fast {
          0%,
          100% {
            transform: translateY(-200%)
          }
          50% {
            transform: translateY(0)
          }
        }

        @keyframes bounce2-fast {
          0%,
          100% {
            transform: translateY(-200%)
          }
          50% {
            transform: translateY(0)
          }
        }

        @keyframes bounce4-fast {
          0%,
          100% {
            transform: translateY(-200%)
          }
          50% {
            transform: translateY(0)
          }
        }

        .animate-bounce-fast {
          animation: bounce-fast 0.61s infinite alternate
        }

        .animate-bounce2-fast {
          animation: bounce2-fast 0.62s infinite alternate
        }

        .animate-bounce4-fast {
          animation: bounce4-fast 0.63s infinite alternate
        }

        .dot-container {
          margin-top: 20px /* Adjust this value to your preference */
        }
      `}</style>
    </div>
  )
}
