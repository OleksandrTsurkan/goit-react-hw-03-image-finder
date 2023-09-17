import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonSearch, FormInput, FormSearch, Searchbardiv } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast.info('Введіть свій запит, будь ласка!');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset = () =>
    this.setState({
      value: '',
    });

  render() {
    const { value } = this.state;
    return (
      <Searchbardiv>
        <FormSearch onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            onChange={this.handleChange}
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ButtonSearch type="submit">
            <span>Search</span>
          </ButtonSearch>
        </FormSearch>
      </Searchbardiv>
    );
  }
}

export default Searchbar;
