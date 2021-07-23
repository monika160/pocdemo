
import React,{PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { images } from '../utils/utility'

import { Product } from '../commonComponents'

const tempArray = [
  {
    product_id: 1,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 2,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 3,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 4,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 5,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 6,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 7,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 8,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 9,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  },
  {
    product_id: 10,
    product_img: images.img_icon,
    product_name: 'Samsung',
    product_cat: 'Others',
    product_desc: 'This is brand item'
  }
]

export default class Dashboard extends PureComponent {

  constructor(props) {
      super(props);
      this.state = {
        
      }
  }

  render() {
      return (
          <View style={styles.mainView}>
           <Product data={tempArray}/>
          </View>
      )
  }
}

const styles = StyleSheet.create({

})

