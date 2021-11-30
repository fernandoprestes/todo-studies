import * as S from './styles'

interface IButton {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ text, type }: IButton) => {
  return <S.Button type={type}>{text}</S.Button>
}
