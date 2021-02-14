import styled, {css} from 'styled-components'

export type TodoItemProps = {
  title: string
  description: string
  isComplete: boolean
  onClick: () => void
  onToggle: () => void
  onDelete: () => void
}

export default function TodoListItem({
  title,
  description,
  isComplete = false,
  onClick,
  onToggle,
  onDelete
}: TodoItemProps) {
  return (
    <Wrapper isComplete={isComplete}>
      <CheckboxLabel>
        <Hidden>Toggle todo</Hidden>
        <Chekbox checked={isComplete} onChange={onToggle} />
      </CheckboxLabel>
      <InfoWrapper onClick={onClick}>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </InfoWrapper>
      <Bin onClick={onDelete} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{isComplete: boolean}>`
  ${({isComplete}) =>
    isComplete
      ? css`
          text-decoration: line-through;
        `
      : ''}

  display: flex;
  align-items: center;
  padding: 0.8rem;
  cursor: pointer;
  border: 1px solid gray;
  position: relative;

  & + & {
    margin-top: 1rem;
  }
`

const Bin = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  background: red;
  color: white;
  border-radius: 0.2rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '🗑';
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  margin-left: 1rem;
`

const Hidden = styled.span`
  opacity: 0;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
`

const CheckboxLabel = styled.label`
  cursor: pointer;
  padding: 1rem;
`

const Chekbox = styled.input.attrs({type: 'checkbox'})`
  cursor: pointer;
`

const Title = styled.span`
  display: block;
  font-size: 1.75rem;
  font-weight: 600;
`

const Description = styled.span`
  display: block;
  font-size: 1rem;
  margin-block-start: 0.5rem;
`
