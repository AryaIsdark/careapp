import React from 'react'

const SearchResultScreen = ({match}:any) => {
    console.log(match)
    const {area} = match.params

   return (<>search result {area} </>)
}

export default SearchResultScreen