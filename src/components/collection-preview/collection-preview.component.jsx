import React from 'react';
import './collection-preview.styles.scss';
import CollectionItems from '../collection-items/collection-items.component';

const CollectionPreview=({items,title})=>(
    <div className='collection-preview'>
     <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
      {
          items.filter((item,idx)=>idx<4).map((items)=>(
              <CollectionItems key={items.id} items={items}/>
          ))
      }
    </div>
    </div>
)
export default CollectionPreview;