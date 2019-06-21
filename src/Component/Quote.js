import React, {Component} from 'react';
import axios from 'axios';
import loading from '../assets/images/transparent-background-loading.gif';

class Quote extends Component{
  constructor(props){
    super(props);
    this.state = {
      quoteArr: [],
      favList: [],
      total: 0
    }
  }

  componentWillMount(){
    this.getNewArray();
  }

  componentDidMount(){
    this.randNum();
  }

  randNum = () => {
    function num(){
      let firstNum = Math.floor(Math.random() * 20000) + 1;
      let secondNum = Math.floor(Math.random() * 1000) + 1;
      let finalNum = firstNum.toString() + '-' + secondNum.toString();
      return finalNum
    }
    console.log(num());
  }

  getNewArray = () => {
    this.addTotal();

    axios.get('https://api.kanye.rest')
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .then((response) => {
      let newArray = this.state.quoteArr.slice();
      newArray.push(response.data.quote);
      console.log(newArray);
      this.setState({quoteArr: newArray})
      return axios.get('https://api.kanye.rest');
    })
    .catch((error) => {
      console.log(error.message)
    })
    console.log(this.state.quoteArr.length + " num quotes");
    console.log(this.state.total + " num total");
  }

  pushFav = (e, quote) => {
    e.preventDefault();
    let newArray = this.state.favList;
    newArray.push(quote);
    this.setState({favList: newArray});
    console.log(this.state.favList);
  }

  addTotal = () => {
    this.setState({total: this.state.total + 10})
  }

  render(){
    let tempArr = this.state.quoteArr;
    let tempFav = this.state.favList;
    return(
      <div className="quote-stuff container">
        <h4>Kanye Quotes</h4>
        <button className="btn green" onClick={this.getNewArray}>Refresh</button><br/>
        {this.state.quoteArr.length < this.state.total &&
          <img src={loading} alt="Loading...."/>
        }
        {this.state.quoteArr.length >= this.state.total &&
          <ul>
            {this.state.quoteArr.slice(tempArr.length - 10, tempArr.length).map((quote) =>
              <li key={tempArr.indexOf(quote)} onClick={(e) => this.pushFav(e, quote)}>
                <div className="card-panel">
                  <p className="">{quote}</p>
                  {tempFav.indexOf(quote) > -1 &&
                    <p>Favorited!</p>
                  }
                </div>
              </li>
            )}
          </ul>
        }
      </div>
    )
  }
}

export default  Quote;
