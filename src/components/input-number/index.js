import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'

/**
 * @author:chenzeji
 * @description 数字输入框
 * @prop atStyle {String} 样式 小程序限制问题
 * @prop size 大小 可选值：small、middle、normal 默认值：normal
 * @prop value {Number} 当前输入框值 default: 1
 * @prop min  {Number} 最小值 default: 0
 * @prop max {Number} 最大值 default:100
 * @prop step {Number} 每次点击改变的间隔大小 default:1
 * @prop onChange {Function} 监听事件改变函数
 */
class AtInputNumber extends Taro.Component {
  static addNum (num1, num2) {
    let sq1, sq2
    try {
      sq1 = num1.toString().split('.')[1].length
    } catch (e) {
      sq1 = 0
    }
    try {
      sq2 = num2.toString().split('.')[1].length
    } catch (e) {
      sq2 = 0
    }
    const m = Math.pow(10, Math.max(sq1, sq2))
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m
  }
  handleMinus () {
    const { value, min, step } = this.props
    let nextValue = AtInputNumber.addNum(value, -step)
    nextValue = nextValue > min ? nextValue : min
    this.props.onChange(nextValue)
  }
  handlePlus () {
    const { value, max, step } = this.props
    let nextValue = AtInputNumber.addNum(value, step)
    nextValue = nextValue < max ? nextValue : max
    this.props.onChange(nextValue)
  }
  getSize () {
    const sizeMap = {
      'small': 'width: 100px;',
      'middle': 'width: 200px;',
      'normal': 'width: 300px;'
    }
    return sizeMap[this.props.size] ? sizeMap[this.props.size] : ''
  }
  render () {
    const { value, min, max } = this.props

    return <View className='at-input-number' >
      <View className='at-input-number__btn' onClick={this.handleMinus.bind(this)}>
        <AtIcon value='subtract' color={value <= min ? '#ccc' : '#6190e8'} size='15' />
      </View>
      <Input className='at-input-number__input'
        type='number'
        value={value}
      />
      <View className='at-input-number__btn' onClick={this.handlePlus.bind(this)}>
        <AtIcon value='add' color={value >= max ? '#ccc' : '#6190e8'} size='15' />
      </View>
    </View>
  }
}
AtInputNumber.defaultProps = {
  atStyle: '',
  size: 'normal',
  value: 1,
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {}
}
AtInputNumber.propTypes = {
  atStyle: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
}
export default AtInputNumber
