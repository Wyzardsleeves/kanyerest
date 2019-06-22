import React, {Component} from 'react';
import axios from 'axios';
import loading from '../assets/images/transparent-background-loading.gif';
import vector from '../assets/images/kanye2-512.png';

class Quote extends Component{
  constructor(props){
    super(props);
    this.state = {
      quoteArr: [],
      favList: [],
      total: 0,
      show: "quotes"
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

  showQuotes = () => {
    this.setState({show: "quotes"})
  }

  showFav = () => {
    this.setState({show: "favorites"})
  }

  render(){
    let tempArr = this.state.quoteArr;
    let tempFav = this.state.favList;
    return(
      <div className="quote-stuff container">
        <h3>Kanye Quotes</h3>
        <button className="btn btn-large blue show-btn" onClick={this.showQuotes}>Go to Quotes</button>
        <button className="btn btn-large blue show-btn" onClick={this.showFav}>Go to Favorites</button>
        <div className="card-panel grey lighten-4">
          {this.state.quoteArr.length < this.state.total &&
            <img src={loading} alt="Loading...."/>
          }
          {this.state.quoteArr.length >= this.state.total && this.state.show === "quotes" &&
          <div>
            <h4>Get Quotes!</h4>
            <button className="btn green" onClick={this.getNewArray}>Generate</button><br/>
            <ul>
              {this.state.quoteArr.slice(tempArr.length - 10, tempArr.length).map((quote) =>
                <li className="quote" title="Click to favorite" key={tempArr.indexOf(quote)} onClick={(e) => this.pushFav(e, quote)}>
                  <div className="card-panel">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img className="kanye" src={vector} />
                          </td>
                          <td>
                            <h5 className="">
                              <i class="fas fa-quote-left quote-icon"></i>
                               {quote}
                              <i class="fas fa-quote-right quote-icon"></i>
                            </h5>
                          </td>
                          <td>
                            {tempFav.indexOf(quote) > -1 &&
                              <h4><i className="right fas fa-heart blue-text text-lighten-1 heart"></i></h4>
                            }
                            {tempFav.indexOf(quote) < 0 &&
                              <h4><i className="fav right far fa-heart heart"></i></h4>
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              )}
            </ul>
            </div>
          }
          {this.state.show === "favorites" &&
            <div>
              <h4>Favorites</h4>
              <ul>
                {this.state.favList.map((quote) =>
                  <li className="quote" title="Click to favorite"key={tempArr.indexOf(quote)} onClick={(e) => this.pushFav(e, quote)}>
                    <div className="card-panel">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <h5 className="">
                                <i class="fas fa-quote-left quote-icon"></i>
                                 {quote}
                                <i class="fas fa-quote-right quote-icon"></i>
                              </h5>
                            </td>
                            <td>
                              {tempFav.indexOf(quote) > -1 &&
                                <h5><i class="right fas fa-heart blue-text text-lighten-2"></i></h5>
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default  Quote;
