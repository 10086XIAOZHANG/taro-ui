
import PropTypes from 'prop-types';
import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components"

import './index.scss'


export default class AtNoticebar extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      show: true,
    }
  }

  onClose(e) {
    this.setState({
      show: false,
    }) 
  }

  onGotoMore() {
    if (Taro.getEnv() == "WEAPP") {
      Taro.navigateTo({
        url: this.props.moreUrl,
      })
    } else {
      alert('该环境尚未实现此API')
    }
  }

  render(){
    let {
      close,
      moreUrl,
      moreText,
      single,
      icon,
    } = this.props
    let rootClassName = ['at-noticebar']
    if (moreUrl) rootClassName.push('at-noticebar--more') 
    if (single) rootClassName.push('at-noticebar--single') 

    return (
      this.state.show && 
      <View className={rootClassName}>
        {close && <View className="at-noticebar__close" onClick={this.onClose.bind(this)}></View>}
        <View className="at-noticebar__content">
          {icon && <Text></Text>}{this.props.children}
        </View>
        {moreUrl && <View className="at-noticebar__more" onClick={this.onGotoMore.bind(this)}>{moreText}</View>}
      </View>
    )
  }
}

AtNoticebar.defaultProps = {
  close: false,
  single: false,
  moreText: '查看详情',
  moreUrl: '',
  icon: '',
}

AtNoticebar.propTypes = {
  close: PropTypes.bool,
  single: PropTypes.bool,
  moreText: PropTypes.string,
  moreUrl: PropTypes.string,
  icon: PropTypes.string,
};