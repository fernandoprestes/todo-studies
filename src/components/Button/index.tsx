import * as S from './styles'

interface IButton {
  text: string
}

export const Button = ({ text }: IButton) => {
  return <S.Button>{text}</S.Button>
}
