import React from 'react';
import './shop-page.styles.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionsPage from '../collections-page/collections-page.component';
import {Route} from 'react-router-dom';


const ShopPage=({match})=>(
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionsId`} component={CollectionsPage}/>
          </div>
  )



export default ShopPage;