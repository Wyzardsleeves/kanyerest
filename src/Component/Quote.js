import React, {Component} from 'react';
import axios from 'axios';
import loading from '../assets/images/transparent-background-loading.gif';
import vector from '../assets/images/kanye.png';

class Quote extends Component{
  constructor(props){
    super(props);
    this.state = {
      quoteArr: [],
      listArr: [],
      favList: [],
      total: 0,
      show: "quotes",
    }
  }

  componentWillMount(){
    this.getNewArray();
    this.getNewList();



  }

  componentDidMount(){

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
      this.setState({listArr: this.state.quoteArr.reverse().slice(0, 10)})
      return axios.get('https://api.kanye.rest');
    })
    .catch((error) => {
      console.log(error.message)
    })
    this.setState({show: "quotes"});
  }

  getNewList = () => {
    let currentList = this.state.quoteArr;
    this.setState({listArr: currentList.slice(0, 10)})
  }

  pushFav = (e, quote) => {
    e.preventDefault();

    //new quote replace fetch
    let listArr = this.state.listArr;
    let toReplace = listArr.indexOf(quote);
    axios.get('https://api.kanye.rest')
    .then((response) => {
      listArr.splice(toReplace, 1, response.data.quote);
      this.setState({listArr: listArr})
    })

    //send to favorites
    let newArray = this.state.favList;
    newArray.push(quote);
    this.setState({favList: newArray});
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

  changeSort = (e, pass) => {
    e.preventDefault();
    this.setState({show: pass})
  }

  render(){
    let tempArr = this.state.quoteArr;
    let tempFav = this.state.favList;
    return(
      <div className="quote-stuff container">
        <h3 onClick={this.chopDown}>Kanye Quotes</h3>
        <button className="btn btn-large blue show-btn" onClick={this.showQuotes}>Go to Quotes</button>
        <button className="btn btn-large blue show-btn" onClick={this.showFav}>Go to Favorites ({this.state.favList.length})</button>
        <div className="card-panel grey lighten-4">
          {this.state.quoteArr.length < this.state.total &&
            <img src={loading} alt="Loading...."/>
          }
          {this.state.quoteArr.length >= this.state.total && this.state.show === "quotes" &&
          <div>
            <h4>Get Quotes!</h4>
            <button className="btn green" onClick={this.getNewArray}>Generate</button><br/>
            <div>
              <ul className="sort-funcs">
                <li><h5>Sort Order: </h5></li>
                <li><h5 className="sortop" onClick={(e) => this.changeSort(e, "asc")}>ASC</h5></li>
                <li><h5 className="sortop" onClick={(e) => this.changeSort(e, "desc")}>DESC</h5></li>
              </ul>
            </div>
            <ul>
              {this.state.listArr.map((quote) =>
                <li className="quote" title="Click to favorite" key={this.state.listArr.indexOf(quote)} onClick={(e) => this.pushFav(e, quote)}>
                  <div className="card-panel">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img className="kanye" src={vector} />
                          </td>
                          <td>
                            <h5 className="">
                              <i className="fas fa-quote-left quote-icon"></i>
                               {quote}
                              <i className="fas fa-quote-right quote-icon"></i>
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

          {/* Sorted conditional renderings */}
          {this.state.quoteArr.length >= this.state.total && this.state.show === "desc" &&
          <div>
            <h4>Get Quotes!</h4>
            <button className="btn green" onClick={this.getNewArray}>Generate</button><br/>
            <div>
              <ul className="sort-funcs">
                <li><h5>Sort Order: </h5></li>
                <li><h5 className="sortop" onClick={(e) => this.changeSort(e, "asc")}>ASC</h5></li>
                <li><h5 className="sortop selected blue lignten-4" onClick={(e) => this.changeSort(e, "desc")}>DESC</h5></li>
              </ul>
            </div>
            <ul>
              {this.state.listArr.sort(function(a, b){
                  return b.length - a.length;
                }).map((quote) =>
                <li className="quote" title="Click to favorite" key={this.state.listArr.indexOf(quote)} onClick={(e) => this.pushFav(e, quote)}>
                  <div className="card-panel">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img className="kanye" src={vector} />
                          </td>
                          <td>
                            <h5 className="">
                              <i className="fas fa-quote-left quote-icon"></i>
                               {quote}
                              <i className="fas fa-quote-right quote-icon"></i>
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
          {this.state.quoteArr.length >= this.state.total && this.state.show === "asc" &&
          <div>
            <h4>Get Quotes!</h4>
            <button className="btn green" onClick={this.getNewArray}>Generate</button><br/>
            <div className="sort-funcs">
              <ul className="sort-funcs">
                <li><h5>Sort Order: </h5></li>
                <li><h5 className="sortop selected whie-text blue lignten-4" onClick={(e) => this.changeSort(e, "asc")}>ASC</h5></li>
                <li><h5 className="sortop" onClick={(e) => this.changeSort(e, "desc")}>DESC</h5></li>
              </ul>
            </div>
            <ul>
              {this.state.listArr.sort(function(a, b){
                  return a.length - b.length;
                }).map((quote) =>
                <li className="quote" title="Click to favorite" key={this.state.listArr.indexOf(quote)} onClick={(e) => this.pushFav(e, quote)}>
                  <div className="card-panel">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img className="kanye" src={vector} />
                          </td>
                          <td>
                            <h5 className="">
                              <i className="fas fa-quote-left quote-icon"></i>
                               {quote}
                              <i className="fas fa-quote-right quote-icon"></i>
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
          {/* ----------------------------- */}

          {this.state.show === "favorites" &&
            <div>
              <h4>Favorites</h4>
              {
                this.state.favList.length < 1 && <h4>Add Favorites to view them here!</h4>
              }
              <ul>
                {this.state.favList.map((quote) =>
                  <li className="quote" title="Click to favorite"key={this.state.listArr.indexOf(quote)}>
                    <div className="card-panel">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <h5 className="">
                                <i className="fas fa-quote-left quote-icon"></i>
                                 {quote}
                                <i className="fas fa-quote-right quote-icon"></i>
                              </h5>
                            </td>
                            <td>
                              {tempFav.indexOf(quote) > -1 &&
                                <h5><i className="right fas fa-heart blue-text text-lighten-2"></i></h5>
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
