import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import Search from './Search';
import './Searches.css'

const Searches = () => {

    const [searchText, setSearchText] = React.useState('')
    const [searchResult, setSearchResult] = React.useState([])
    const [loading, setLoading] = React.useState(false)



    const handleSearch = data => {
        setSearchText(data.target.value)
    }

    React.useEffect(() => {
        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchResult(data)
            })
        setLoading(false)

    }, [searchText])

    if (loading) {
        return <Loading />
    }

    // console.log(searchResult);

    return (
        <section className='mt-[80px] sm:mt-[129px] py-3'>
            <h1 className='text-center text-3xl text-gray-600 py-3 md:py-5'>Search To Find Your User</h1>
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input onChange={handleSearch} placeholder="Search" type="search" className="input" />
            </div>
            {
                searchResult.map(s => <Search
                    key={s.id}
                    search={s}
                />)
            }
        </section>
    );
};

export default Searches;