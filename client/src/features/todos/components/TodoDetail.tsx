import styled from 'styled-components'

export type TodoDetailProps = {
  id: string
  title: string
  description: string
  isComplete: boolean
}

export default function TodoDetail({
  id,
  title,
  description,
  isComplete
}: TodoDetailProps) {
  return (
    <Wrapper>
      <Field>
        <FieldName>Id</FieldName>
        <FieldValue>{id}</FieldValue>
      </Field>
      <Field>
        <FieldName>Title</FieldName>
        <FieldValue>{title}</FieldValue>
      </Field>
      <Field>
        <FieldName>Description</FieldName>
        <FieldValue>{description}</FieldValue>
      </Field>
      <Field>
        <FieldName>Completed?</FieldName>
        <FieldValue>{isComplete ? '✔' : '❌'}</FieldValue>
      </Field>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid gray;
  width: 100%;
`

const Field = styled.div`
  display: flex;
  width: 100%;
  padding: 0.8rem;

  & + & {
    border-top: 1px solid gray;
    margin-top: 1rem;
  }
`

const FieldName = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  width: 30%;
`

const FieldValue = styled.div`
  font-size: 1.2rem;
  width: 70%;
`
