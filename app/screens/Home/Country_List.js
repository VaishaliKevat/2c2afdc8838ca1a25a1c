/**
 * Country List Screen 
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './Country_List_Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';


export default class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: this.props.route.params.countryList
        }
    }

    componentDidMount() {
        console.log('@@@ Navigation =========', this.props.route)
    }

    //*> Succes Country Details Navigation
    onPressCountry = (item) => {
        this.props.navigation.navigate('CountryDetailScreen', { countryDetail: item })
    }

    renderCountryDetailsCell = (item, index) => {
        return (
            <Animatable.View animation="swing" >
                <TouchableOpacity onPress={() => this.onPressCountry(item)} style={styles.countryListCell}>
                    <View style={styles.leftView}>
                        <Text style={styles.fieldValue}>Name: {item.name}</Text>
                        <Text style={styles.fieldValue}>Capital: {item.capital}</Text>
                        <Text style={styles.fieldValue}>Population: {item.population}</Text>
                        <Text style={styles.fieldValue}>Lating: {item.latlng}</Text>
                    </View>
                    <SvgUri
                        width="15%"
                        height="35%"
                        uri={item.flag}
                    />
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    //*> Country List Data
    renderCountryListData = () => {
        return (
            <View style={styles.countryListContainer}>
                <FlatList
                    data={this.state.countryList}
                    renderItem={({ item, index }) => this.renderCountryDetailsCell(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.white }]}>
                <View style={styles.container}>
                    {this.renderCountryListData()}
                </View>
            </SafeAreaView>
        );
    }
};
