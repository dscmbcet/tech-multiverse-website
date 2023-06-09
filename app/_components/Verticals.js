import './Verticals.css'

function Verticals() {
  return (
    <div className='verticals-pg'> 
       
        <h1 className='verticals-title'>bootcamp <br/>verticals</h1>
        
        <div className='verticals-content'>click the doors to find out !</div>
        <div className='verticals-doors'>
            <img src='/door1.png' className='door1'/>
            <img src='/door2.png' className='door2'/>
            <img src='/door3.png' className='door3'/>
        </div>
    </div>
  )
}

export default Verticals
