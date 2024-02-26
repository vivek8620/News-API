import Newsitem from './Newsitem'
import React, { Component } from 'react'
export default class News extends Component {
  constructor() {
    super()
    this.state = {
      article: []
    }
  }

  async getData() {
    var result = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&apiKey=702efdb9a80a4a8ea6a1aa5fe59aaa28`)
    let data = await result.json()
    //console.log(data.articles);
    this.setState({ article: data.articles })
  }

  componentDidMount() {
    this.getData()
  }
  componentDidUpdate(old) {
    if (old.category !== this.props.category) {
      this.getData()
    }
  }
  render() {
    return (
      <>
        <div className='container-fluid'>
          <div className='row'>
            {this.state.article.map((item, index) => {
              return <Newsitem
                title={item.title}
                author={item.author}
                url={item.url}
                image={item.urlToImage}
                content={item.content}
              />
            })}
          </div>
        </div>
      </>
    )
  }
}
