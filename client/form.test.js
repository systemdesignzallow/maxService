import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UpperForm from './src/components/UpperForm'
import LowerForm from './src/components/LowerForm'
import Index from './src/components/Index'

describe('Upper Form and Lower Form Components', () => {
  const upperFormMounted = mount(<UpperForm />);

  const sampleData = [{
      _id: '5c9fe75de932d6cdda1cc370',
      agent_name: 'Ella-Rose Robles',
      recent_sales: 16,
      phone: '(268) 345-8161',
      agent_type: 'listing',
      average_stars: 4.83,
      num_ratings: 263,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor12.jpg',
      __v: 0
    },
    {
      _id: '5c9fe75de932d6cdda1cc382',
      agent_name: 'Bethany Dunkley',
      recent_sales: 3,
      phone: '(110) 107-8582',
      agent_type: 'premier',
      average_stars: 3.3,
      num_ratings: 1,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor30.jpg',
      __v: 0
    },
    {
      _id: '5c9fe75de932d6cdda1cc398',
      agent_name: 'Samiyah Nairn',
      recent_sales: 53,
      phone: '(426) 645-8043',
      agent_type: 'premier',
      average_stars: 4.11,
      num_ratings: 88,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor52.jpg',
      __v: 0
    },
    {
      _id: '5c9fe75de932d6cdda1cc3c6',
      agent_name: 'Jennifer Nummerdor',
      recent_sales: 31,
      phone: '(400) 086-0825',
      agent_type: 'premier',
      average_stars: 2.84,
      num_ratings: 330,
      agent_photo: 'https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor98.jpg',
      __v: 0
    }
  ]

  test('should call componentWillMount', () => {
    const spy = jest.spyOn(Index.prototype, 'componentWillMount');
    const page = mount( <Index /> );
    expect(spy).toHaveBeenCalled();
    expect(page.state.length).not.toBe(0)
    spy.mockReset();
    spy.mockRestore();
  });

  test('should call setState and should render components', () => {
    const page = shallow( <Index /> );
    page.setState({
      agents: sampleData
    })
    expect(page.state.length).toBe(1);
  });

  test('should correctly render the upper form component', () => {
    const page = render( <UpperForm/> );
    expect(page).toMatchSnapshot();
  })

  test('should correctly render the lower form component', () => {
    const page = render( <LowerForm/> );
    expect(page).toMatchSnapshot();
  })

  test('renders something in the index component', () => {
    const wrapper = mount(<div className="formOuterContainer"/>);
    expect(wrapper.exists(".formOuterContainer")).toBe(true);
    expect(wrapper.find(".form-outerrr-container").exists()).toBe(false);
  });

  test('should have an array with data in it', () => {
    expect(sampleData.length).toBe(4)
    expect(typeof sampleData[0].recent_sales).toBe('number')
    expect(Array.isArray(sampleData)).toBe(true)
  })

  test('a button should exist', () => {
    const button = upperFormMounted.find('.formContactButton');
    expect(button.length).toBe(1);
  });

  test('it should have 4 places on input form for text', () => {
    const input = upperFormMounted.find('input[type="text"]')
    expect(input.length).toBe(4);
  });

  test('it should have a checkbox', () => {
    const input = upperFormMounted.find('input[type="checkbox"]')
    expect(input.length).toBe(1);
  });

  test('it should render the type of agent', () => {
    const wrapper = mount(<div className="formAgentType"/>);
    expect(wrapper.find(".formAgentType").exists()).toBe(true)
  });
});