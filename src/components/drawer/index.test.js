import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtDrawer from '../../../.temp/components/drawer/index'

describe('AtDrawer Snap', () => {
  it('render AtDrawer -- props show', () => {
    const componet = renderToString(<AtDrawer show />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtDrawer -- props mask', () => {
    const componet = renderToString(<AtDrawer mask={false} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtDrawer -- props width', () => {
    const componet = renderToString(<AtDrawer width='50%' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtDrawer -- props items', () => {
    const componet = renderToString(<AtDrawer items={['菜单1', '菜单2']} />)
    expect(componet).toMatchSnapshot()
  })
})

describe('AtDrawer Event', () => {
  it('AtDrawer onItemClick & onClose', () => {
    const onItemClick = jest.fn()
    const onClose = jest.fn()
    const component = renderIntoDocument(<AtDrawer show items={['菜单1', '菜单2']} onItemClick={onItemClick} onClose={onClose} />)
    const items = findDOMNode(component, 'at-drawer').querySelectorAll('.at-list__item')
    const item0 = items[0]
    Simulate.click(item0)
    process.nextTick(() => {
      expect(onItemClick).toBeCalled()
    })
    setTimeout(() => {
      expect(onClose).toBeCalled()
    }, 350)
  })

  it('AtDrawer item NO.0 & NO.1 click, onItemClick(index) index should be 0 and 1', () => {
    const onItemClick = jest.fn()
    const component = renderIntoDocument(<AtDrawer show items={['菜单1', '菜单2']} onItemClick={onItemClick} />)
    const items = findDOMNode(component, 'at-drawer').querySelectorAll('.at-list__item')
    const item0 = items[0]
    const item1 = items[1]
    Simulate.click(item0)
    Simulate.click(item1)
    process.nextTick(() => {
      expect(onItemClick.mock.calls[0][0]).toBe(0)
      expect(onItemClick.mock.calls[1][0]).toBe(1)
    })
  })

  it('AtDrawer click mask onClose', () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(<AtDrawer show items={['菜单1', '菜单2']} onClose={onClick} />)
    const componentDom = findDOMNode(component, 'at-drawer')
    const mask = componentDom.querySelector('.at-drawer__mask')
    Simulate.click(mask)
    setTimeout(() => {
      expect(onClick).toBeCalled()
    }, 350)
  })
})
