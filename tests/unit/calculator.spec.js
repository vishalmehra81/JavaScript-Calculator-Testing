import { expect } from 'chai'
import { createWrapper, shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 4;
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9);
  })

  it('should be able to add 1 to 4 resulting in 5', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 1;
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5);
  })

  it('should be able to subtract 4 from 7 resulting in 3', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3);
  })

  it('should be able to multiply 3 with 5 resulting in 15', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  })

  it('should be able to divide 21 by 7 resulting in 3', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3);
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('17')
    wrapper.vm.numberClick('112')
    wrapper.vm.numberClick('08')
    expect(wrapper.vm.runningTotal).to.equal(1711208);
  })

  it('should be able to chain multiple operations together', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('8');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('10');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('10');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(30);
  })
})
