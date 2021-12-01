import * as S from './styles'

interface IButton {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

export const Button = ({ text, type, onClick }: IButton) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {text}
    </S.Button>
  )
}
