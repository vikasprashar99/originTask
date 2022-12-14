import { shallow } from 'enzyme';
import { OriginPage } from './originPage';

describe('App', () => {
  describe('using enzyme', () => {
    it('should render Origin Page', () => {
      const component = shallow(<OriginPage />);
      expect(component.getElements()).toMatchSnapshot();
    });
  });

  it('should check if amount input exists', async () => {
    const wrapper = shallow(<OriginPage />);
    const input = wrapper.find({ name: 'amount' });
    input.simulate('change', { target: { value: 2 } });
    expect(input).toBeTruthy();
  });

  it('should check if Date input exists', async () => {
    const wrapper = shallow(<OriginPage />);
    const input = wrapper.find({ name: 'reachDate' });
    expect(input).toBeTruthy();
  });
});
