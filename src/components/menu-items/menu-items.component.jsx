import React from 'react';
import './menu-items.styles.scss';
import{withRouter} from 'react-router-dom'

const MenuItems=({id,title,imageUrl,size,linkUrl,history,match})=>(
    <div className={`${size} menu-items`}>
      <div key={id} className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
          <div onClick={()=>history.push(`${match.url}${linkUrl}`)} className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
)
export default withRouter(MenuItems);