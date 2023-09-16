import { Component } from 'react';
 import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast.info('Input the request');
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
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}


export default Searchbar;
