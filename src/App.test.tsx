import { shallow } from 'enzyme';
import { App } from './App';
import { render } from '@testing-library/react';
import { OriginPage } from './originPage';

describe('App', () => {
  describe('using enzyme', () => {
    it('should render Origin Page', () => {
      // when
      const component = shallow(<OriginPage />);
      // then
      expect(component.getElements()).toMatchSnapshot();
    });
  });
});
