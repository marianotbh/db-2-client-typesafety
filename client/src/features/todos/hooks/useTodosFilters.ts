import {useMemo, useState} from 'react'
import usePagination from '../../../hooks/usePagination'

export interface TodosFiltersOptions {
  defaultShowCompleted?: boolean
  defaultPageSize?: number
  defaultPageNumber?: number
}

export default function useTodosFilters({
  defaultShowCompleted = true,
  defaultPageNumber,
  defaultPageSize
}: TodosFiltersOptions) {
  const pagination = usePagination({defaultPageSize, defaultPageNumber})
  const [showCompleted, setShowCompleted] = useState(defaultShowCompleted)

  return useMemo(
    () => ({
      ...pagination,
      showCompleted,
      setShowCompleted
    }),
    [pagination, showCompleted, setShowCompleted]
  )
}
