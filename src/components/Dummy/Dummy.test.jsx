import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/dom';
import { Dummy } from '.';

describe(' Dummy />', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
