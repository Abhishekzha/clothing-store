import React from 'react';
import './collections-page.styles.scss';
import CollectionItems from '../../components/collection-items/collection-items.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop//shop.selectors';

const CollectionsPage=({collections})=>{
    const {title,items}=collections;
    return(
    <div className='collections-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {
              items.map(item=>(
                  <CollectionItems key={item.id} items={item}/>
              ))
          }
        </div>
    </div>
    )
}

const mapStateToProps=(state,ownProps)=>({
    collections:selectCollection(ownProps.match.params.collectionsId)(state)
})
export default connect(mapStateToProps)(CollectionsPage);