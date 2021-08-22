import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                    navigation={navigation}
                />
                <ResultList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                    navigation={navigation}
                />
                <ResultList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                    navigation={navigation}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;