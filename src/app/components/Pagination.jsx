"use client"
import React from 'react'
import {useSearchParams, usePathname, useRouter } from "next/navigation"
const Pagination = ({Count}) => {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const page = searchParams.get("page") || 1

    const params = new URLSearchParams(searchParams)
    const ITEM_PER_PAGE = 5

    const hasPrev = ITEM_PER_PAGE * (parseInt(page)-1) > 0
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < Count
    const pageTotal = Count/ITEM_PER_PAGE
    
    const HandlePageChange = (Type) => {
        Type === "Prev"
        ? params.set("page", parseInt(page) - 1)
        : params.set("page", parseInt(page) + 1)
        replace(`${pathname}?${params}`)
    }

  return (
     <div className='flex justify-between'>
          <button
              className="btn btn-ghost"
              disabled={!hasPrev}
              onClick={() => {HandlePageChange("Prev")} }
          >
              Prev
          </button>
          <div
              className='px-3 py-1 flex items-center rounded-md font-extrabold bg-white text-black'
          >
              {`${page} of ${Math.ceil(pageTotal)}`}
          </div>
          <button
              className="btn btn-ghost"
              disabled={!hasNext}
              onClick={() => {HandlePageChange("Next")} }
          >
              Next
          </button>
    </div>
  )
}

export default Pagination