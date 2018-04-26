import React from 'react'
import sinon from 'sinon'
import { render, shallow, mount }  from 'enzyme'
import store from '@/stores'
import { DropDown } from 'pilipa'
const data = [{
  key: 1,
  title: '测试'
},{
  key: 2,
  title: '测试2'
},{
  key: 4,
  title: 'jasmine'
}]

class Container extends React.Component {
  data = []
  render () {
    return (
      <div><DropDown data={this.data} ref='dropdown'/></div>
    )
  }
}

describe('<DropDown />', () => {
  it('simulate xhr', (done) => {
    let dataTmp  = []
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Container />)
    const dropdown = wrapper.ref('dropdown')
    var evObj = document.createEvent('MouseEvents')
    evObj.initEvent( 'mouseover' )
    wrapper.find('.costom-btn-group').getDOMNode().dispatchEvent(evObj)
    expect(dropdown.state.visible).toBe(true)
    wrapper.update()
    expect(wrapper.find('.results p').text()).toBe('未搜到结果')
    // wrapper.instance().data = data
    wrapper.instance().data = data
    wrapper.update()
    done()
  })

  it('test filter', () => {
    const wrapper = mount(<DropDown data={data} filter />)
    wrapper.setState({
      visible: true
    })
    const ins = wrapper.instance();
    ins.__proto__.handleChange = sinon.spy()

    $(wrapper.find('input').getDOMNode()).val('jasmine')
    wrapper.find('input').simulate('change')
    expect(ins.state.data.length).toBe(1)
    expect(ins.state.dataTmp.length).toBe(1)
    expect(ins.state.data[0].title).toBe('jasmine')
    console.log(wrapper.find('ul').html())
    wrapper.mount()
    wrapper.find('input').simulate('change')
    sinon.assert.calledOnce(ins.__proto__.handleChange)
  })

  it('simulate btn mouseover, visible is true', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<DropDown data={data} callBack={onButtonClick}/>)
    var evObj = document.createEvent('MouseEvents')
    evObj.initEvent( 'mouseover' )
    wrapper.find('.costom-btn-group').getDOMNode().dispatchEvent(evObj)
    expect(wrapper.state('visible')).toBe(true)
  })

  it('simulate btn mouseover, handleEnter is called', (done) => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<DropDown data={data} callBack={onButtonClick}/>)
    var evObj = document.createEvent('MouseEvents')
    evObj.initEvent( 'mouseover' )
    const ins = wrapper.instance();
    ins.handleEnter = sinon.spy()
    wrapper.find('.costom-btn-group').getDOMNode().dispatchEvent(evObj)
    sinon.assert.calledOnce(ins.handleEnter)
    done()
  })

  it('simulate item click events', (done) => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<DropDown data={data} callBack={onButtonClick}/>)
    wrapper.setState({
      visible: true
    })
    expect(wrapper.find('.results ul li').length).toBe(3)
    expect(wrapper.find('ul li').at(0).text()).toBe('测试')
    wrapper.find('ul li').at(0).simulate('click')
    expect(wrapper.state('visible')).toBe(true)
    setTimeout(() => {
      sinon.assert.calledOnce(onButtonClick)
      data[0].capital = ["CS"]
      sinon.assert.calledWith(onButtonClick, data[0])
      expect(wrapper.state('visible')).toBe(false)
      done()
    }, 310)
  });
});
