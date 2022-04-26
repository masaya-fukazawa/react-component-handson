import React, {FC, ReactNode} from 'react'

type Props = {
  color: 'primary' | 'secondary' | 'default'
  label: string | ReactNode
}

export const Button: FC<Props> = ({
  label
}) => (
  <button>{label}</button>
)
