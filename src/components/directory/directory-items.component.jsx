import React from 'react';
import './directory-items.styles.scss';
import MenuItems from '../menu-items/menu-items.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

const Directory=({Sections})=>(
  <div className='directory-items'>
  {
    Sections.map(({id,title,imageUrl,size,linkUrl})=>(
        <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
    ))
  }
   </div>
)

     
  const mapStateToProps=createStructuredSelector({
     Sections:selectDirectorySections
  })
        
export default connect(mapStateToProps)(Directory);