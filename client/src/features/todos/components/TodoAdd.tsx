import {useForm} from 'react-hook-form'

export type Fields = {
  title: string
  description: string
}

export type TodoAddProps = {
  onSubmit: (props: Fields) => void
  isSubmitting?: boolean
}

export default function TodoAdd({
  onSubmit,
  isSubmitting = false
}: TodoAddProps) {
  const {handleSubmit, register, errors} = useForm<Fields>()

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Title
            <input type="text" name="title" ref={register} />
          </label>
        </div>
        <div>
          <label>
            Description
            <textarea name="description" ref={register} />
          </label>
        </div>
        {isSubmitting ? (
          'creating todo...'
        ) : (
          <button type="submit">create todo</button>
        )}
      </form>
      <div>{errors && JSON.stringify(errors, null, 2)}</div>
    </div>
  )
}
