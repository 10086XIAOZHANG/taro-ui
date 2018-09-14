import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtButtonProps extends AtComponent{
  size?: 'normal' | 'small'

  type?: 'primary' | 'secondary'

  circle?: boolean

  loading?: boolean

  disabled?: boolean

  onClick?: (event: BaseEventFunction) => void
}

declare const AtButton: ComponentClass<AtButtonProps>

export default AtButton
