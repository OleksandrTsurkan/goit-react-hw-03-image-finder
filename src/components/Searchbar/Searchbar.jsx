import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
