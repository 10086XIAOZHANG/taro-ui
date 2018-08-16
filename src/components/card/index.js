import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import PropTypes from 'prop-types'

import './index.scss'

export default class AtCard extends Taro.Component {
  render () {
    const { title, note, extra, thumb, isFull, onClick } = this.props

    const rootClass = ['at-card']

    if (isFull) {
      rootClass.push('at-card--full')
    }

    return (
      <View className={rootClass} onClick={onClick}>
        <View className='at-card-header'>
          {thumb && (
            <View className='at-card-header__thumb'>
              <Image
                className='at-card-header__thumb-info'
                mode='scaleToFill'
                src={thumb}
              />
            </View>
          )}
          <Text className='at-card-header__title'>{title}</Text>
          {extra && <Text className='at-card-header__extra'>{extra}</Text>}
        </View>
        <View className='at-card-content'>
          <View className='at-card-content__info'>{this.props.children}</View>
          {note && <View className='at-card-content__note'>{note}</View>}
        </View>
      </View>
    )
  }
}

AtCard.propTypes = {
  note: PropTypes.string,
  isFull: PropTypes.bool,
  thumb: PropTypes.string,
  title: PropTypes.string,
  extra: PropTypes.string,
  onClick: PropTypes.func,
}
