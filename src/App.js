import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded:true,
          items: json,
        })
    });
  }

  render() {
    var {isLoaded,items} = this.state;

    if (!isLoaded){
      return <div>Loading...</div>;
    }
    else{
      return (
        <div className="App">
          <ul>
            {items.map(item => (
                  <li key={item.id}>
                    <img src={item.avatar_url} alt="" style={{height:100, width:100}}/>
                    <br/>
                    Login: {item.login} 
                    <br/>
                    ID: {item.id}
                    <br/>
                    NodeID: {item.node_id}
                    <br/>
                    User-Type: {item.type}
                    <br/>
                    Site-Admin: item.site_admin
                    <br/>
                    Repository: <a href={item.url} target="_blank" >{item.url} </a> 
                    <br/>
                    HTML-URL: <a href={item.html_url} target="_blank">{item.html_url}</a>
                    <br/>
                    Follower-User: <a href={item.followers_url} target="_blank">{item.followers_url}</a>
                    <br/>
                    Following-URL <a href={item.following_url} target="_blank">{item.following_url}</a>
                    <br/>
                    GISTS-URL: <a href={item.gists_url} target="_blank">{item.gists_url}</a>
                    <br/>
                    Start-URL: <a href={item.starred_url} target="_blank">{item.starred_url}</a>
                    <br/>
                    Subscription-URL: <a href={item.subscriptions_url} target="_blank">{item.subscriptions_url}</a>
                    <br/>
                    Organizations-URL: <a href={item.organizations_url} target="_blank">{item.organizations_url}</a>
                    <br/>
                    Repos-URL: <a href={item.repos_url} target="_blank">{item.repos_url}</a>
                    <br/>
                    Event-URL: <a href={item.events_url} target="_blank">item.events_url</a>
                    <br/>
                    Receive-Event-URL: <a href={item.received_events_url} target="_blank">{item.received_events_url}</a>
                  </li>
              ))};
          </ul>
        </div>
      );
    }
  }
}

export default App;
