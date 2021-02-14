export type TodoListFiltersProps = {
  showCompleted?: boolean
  pageSize?: number
  pageNumber?: number
  onShowCompletedChange?: (showCompleted: boolean) => void
  onPageSizeChange?: (pageSize: number) => void
  onPageNumberChange?: (pageNumber: number) => void
}

export default function TodoListFilters({
  showCompleted,
  pageNumber,
  pageSize,
  onShowCompletedChange,
  onPageNumberChange,
  onPageSizeChange
}: TodoListFiltersProps) {
  const handlePageNumberChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onPageNumberChange?.(Number(ev.currentTarget.value))
  }

  const handlePageSizeChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    onPageSizeChange?.(Number(ev.currentTarget.value))
  }

  const handleShowCompletedChange = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    onShowCompletedChange?.(ev.currentTarget.checked)
  }

  return (
    <div>
      <label>
        show compelted:
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={handleShowCompletedChange}
        />
      </label>
      <label>
        page:
        <input
          type="number"
          name="page-number"
          value={pageNumber}
          onChange={handlePageNumberChange}
        />
      </label>
      <label>
        page size:
        <select
          name="page-size"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </label>
    </div>
  )
}
