import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtSearchBar from '../../../.temp/components/search-bar/index'

describe('AtSearchBar Snap', () => {
  it('render initial AtSwitch', () => {
    const componet = renderToString(<AtSearchBar />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props value', () => {
    const componet = renderToString(<AtSearchBar value='value' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props placeholder', () => {
    const componet = renderToString(<AtSearchBar placeholder='placeholder' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props maxlength', () => {
    const componet = renderToString(<AtSearchBar maxlength={120} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props disabled', () => {
    const componet1 = renderToString(<AtSearchBar fixed />)
    expect(componet1).toMatchSnapshot()
  })

  it('render AtSearchBar -- props focus', () => {
    const componet1 = renderToString(<AtSearchBar focus />)
    expect(componet1).toMatchSnapshot()
  })

  it('render AtSearchBar -- props disabled', () => {
    const componet1 = renderToString(<AtSearchBar disabled />)
    expect(componet1).toMatchSnapshot()
  })

  it('render AtSearchBar -- props showActionButton', () => {
    const componet1 = renderToString(<AtSearchBar showActionButton />)
    expect(componet1).toMatchSnapshot()
  })

  it('render AtSearchBar -- props actionName', () => {
    const componet1 = renderToString(<AtSearchBar actionName='actionName' />)
    expect(componet1).toMatchSnapshot()
  })
})
