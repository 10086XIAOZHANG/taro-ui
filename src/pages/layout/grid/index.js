import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtGrid from '../../../components/grid/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class GridPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Grid Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      data: [
        {
          icon: 'emoji',
          value: '放置文本'
        },
        {
          icon: 'emoji',
          value: '放置文本'
        },
        {
          icon: 'emoji',
          value: '放置文本'
        },
        {
          icon: 'emoji',
          value: '放置文本'
        },
        {
          icon: 'emoji',
          value: '放置文本'
        },
        {
          icon: 'emoji',
          value: '放置文本'
        }
      ]
    }
  }

  handleClick = (...x) => {
    console.log(...x)
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='宫格布局'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>正方形案例</View>
            <View className='panel__content'>
              <View className='example__body'>
                <AtGrid data={this.state.data} onClick={this.handleClick} />
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>矩形案例</View>
            <View className='panel__content'>
              <View className='example__body'>
                <AtGrid mode='rect' data={this.state.data} />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
