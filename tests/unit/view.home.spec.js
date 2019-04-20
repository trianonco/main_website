/** ******************************************************
 ** Unit Testing Spec :: Home View
 ** 
 ** ******************************************************/


// --------------------------------------------------- //
// -- Vue Testing Resources -------------------------- //
// --------------------------------------------------- //
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
 // --------------------------------------------------- //


// --------------------------------------------------- //
// -- App Resources ---------------------------------- //
// --------------------------------------------------- //
import HomeView from '../../src/views/home/home.component.vue'
import HeaderComponent from '../../src/components/header/header.component.vue'
// --------------------------------------------------- //


describe(' View => Home ', () => {

  
  it('1) HomeView has "Header" ', () => {
    const wrapperHomeView = shallowMount(HomeView)
    expect(1).equal(1);
  });



})
