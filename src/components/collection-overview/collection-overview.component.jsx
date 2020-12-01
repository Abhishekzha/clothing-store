import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview=({collections})=>(
    <div className='collection-overview'>
       {
              collections.map(({id,title,items})=>(
                  <CollectionPreview key={id} title={title} items={items}/>
              ))
            }
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections:selectShopCollectionPreview
  })
export default connect(mapStateToProps)(CollectionOverview);