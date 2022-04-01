import React, {PureComponent} from 'react'

class Article extends PureComponent{
  constructor(props){
      super(props)
      
      this.state = {
          count:0
      }
  }
//    state = {
//        isOpen: false
//    }
    
   /* 
   shouldComponentUpdate(nextProps,nextState) {
        return this.state.isOpen !== nextState.isOpen
    }
      */
    
    componentWillMount() {
        console.log('---','mounting...')
    }

   /*
    componentWillReceiveProps(nextProps) {
        console.log('---','will recieve props')
        if (nextProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen:nextProps.defaultOpen
            })
        }
    }
    */

    componentWillUpdate() {
        console.log('---','will update')
    }

    render() {
    const {article,isOpen,onButtonClick} = this.props
    const body = isOpen && <section className='card-text'>{article.text}</section>
    return (
        <div className='card mx-auto' style={{width:'50%'}}>
            <div className='card-header'>
              <h2 className='d-flex justify-content-between align-items-center'>
              {article.title}
              <button onClick={onButtonClick} className="btn btn-primary float-right">
                {isOpen ? 'close' : 'open'}
              </button>
                </h2>
            </div>
            <div className='card-body'>
                <h6 className='card-subtitle text-muted'>
                    creation date: {(new Date(article.date)).toDateString()}
                </h6>
                {body}
            </div>  
    </div>
  )
    }
    incrementCounter = () => {
        this.setState({
            count:this.state.count+1
        })
    }
}





export default Article