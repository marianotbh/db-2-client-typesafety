import {useMemo, useState} from 'react'

export type UsePaginationOptions = {
  defaultPageNumber?: number
  defaultPageSize?: number
}

export default function usePagination({
  defaultPageNumber = 0,
  defaultPageSize = 10
}: UsePaginationOptions = {}) {
  const [pageNumber, setPageNumber] = useState(defaultPageNumber)
  const [pageSize, setPageSize] = useState(defaultPageSize)

  return useMemo(
    () => ({
      pageNumber,
      pageSize,
      setPageNumber,
      setPageSize
    }),
    [pageNumber, pageSize]
  )
}
