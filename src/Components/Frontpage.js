import React from 'react'
import './Frontpage.css'

export default function Frontpage() {
    return (
        <div classname= 'container'>

            <div className='main-pc'>
            <img src={'Images/image.jpeg'} alt="image" height='800px' wieght='100px' />
            <div className= 'grid-pic'>
              <div className='column1'>

            
                 <img src={'Images/images.jpeg'} alt="image" height='100px' wieght='100px' />
                 <img src={'Images/images1.jpeg'} alt="image" height='100px' wieght='100px' />
                 <img src={'Images/images2.jpeg'} alt="image" height='100px' wieght='100px' />
                 </div>
                 <div className= 'column2'>

            
                <img src={'Images/images3.jpeg'} alt="image" height='100px' wieght='100px' />
                <img src={'Images/images4.jpeg'} alt="image" height='100px' wieght='100px' />
                <img src={'Images/images5.jpeg'} alt="image" height='100px' wieght='100px' />
                </div>
                </div>

            </div>
        </div>
    )
}
